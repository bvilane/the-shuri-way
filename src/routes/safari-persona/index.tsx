import { createFileRoute } from '@tanstack/react-router';
import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from '@/components/safari-persona/IntroScreen';
import ExplainerScreen from '@/components/safari-persona/ExplainerScreen';
import CardDeck from '@/components/safari-persona/CardDeck';
import CalculatingScreen from '@/components/safari-persona/CalculatingScreen';
import ResultScreen from '@/components/safari-persona/ResultScreen';

export const Route = createFileRoute('/safari-persona/')({
  component: SafariPersona,
});

type Screen = 'intro' | 'explainer' | 'cards' | 'calculating' | 'result';

function SafariPersona() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [result, setResult] = useState<{ personality: string; tempo: string } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCardComplete = useCallback((r: { personality: string; tempo: string }) => {
    setResult(r);
    setScreen('calculating');
  }, []);

  const handleCalcComplete = useCallback(() => {
    setScreen('result');
  }, []);

  const handleRestart = useCallback(() => {
    setResult(null);
    setScreen('intro');
  }, []);

  if (!mounted) {
    return (
      <div className="safari-persona-app fixed inset-0 w-full h-full min-h-screen overflow-x-hidden bg-background" />
    );
  }

  return (
    <div className="safari-persona-app fixed inset-0 w-full h-full min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {screen === 'intro' && (
          <motion.div key="intro" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <IntroScreen onBegin={() => setScreen('explainer')} />
          </motion.div>
        )}
        {screen === 'explainer' && (
          <motion.div key="explainer" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <ExplainerScreen onComplete={() => setScreen('cards')} onRestart={handleRestart} />
          </motion.div>
        )}
        {screen === 'cards' && (
          <motion.div key="cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <CardDeck onComplete={handleCardComplete} onRestart={handleRestart} />
          </motion.div>
        )}
        {screen === 'calculating' && (
          <motion.div key="calculating" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <CalculatingScreen onComplete={handleCalcComplete} onRestart={handleRestart} />
          </motion.div>
        )}
        {screen === 'result' && result && (
          <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <ResultScreen personality={result.personality} tempo={result.tempo} onRestart={() => { setResult(null); setScreen('intro'); }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
