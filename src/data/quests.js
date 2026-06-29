// src/data/quests.js
/**
 * Solo Leveling Quests Database
 * Story quests, side quests, daily quests
 */

const QUESTS = [
  // Story Quests
  {
    id: 'quest-awakening',
    name: 'Awakening',
    type: 'story',
    stage: 1,
    description: 'Sung Jin-Woo awakens as an E-Rank hunter. Complete your first dungeon.',
    objectives: ['Complete 1 dungeon', 'Reach level 2'],
    rewards: { exp: 100, gold: 50 },
    completed: false
  },
  {
    id: 'quest-first-gate',
    name: 'First Gate',
    type: 'story',
    stage: 2,
    description: 'Enter your first gate with other hunters.',
    objectives: ['Enter a D-Rank gate'],
    rewards: { exp: 250, gold: 150 },
    completed: false
  },
  {
    id: 'quest-shadow-awakening',
    name: 'Shadow Awakening',
    type: 'story',
    stage: 3,
    description: 'Summon your first shadow. Meet Igris.',
    objectives: ['Summon a shadow'],
    rewards: { exp: 500, gold: 300 },
    completed: false
  },
  {
    id: 'quest-rank-promotion-d',
    name: 'D-Rank Promotion',
    type: 'story',
    stage: 4,
    description: 'Get promoted to D-Rank hunter.',
    objectives: ['Reach level 20'],
    rewards: { exp: 1000, gold: 500 },
    completed: false
  },
  {
    id: 'quest-rank-promotion-c',
    name: 'C-Rank Promotion',
    type: 'story',
    stage: 5,
    description: 'Get promoted to C-Rank hunter.',
    objectives: ['Reach level 40'],
    rewards: { exp: 2000, gold: 1000 },
    completed: false
  },

  // Daily Quests
  {
    id: 'daily-hunt-5',
    name: 'Daily Hunt',
    type: 'daily',
    description: 'Defeat 5 monsters',
    objectives: ['Defeat 5 monsters'],
    rewards: { exp: 100, gold: 50 },
    cooldown: 86400, // 24 hours
    completed: false
  },
  {
    id: 'daily-gate-1',
    name: 'Daily Gate',
    type: 'daily',
    description: 'Complete 1 gate',
    objectives: ['Complete 1 gate'],
    rewards: { exp: 200, gold: 100 },
    cooldown: 86400,
    completed: false
  },
  {
    id: 'daily-summon',
    name: 'Daily Summon',
    type: 'daily',
    description: 'Summon a shadow',
    objectives: ['Summon a shadow'],
    rewards: { exp: 50, gold: 25 },
    cooldown: 86400,
    completed: false
  }
];

module.exports = QUESTS;
