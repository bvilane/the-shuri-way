import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface TransitionScreenProps {
  onComplete: () => void;
  onRestart: () => void;
}

const TransitionScreen = ({ onComplete, onRestart }: TransitionScreenProps) => {
  const [showHeading, setShowHeading] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setShowHeading(true), 600));
    timers.push(setTimeout(() => setShowBody(true), 1800));
    timers.push(setTimeout(() => setShowButton(true), 3000));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center px-8">
      <button onClick={onRestart} className="absolute top-6 left-6 flex items-center gap-1.5 text-xs text-secondary/60 hover:text-secondary transition-colors">
        <RefreshCw className="w-3.5 h-3.5" />
        Restart
      </button>
      <div className="max-w-sm text-center space-y-6">
        <AnimatePresence>
          {showHeading && (
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-2xl md:text-3xl text-foreground leading-snug"
            >
              Now let's find out what type of safari you'd love.
            </motion.h2>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showBody && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="font-body text-base text-secondary leading-relaxed"
            >
              Remember, when you see a scenario, think about if you would love being in it.
              {'\n\n'}
              If your answer is yes, swipe right. If no, swipe left.
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="pt-4"
            >
              <Button
                onClick={onComplete}
                className="w-full bg-white text-background font-display text-lg py-6 rounded-full hover:bg-white/90"
              >
                I'm ready
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TransitionScreen;
