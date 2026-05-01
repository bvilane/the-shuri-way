import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface CalculatingScreenProps {
  onComplete: () => void;
  onRestart: () => void;
}

const CalculatingScreen = ({ onComplete, onRestart }: CalculatingScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex min-h-[100dvh] items-center justify-center"
    >
      <button onClick={onRestart} className="absolute top-6 left-6 flex items-center gap-1.5 text-xs text-secondary/60 hover:text-secondary transition-colors">
        <RefreshCw className="w-3.5 h-3.5" />
        Restart
      </button>
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-1 h-1 rounded-full bg-secondary"
      />
    </motion.div>
  );
};

export default CalculatingScreen;
