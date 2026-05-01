import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ResultData } from '@/data/safari-persona/results';
import { supabase } from '@/integrations/safari-persona/supabase/client';

interface ShareSheetProps {
  open: boolean;
  onClose: () => void;
  result: ResultData;
  theme: { base: string; accent: string };
  moodboardImages: string[];
}

type Step = 'size' | 'email';
type Format = 'feed' | 'story';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getProxiedUrl(src: string): string {
  const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
  return `https://${projectId}.supabase.co/functions/v1/image-proxy?url=${encodeURIComponent(src)}`;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = getProxiedUrl(src);
  });
}

function drawImageCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number) {
  const imgRatio = img.width / img.height;
  const boxRatio = w / h;
  let sx = 0, sy = 0, sw = img.width, sh = img.height;
  if (imgRatio > boxRatio) {
    sw = img.height * boxRatio;
    sx = (img.width - sw) / 2;
  } else {
    sh = img.width / boxRatio;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, lineHeight: number, x: number, startY: number): number {
  const words = text.split(' ');
  let line = '';
  let y = startY;
  for (const word of words) {
    const test = line + word + ' ';
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line.trim(), x, y);
      line = word + ' ';
      y += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line.trim(), x, y);
  return y;
}

const ShareSheet = ({ open, onClose, result, theme, moodboardImages }: ShareSheetProps) => {
  const [step, setStep] = useState<Step>('size');
  const [format, setFormat] = useState<Format>('feed');
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSelectSize = (f: Format) => {
    setFormat(f);
    setStep('email');
  };

  const handleClose = () => {
    setStep('size');
    setEmail('');
    setEmailError('');
    setOptIn(true);
    onClose();
  };

  const recordDownload = useCallback(async (anonymous: boolean) => {
    const trimmedEmail = email.trim().toLowerCase();

    if (!anonymous && !EMAIL_PATTERN.test(trimmedEmail)) {
      setEmailError('Please enter a valid email, or skip.');
      return false;
    }

    setEmailError('');

    try {
      const { error } = await supabase.functions.invoke('record-result-download', {
        body: {
          email: anonymous ? null : trimmedEmail,
          marketingOptIn: anonymous ? false : optIn,
          format,
          resultTitle: result.title,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.warn('Download tracking failed', error);
    }

    return true;
  }, [email, format, optIn, result.title]);

  const generateAndShare = useCallback(async (anonymous = false) => {
    setGenerating(true);

    const canContinue = await recordDownload(anonymous);
    if (!canContinue) {
      setGenerating(false);
      return;
    }

    try {
      // Wait for fonts to be ready for canvas
      if (document.fonts) {
        await document.fonts.ready;
      }

      const width = 1080;
      const height = format === 'feed' ? 1080 : 1920;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error('Failed to get canvas context');
        setGenerating(false);
        return;
      }

    // Background
    ctx.fillStyle = theme.base;
    ctx.fillRect(0, 0, width, height);

    const isStory = format === 'story';
    const textStartY = isStory ? 320 : 160;
    const margin = 40;
    const maxWidth = width - margin * 2 - 80;

    const textX = margin + 40;

    // "YOU ARE A" label
    ctx.fillStyle = '#C4B8A8';
    ctx.font = '600 24px Outfit, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('YOU ARE A', textX, textStartY);

    // Title — increased from 64px to 80px
    ctx.fillStyle = '#F0EBE0';
    ctx.font = 'bold 80px Fraunces, serif';
    ctx.fillText(result.title, textX, textStartY + 85);

    // Recognition line (word-wrapped)
    ctx.font = '32px Outfit, sans-serif';
    ctx.fillStyle = '#C4B8A8';
    let currentY = wrapText(ctx, result.recognitionLine, maxWidth, 44, textX, textStartY + 165);

    // Short copy (word-wrapped, smaller, with padding)
    currentY += 50;
    ctx.font = '28px Outfit, sans-serif';
    ctx.fillStyle = '#C4B8A8CC';
    currentY = wrapText(ctx, result.shortCopy, maxWidth, 40, textX, currentY);

    // --- Draw moodboard images below text (reduced ~30%) ---
    const loadedImages: HTMLImageElement[] = [];
    try {
      const results = await Promise.allSettled(moodboardImages.map(loadImage));
      for (const r of results) {
        if (r.status === 'fulfilled') loadedImages.push(r.value);
      }
    } catch { /* continue without images */ }

    if (loadedImages.length > 0) {
      const gap = 8;
      const imgAreaTop = currentY + 40;

      if (!isStory && loadedImages.length >= 4) {
        // Feed: full-width 2x2 grid
        const gridW = width - margin * 2;
        const colW = (gridW - gap) / 2;
        const imgAreaBottom = Math.min(height - 160, imgAreaTop + 500);
        const imgAreaHeight = Math.max(imgAreaBottom - imgAreaTop, 80);
        const rowH = (imgAreaHeight - gap) / 2;
        drawImageCover(ctx, loadedImages[0], margin, imgAreaTop, colW, rowH);
        drawImageCover(ctx, loadedImages[1], margin + colW + gap, imgAreaTop, colW, rowH);
        const bottomY = imgAreaTop + rowH + gap;
        drawImageCover(ctx, loadedImages[2], margin, bottomY, colW, rowH);
        drawImageCover(ctx, loadedImages[3], margin + colW + gap, bottomY, colW, rowH);

        // Top gradient overlay
        const gradientH = 80;
        const gradient = ctx.createLinearGradient(0, imgAreaTop, 0, imgAreaTop + gradientH);
        gradient.addColorStop(0, theme.base);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(margin, imgAreaTop, gridW, gradientH);
      } else {
        // Story and fallback layouts
        const imgAreaBottom = isStory ? height - 200 : Math.min(height - 160, imgAreaTop + 500);
        const imgAreaHeight = Math.max(imgAreaBottom - imgAreaTop, 80);

        if (loadedImages.length >= 3) {
          // Story: 1 wide + 2 small
          const topH = imgAreaHeight * 0.55;
          drawImageCover(ctx, loadedImages[0], margin, imgAreaTop, width - margin * 2, topH);
          const storyBottomY = imgAreaTop + topH + gap;
          const bottomH = imgAreaHeight - topH - gap;
          const colW = (width - margin * 2 - gap) / 2;
          if (loadedImages[1]) drawImageCover(ctx, loadedImages[1], margin, storyBottomY, colW, bottomH);
          if (loadedImages[2]) drawImageCover(ctx, loadedImages[2], margin + colW + gap, storyBottomY, colW, bottomH);
        } else if (loadedImages.length === 2) {
          const colW = (width - margin * 2 - gap) / 2;
          drawImageCover(ctx, loadedImages[0], margin, imgAreaTop, colW, imgAreaHeight);
          drawImageCover(ctx, loadedImages[1], margin + colW + gap, imgAreaTop, colW, imgAreaHeight);
        } else {
          drawImageCover(ctx, loadedImages[0], margin, imgAreaTop, width - margin * 2, imgAreaHeight);
        }

        // Top gradient overlay
        const gradientH = 80;
        const gradient = ctx.createLinearGradient(0, imgAreaTop, 0, imgAreaTop + gradientH);
        gradient.addColorStop(0, theme.base);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(margin, imgAreaTop, width - margin * 2, gradientH);
      }
    }

    // Brand footer (centered)
    ctx.font = '24px Outfit, sans-serif';
    ctx.fillStyle = '#C4B8A850';
    ctx.textAlign = 'center';
    const footerY = isStory ? height - 120 : height - 60;
    ctx.fillText('The Shuri Collection', width / 2, footerY);

      canvas.toBlob(async (blob) => {
        if (!blob) {
          console.error('Failed to generate image blob');
          setGenerating(false);
          return;
        }

        console.log('Image generated successfully, size:', blob.size);

        const file = new File([blob], `safari-result-${format}.png`, { type: 'image/png' });

        // Try native share API (works on mobile)
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file],
              title: result.title,
              text: `I'm a ${result.title}! Discover your safari style.`,
            });
            console.log('Shared via native share');
            setGenerating(false);
            handleClose();
            return;
          } catch (err: any) {
            // User cancelled or share failed
            if (err.name !== 'AbortError') {
              console.log('Share failed, falling back to download:', err);
            } else {
              // User cancelled
              setGenerating(false);
              handleClose();
              return;
            }
          }
        }

        // Fallback: Direct download for desktop
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `safari-result-${format}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 100);
        console.log('Download triggered');

        setGenerating(false);
        handleClose();
      }, 'image/png');
    } catch (error) {
      console.error('Error generating image:', error);
      setGenerating(false);
    }
  }, [result, theme, format, moodboardImages, recordDownload]);

  return (
    <Drawer open={open} onOpenChange={(o) => !o && handleClose()} modal={false}>
      <DrawerContent className="bg-background border-border">
        <DrawerHeader>
          <DrawerTitle className="font-display text-foreground text-center">
            {step === 'size' ? 'Save your result' : 'Almost there'}
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-6 pb-8">
          <AnimatePresence mode="wait">
            {step === 'size' && (
              <motion.div
                key="size"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <Button
                  onClick={() => handleSelectSize('feed')}
                  variant="outline"
                  className="w-full font-body text-sm tracking-wider uppercase rounded-full py-6 border-secondary/30 text-foreground hover:bg-muted/20"
                >
                  Feed 1:1
                </Button>
                <Button
                  onClick={() => handleSelectSize('story')}
                  variant="outline"
                  className="w-full font-body text-sm tracking-wider uppercase rounded-full py-6 border-secondary/30 text-foreground hover:bg-muted/20"
                >
                  Story 9:16
                </Button>
              </motion.div>
            )}

            {step === 'email' && (
              <motion.div
                key="email"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  className="font-body bg-muted/20 border-secondary/20 text-foreground placeholder:text-secondary/50 rounded-full px-6 py-6"
                />
                {emailError && (
                  <p className="font-body text-xs text-destructive px-2">{emailError}</p>
                )}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="opt-in-share"
                    checked={optIn}
                    onCheckedChange={(checked) => setOptIn(checked === true)}
                    className="mt-0.5 border-secondary/40 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <label htmlFor="opt-in-share" className="font-body text-sm text-secondary leading-relaxed cursor-pointer">
                    Send me occasional emails about making my safari dreams come true.
                  </label>
                </div>
                <Button
                  onClick={() => generateAndShare(false)}
                  disabled={generating}
                  className="w-full font-body text-sm tracking-wider uppercase rounded-full py-6 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {generating ? 'Generating...' : 'Save Your Result'}
                </Button>
                <button
                  onClick={() => generateAndShare(true)}
                  disabled={generating}
                  className="w-full font-body text-xs text-secondary/60 hover:text-secondary transition-colors py-2"
                >
                  Skip and download
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ShareSheet;
