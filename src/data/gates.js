// src/data/gates.js
/**
 * Solo Leveling Gates Database
 * Different gate ranks with difficulty levels
 */

const GATES = [
  // E-Rank Gates
  {
    id: 'gate-e-1',
    name: 'E-Rank Gate (Abandoned Factory)',
    rank: 'E',
    difficulty: 1,
    recommendedLevel: 1,
    rewardExpMultiplier: 1.0,
    rewardGoldMultiplier: 1.0,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/a/ac/Gate_E_Rank.png',
    description: 'Easy gate for beginners. Abandoned factory with basic monsters.'
  },
  {
    id: 'gate-e-2',
    name: 'E-Rank Gate (Ruins)',
    rank: 'E',
    difficulty: 2,
    recommendedLevel: 3,
    rewardExpMultiplier: 1.1,
    rewardGoldMultiplier: 1.1,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/b/bf/Gate_E_Ruins.png',
    description: 'Ancient ruins filled with undead creatures.'
  },

  // D-Rank Gates
  {
    id: 'gate-d-1',
    name: 'D-Rank Gate (Forest)',
    rank: 'D',
    difficulty: 5,
    recommendedLevel: 15,
    rewardExpMultiplier: 2.0,
    rewardGoldMultiplier: 2.0,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/c/c2/Gate_D_Forest.png',
    description: 'Dangerous forest. Home to beasts and monsters.'
  },
  {
    id: 'gate-d-2',
    name: 'D-Rank Gate (Underground)',
    rank: 'D',
    difficulty: 6,
    recommendedLevel: 18,
    rewardExpMultiplier: 2.2,
    rewardGoldMultiplier: 2.2,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/d/d4/Gate_D_Underground.png',
    description: 'Deep underground cavern. Many surprises await.'
  },

  // C-Rank Gates
  {
    id: 'gate-c-1',
    name: 'C-Rank Gate (Mountain)',
    rank: 'C',
    difficulty: 10,
    recommendedLevel: 30,
    rewardExpMultiplier: 3.0,
    rewardGoldMultiplier: 3.0,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/e/e1/Gate_C_Mountain.png',
    description: 'Treacherous mountain. Requires team effort.'
  },
  {
    id: 'gate-c-2',
    name: 'C-Rank Gate (Volcanic)',
    rank: 'C',
    difficulty: 11,
    recommendedLevel: 35,
    rewardExpMultiplier: 3.2,
    rewardGoldMultiplier: 3.2,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/f/f2/Gate_C_Volcanic.png',
    description: 'Active volcano. Fire-type monsters prevalent.'
  },

  // B-Rank Gates
  {
    id: 'gate-b-1',
    name: 'B-Rank Gate (Demon Tower)',
    rank: 'B',
    difficulty: 15,
    recommendedLevel: 50,
    rewardExpMultiplier: 4.0,
    rewardGoldMultiplier: 4.0,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/a/a5/Gate_B_Demon.png',
    description: 'Dark tower filled with demonic creatures.'
  },
  {
    id: 'gate-b-2',
    name: 'B-Rank Gate (Swamp)',
    rank: 'B',
    difficulty: 16,
    recommendedLevel: 55,
    rewardExpMultiplier: 4.2,
    rewardGoldMultiplier: 4.2,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/b/b3/Gate_B_Swamp.png',
    description: 'Poisonous swamp with toxic creatures.'
  },

  // A-Rank Gates
  {
    id: 'gate-a-1',
    name: 'A-Rank Gate (Abyss)',
    rank: 'A',
    difficulty: 20,
    recommendedLevel: 80,
    rewardExpMultiplier: 5.0,
    rewardGoldMultiplier: 5.0,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/c/c4/Gate_A_Abyss.png',
    description: 'The infinite abyss. Extremely dangerous.'
  },
  {
    id: 'gate-a-2',
    name: 'A-Rank Gate (Sky Castle)',
    rank: 'A',
    difficulty: 21,
    recommendedLevel: 85,
    rewardExpMultiplier: 5.2,
    rewardGoldMultiplier: 5.2,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/d/d5/Gate_A_Sky.png',
    description: 'Floating castle in the clouds. Home to sky dragons.'
  },

  // S-Rank Gates
  {
    id: 'gate-s-1',
    name: 'S-Rank Gate (Dimension Rift)',
    rank: 'S',
    difficulty: 25,
    recommendedLevel: 150,
    rewardExpMultiplier: 8.0,
    rewardGoldMultiplier: 8.0,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/e/e2/Gate_S_Rift.png',
    description: 'Interdimensional rift. Only for the strongest.'
  },
  {
    id: 'gate-s-2',
    name: 'S-Rank Gate (Shadow World)',
    rank: 'S',
    difficulty: 30,
    recommendedLevel: 180,
    rewardExpMultiplier: 10.0,
    rewardGoldMultiplier: 10.0,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/f/f3/Gate_S_Shadow.png',
    description: 'The shadow world itself. Incomprehensibly dangerous.'
  }
];

module.exports = GATES;
