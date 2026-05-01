import { useState, useMemo, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SwipeCard from './SwipeCard';
import TransitionScreen from './TransitionScreen';
import { Card, demoCards, scoredCards, shuffleCards } from '@/data/safari-persona/cards';
import { Scores, createInitialScores, applySwipe, calculateResult } from '@/lib/safari-persona/scoring';
import { getCardImagesForDeck } from '@/lib/safari-persona/images';
import { RefreshCw } from 'lucide-react';

interface CardDeckProps {
  onComplete: (result: { personality: string; tempo: string }) => void;
  onRestart: () => void;
}

const CardDeck = ({ onComplete, onRestart }: CardDeckProps) => {
  const allCards = useMemo(() => {
    const shuffled = shuffleCards(scoredCards);
    return [...demoCards, ...shuffled];
  }, []);

  // Pre-assign an image URL to each card
  const cardImages = useMemo(() => {
    return getCardImagesForDeck(allCards);
  }, [allCards]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(createInitialScores);
  const [showTransition, setShowTransition] = useState(false);

  // Preload the next 2 card images
  useEffect(() => {
    const toPreload = [currentIndex + 1, currentIndex + 2];
    toPreload.forEach(i => {
      const card = allCards[i];
      if (card && cardImages[card.id]) {
        const img = new Image();
        img.src = cardImages[card.id];
      }
    });
  }, [currentIndex, allCards, cardImages]);

  const handleSwipe = useCallback((direction: 'right' | 'left') => {
    const card = allCards[currentIndex];

    if (card.scored) {
      setScores(prev => applySwipe(prev, card, direction));
    }

    const nextIndex = currentIndex + 1;

    // If we just finished the last demo card, show transition
    if (nextIndex === demoCards.length) {
      setShowTransition(true);
      setCurrentIndex(nextIndex);
      return;
    }

    if (nextIndex >= allCards.length) {
      setScores(prev => {
        const finalScores = applySwipe(prev, card, direction);
        const result = calculateResult(finalScores);
        setTimeout(() => onComplete(result), 0);
        return finalScores;
      });
    } else {
      setCurrentIndex(nextIndex);
    }
  }, [currentIndex, allCards, onComplete]);

  const handleTransitionComplete = useCallback(() => {
    setShowTransition(false);
  }, []);

  const currentCard = allCards[currentIndex];
  const nextCard = currentIndex + 1 < allCards.length ? allCards[currentIndex + 1] : null;

  const isDemo = currentIndex < demoCards.length;
  const scoredIndex = currentIndex - demoCards.length + 1;
  const counter = isDemo ? 'Practice' : `${scoredIndex} / ${scoredCards.length}`;

  if (showTransition) {
    return <TransitionScreen onComplete={handleTransitionComplete} onRestart={onRestart} />;
  }

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden">
      <button onClick={onRestart} className="absolute top-6 left-6 z-50 flex items-center gap-1.5 text-xs text-secondary/60 hover:text-secondary transition-colors">
        <RefreshCw className="w-3.5 h-3.5" />
        Restart
      </button>
      <AnimatePresence>
        {nextCard && (
          <SwipeCard
            key={nextCard.id + '-next'}
            card={nextCard}
            imageUrl={cardImages[nextCard.id]}
            counter=""
            onSwipe={() => {}}
            isTop={false}
          />
        )}
        {currentCard && (
          <SwipeCard
            key={currentCard.id}
            card={currentCard}
            imageUrl={cardImages[currentCard.id]}
            counter={counter}
            onSwipe={handleSwipe}
            isTop={true}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardDeck;
