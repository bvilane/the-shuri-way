import { Card } from '@/data/safari-persona/cards';
import { PersonalityKey, TempoKey } from '@/data/safari-persona/results';

export interface Scores {
  personality: Record<PersonalityKey, number>;
  tempo: Record<TempoKey, number>;
}

export function createInitialScores(): Scores {
  return {
    personality: { observer: 0, romantic: 0, explorer: 0, planner: 0, connector: 0 },
    tempo: { still: 0, slowBuild: 0, rhythmic: 0, kinetic: 0, anchored: 0 },
  };
}

export function applySwipe(scores: Scores, card: Card, direction: 'right' | 'left'): Scores {
  if (!card.scored || !card.scores) return scores;

  const newScores = {
    personality: { ...scores.personality },
    tempo: { ...scores.tempo },
  };

  const scoreEntries = direction === 'right' ? card.scores.right : card.scores.left;
  if (scoreEntries) {
    for (const entry of scoreEntries) {
      if (entry.axis === 'personality') {
        newScores.personality[entry.type as PersonalityKey] += entry.value;
      } else {
        newScores.tempo[entry.type as TempoKey] += entry.value;
      }
    }
  }

  return newScores;
}

const personalityOrder: PersonalityKey[] = ['observer', 'romantic', 'explorer', 'planner', 'connector'];
const tempoOrder: TempoKey[] = ['still', 'slowBuild', 'rhythmic', 'kinetic', 'anchored'];

export function calculateResult(scores: Scores): { personality: PersonalityKey; tempo: TempoKey } {
  const personality = resolveHighest(scores.personality, personalityOrder);
  const tempo = resolveHighest(scores.tempo, tempoOrder);
  return { personality, tempo };
}

function resolveHighest<T extends string>(obj: Record<T, number>, order: T[]): T {
  let max = -1;
  let winner = order[0];
  for (const key of order) {
    if (obj[key] > max) {
      max = obj[key];
      winner = key;
    }
  }
  return winner;
}
