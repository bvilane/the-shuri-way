export interface CardScore {
  axis: 'personality' | 'tempo';
  type: string;
  value: number;
}

export interface Card {
  id: string;
  scenario: string;
  scored: boolean;
  scores: {
    right: CardScore[] | null;
    left: CardScore[] | null;
  } | null;
}

export const demoCards: Card[] = [
  {
    id: "demo-a",
    scenario: "You have never been on safari, but you already have strong opinions about what yours would look like.",
    scored: false,
    scores: null,
  },
  {
    id: "demo-b",
    scenario: "You are only here because someone sent you this link and you have no idea why.\nWildlife is not really your thing.",
    scored: false,
    scores: null,
  }
];

export const scoredCards: Card[] = [
  {
    id: "card-1",
    scenario: "You could spend twenty minutes watching a single bird, wait by a waterhole to see if a hippo surfaces, or sit with a pride of lions doing nothing for an hour.\nNone of that feels like wasted time to you.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "observer", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-2",
    scenario: "You come back from a game drive having seen few big animals or dramatic scenes, but you noticed the little things. \nThe tracks, sounds, or way the light changes and touches things. That counts as a good day to you.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "observer", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-3",
    scenario: "Someone asks what the best part of the day was and your answer has nothing to do with which animals you saw or didn't see.\nIt's that moment when the sky turned a colour you had never seen before and the world felt most beautiful to you right then.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "romantic", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-4",
    scenario: "You are not really keeping a mental checklist of everything this trip includes.\nYou are more interested in whether the experience is actually making you feel something.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "romantic", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-5",
    scenario: "Your guide offers to take a longer route back to camp. It covers new terrain, has no guarantees of sightings, and adds forty minutes.\nYou are already reaching for your boots. No way you're missing an adventure.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "explorer", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-6",
    scenario: "Safari to you is not just game drives. You want to quad bike through the reserve, float over it in a hot air balloon, or ride through it on horseback.\nThe bush is an adventure playground and you intend to use it.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "explorer", value: 1 }, { axis: "tempo", type: "kinetic", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-7",
    scenario: "Your guide spends five minutes before the drive explaining the plan, showing you the map, and describing where he is hoping to take you today.\nBy the time you set off you feel noticeably more relaxed than you did before he spoke.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "planner", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-8",
    scenario: "When your guide makes a decision on the drive, like stopping somewhere or turning back early, you want to understand why.\nNot because you don't trust them. Just because knowing the reasoning keeps your mind at peace.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "planner", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-9",
    scenario: "Something remarkable happens in front of you and your first instinct is to look at the faces of the people around you.\nSeeing their reaction is part of the experience.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "connector", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-10",
    scenario: "Some of your favourite moments from any trip have happened around a fire, over a meal, or in a vehicle with people worth talking to.\nThe safari is not only the reason you are here.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "connector", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-11",
    scenario: "You have been stationary for a long time. Nothing is happening and your guide isn't saying much.\nYou are comfortable with this long stretch of silence.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "still", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-12",
    scenario: "Your group is restless and ready to move on from a sighting. You would actually prefer to stay a bit longer and enjoy the moment.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "still", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-13",
    scenario: "A quiet first half of the day doesn't bother you as long as the afternoon delivers.\nYou actually prefer it that way. The wait makes the payoff even better.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "slowBuild", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-14",
    scenario: "You do not need things to happen immediately but you want to feel like the day is building toward something.\nA completely flat day with no progression would leave you unsatisfied.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "slowBuild", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-15",
    scenario: "Your best days out here move between quiet stretches and bursts of energy rather than staying at one pitch throughout.\nToo much stillness bores you, but too much intensity makes you tired and unable to enjoy the moment.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "rhythmic", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-16",
    scenario: "A drink at sundown hits differently after a long drive. A quiet morning feels more valuable after an eventful evening.\nYou need one to fully appreciate the other.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "rhythmic", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-17",
    scenario: "You are most present out here when your feet are on the ground and your body is doing something.\nSitting in a vehicle is fine but it always feels like a compromise.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "kinetic", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-18",
    scenario: "You have already asked the lodge what activities are available beyond game drives.\nSitting still for five days straight was never really the plan.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "kinetic", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-19",
    scenario: "You are on night three at the same camp. You know the staff, you know the routine, you know which chair you like.\nThat familiarity is making the whole experience better, not flatter.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "anchored", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-20",
    scenario: "You could do the same sunset drive three evenings in a row from the same camp and enjoy it more each time.\nRepetition is not boring to you.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "anchored", value: 1 }],
      left: null,
    },
  },
  {
    id: "card-21",
    scenario: "You had no itinerary for the afternoon. No guide, no group, and no plan.\nYou sat outside and watched the bush for two hours and didn't feel like you wasted a single minute of your trip.",
    scored: true,
    scores: {
      right: [{ axis: "personality", type: "observer", value: 1 }, { axis: "personality", type: "romantic", value: 1 }],
      left: [{ axis: "personality", type: "planner", value: 1 }, { axis: "personality", type: "explorer", value: 1 }, { axis: "personality", type: "connector", value: 1 }],
    },
  },
  {
    id: "card-22",
    scenario: "You spent most of today sitting at a waterhole, instead of walking, driving to new areas, or chasing new activities.\nThat kind of quiet time to breathe is why you came on this trip in the first place.",
    scored: true,
    scores: {
      right: [{ axis: "tempo", type: "still", value: 1 }, { axis: "tempo", type: "slowBuild", value: 1 }, { axis: "tempo", type: "anchored", value: 1 }],
      left: [{ axis: "tempo", type: "rhythmic", value: 1 }, { axis: "tempo", type: "kinetic", value: 1 }],
    },
  }
];

export function shuffleCards(cards: Card[]): Card[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
