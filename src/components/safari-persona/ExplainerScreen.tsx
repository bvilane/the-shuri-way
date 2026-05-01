import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';


interface ExplainerScreenProps {
  onComplete: () => void;
  onRestart: () => void;
}

const steps = [
  'We show you a scenario.',
  'Swipe right if it sounds like you.',
  'Swipe left if it does not.',
];

const ExplainerScreen = ({ onComplete, onRestart }: ExplainerScreenProps) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setCurrentStep(0), 600));
    timers.push(setTimeout(() => setCurrentStep(1), 2200));
    timers.push(setTimeout(() => setCurrentStep(2), 3800));
    timers.push(setTimeout(() => setShowButton(true), 5400));

    

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center px-8">
      <button onClick={onRestart} className="absolute top-6 left-6 flex items-center gap-1.5 text-xs text-secondary/60 hover:text-secondary transition-colors">
        <RefreshCw className="w-3.5 h-3.5" />
        Restart
      </button>
      <div className="max-w-sm w-full space-y-8">
        {steps.map((step, i) => (
          <AnimatePresence key={i}>
            {currentStep >= i && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex items-start gap-4"
              >
                <span className="font-body text-secondary text-sm mt-0.5 shrink-0 w-5">
                  {i + 1}.
                </span>
                <p className="font-body text-foreground text-lg leading-relaxed">
                  {step}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        ))}

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
                Let's practice
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExplainerScreen;
