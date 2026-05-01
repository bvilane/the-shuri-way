import type { Card } from '@/data/safari-persona/cards';
import { curatedImages, cardImageMap } from '@/data/safari-persona/curatedImages';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[], count: number): T[] {
  return shuffle(arr).slice(0, count);
}

/**
 * Pick a card background image URL matched to the card's content.
 * Falls back to the general cards pool if no keyword match exists.
 */
export function getCardImage(cardId?: string): string {
  const pool = cardId && cardImageMap[cardId] ? cardImageMap[cardId] : curatedImages.cards;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getCardImagesForDeck(cards: Card[]): Record<string, string> {
  const used = new Set<string>();
  const assigned: Record<string, string> = {};

  cards.forEach(card => {
    const pool = cardImageMap[card.id] ?? curatedImages.cards;
    const unusedPool = pool.filter(url => !used.has(url));
    const availablePool = unusedPool.length > 0 ? unusedPool : pool;
    const imageUrl = availablePool[Math.floor(Math.random() * availablePool.length)];

    assigned[card.id] = imageUrl;
    used.add(imageUrl);
  });

  return assigned;
}

/**
 * Get 5 moodboard images for a result screen.
 * Picks 3 from the tempo folder and 2 from the personality folder, shuffled.
 */
export function getMoodboardImages(
  tempo: string,
  personality: string
): string[] {
  const tempoPool = curatedImages.tempo[tempo as keyof typeof curatedImages.tempo] ?? [];
  const personalityPool = curatedImages.personality[personality as keyof typeof curatedImages.personality] ?? [];

  const tempoImages = pickRandom(tempoPool, 3);
  const personalityImages = pickRandom(personalityPool, 2);

  return shuffle([...tempoImages, ...personalityImages]);
}
