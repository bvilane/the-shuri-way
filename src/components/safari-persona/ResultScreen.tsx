import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { results, tempoThemes, type TempoKey } from '@/data/safari-persona/results';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { getMoodboardImages } from '@/lib/safari-persona/images';
import ShareSheet from './ShareSheet';

interface ResultScreenProps {
  personality: string;
  tempo: string;
  onRestart?: () => void;
}

const ResultScreen = ({ personality, tempo, onRestart }: ResultScreenProps) => {
  const resultKey = `${tempo}_${personality}`;
  const result = results[resultKey];
  const theme = tempoThemes[tempo as TempoKey];

  const [showTitle, setShowTitle] = useState(false);
  const [showRecognition, setShowRecognition] = useState(false);
  const [showMoodboard, setShowMoodboard] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([false, false, false, false, false]);
  const [shareOpen, setShareOpen] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // Pick moodboard images once on mount
  const [moodboardImages] = useState(() => getMoodboardImages(tempo, personality));

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowTitle(true), 300),
      setTimeout(() => setShowRecognition(true), 1500),
      setTimeout(() => { setShowMoodboard(true); setShowContent(true); }, 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (!result) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <p className="font-body text-secondary">Something went wrong.</p>
      </div>
    );
  }

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  useEffect(() => {
    // Update parent wrapper background color
    const wrapper = document.querySelector('.safari-persona-app') as HTMLElement;
    if (wrapper) {
      wrapper.style.setProperty('--theme-bg-color', theme.base);
      wrapper.setAttribute('data-theme-color', 'true');
    }

    // Update meta theme-color for mobile browser chrome
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.setAttribute('name', 'theme-color');
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute('content', theme.base);

    return () => {
      if (wrapper) {
        wrapper.style.removeProperty('--theme-bg-color');
        wrapper.removeAttribute('data-theme-color');
      }
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#1C2B1E'); // Reset to default green
    };
  }, [theme.base]);

  return (
    <div
      ref={resultRef}
      className="min-h-[100dvh] px-6 pb-16 pt-[15vh]"
      style={{ backgroundColor: theme.base }}
    >
      <div className="max-w-md mx-auto">
        {/* Title */}
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-secondary mb-3">
              You are a
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight mb-4">
              {result.title}
            </h1>
          </motion.div>
        )}

        {/* Recognition line */}
        {showRecognition && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-10 space-y-5"
          >
            <p className="font-body text-lg text-secondary leading-relaxed">
              {result.recognitionLine}
            </p>
            <p className="font-body text-base text-secondary/80 leading-relaxed">
              {result.shortCopy}
            </p>
          </motion.div>
        )}

        {/* Moodboard */}
        {showMoodboard && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-2 mb-10"
          >
            <div className="col-span-2 aspect-[16/9] rounded-lg overflow-hidden bg-muted/20 relative">
              {!imagesLoaded[0] && <Skeleton className="absolute inset-0 rounded-none" />}
              {moodboardImages[0] && (
                <img
                  src={moodboardImages[0]}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onLoad={() => handleImageLoad(0)}
                />
              )}
            </div>
            {moodboardImages.slice(1).map((src, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted/20 relative">
                {!imagesLoaded[i + 1] && <Skeleton className="absolute inset-0 rounded-none" />}
                {src && (
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onLoad={() => handleImageLoad(i + 1)}
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Paragraph + buttons */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="font-body text-base text-foreground/90 leading-relaxed mb-12">
              {result.paragraph}
            </p>

            <div className="space-y-5 mb-16">
              <Button
                onClick={() => setShareOpen(true)}
                className="w-full font-body text-sm tracking-wider uppercase rounded-full py-6 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Share Your Result
              </Button>
              <button
                onClick={onRestart}
                className="flex items-center justify-center gap-2 w-full font-body text-xs text-secondary/60 hover:text-secondary transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Start Again
              </button>
            </div>

            <p className="font-body text-xs text-secondary/40 text-center mt-16">
              The Shuri Collection
            </p>
          </motion.div>
        )}
      </div>

      <ShareSheet
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        result={result}
        theme={theme}
        moodboardImages={moodboardImages}
      />
    </div>
  );
};

export default ResultScreen;
