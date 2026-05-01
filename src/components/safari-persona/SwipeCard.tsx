import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, PanInfo } from 'framer-motion';
import { Card } from '@/data/safari-persona/cards';
import { Skeleton } from '@/components/ui/skeleton';

interface SwipeCardProps {
  card: Card;
  imageUrl: string;
  counter: string;
  onSwipe: (direction: 'right' | 'left') => void;
  isTop: boolean;
}

const SwipeCard = ({ card, imageUrl, counter, onSwipe, isTop }: SwipeCardProps) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 0.8, 1, 0.8, 0.5]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const threshold = typeof window !== 'undefined' ? window.innerWidth * 0.3 : 120;

  const glowClass = useTransform(x, (val) => {
    if (val > threshold * 0.5) return 'swipe-glow-right';
    if (val < -threshold * 0.5) return 'swipe-glow-left';
    return '';
  });

  const [currentGlow, setCurrentGlow] = useState('');

  glowClass.on('change', (v) => setCurrentGlow(v));

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > threshold) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      setExitDirection(direction);
      animate(x, direction === 'right' ? 500 : -500, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        onComplete: () => onSwipe(direction),
      });
    } else {
      animate(x, 0, { type: 'spring', stiffness: 500, damping: 30 });
    }
  };

  const handleTap = (direction: 'right' | 'left') => {
    setExitDirection(direction);
    animate(x, direction === 'right' ? 500 : -500, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      onComplete: () => onSwipe(direction),
    });
  };

  if (!isTop) {
    return (
      <div className="absolute inset-x-4 top-[8vh] bottom-[12vh] rounded-2xl overflow-hidden bg-muted/30 scale-[0.96] opacity-60">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, hsl(144 22% 14% / 0.9), hsl(144 22% 14% / 0.4), transparent)'
          }}
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-x-4 top-[4vh] bottom-[12vh]">
      <motion.div
        style={{ x, rotate, opacity, touchAction: 'pan-x' }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
        className={`relative w-full h-full rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing ${currentGlow}`}
      >
        {/* Background image */}
        {!imageLoaded && (
          <Skeleton className="absolute inset-0 rounded-none" />
        )}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundColor: 'hsl(var(--muted))',
          }}
        />
        <img
          src={imageUrl}
          alt=""
          className="hidden"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Gradient overlays — bottom up and top down */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, hsl(144 22% 14%), hsl(144 22% 14% / 0.6), transparent)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, hsl(144 22% 14%), hsl(144 22% 14% / 0.6), transparent)'
          }}
        />

        {/* Counter */}
        <div className="absolute top-6 right-6 z-10">
          <span className="font-body text-sm text-secondary">{counter}</span>
        </div>

        {/* Scenario text */}
        <div className="absolute bottom-0 left-0 right-0 p-8 pb-24 z-10">
          <p
            className="font-display text-xl md:text-2xl text-foreground leading-relaxed whitespace-pre-line"
            style={{ textShadow: '0 2px 12px hsl(144 22% 14% / 0.8), 0 1px 4px hsl(144 22% 14% / 0.6)' }}
          >
            {card.scenario}
          </p>
        </div>
      </motion.div>

      {/* Tap buttons */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 pb-4 z-20">
        <button
          onClick={() => handleTap('left')}
          className="font-body text-xs tracking-wider uppercase text-secondary/70 hover:text-secondary transition-colors px-6 py-3"
        >
          Nope, not me
        </button>
        <button
          onClick={() => handleTap('right')}
          className="font-body text-xs tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors px-6 py-3"
        >
          Yes, that's me
        </button>
      </div>
    </div>
  );
};

export default SwipeCard;
