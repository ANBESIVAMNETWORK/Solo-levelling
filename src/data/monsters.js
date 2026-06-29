// src/data/monsters.js
/**
 * Solo Leveling Monsters Database
 * Common dungeon monsters encountered during hunts
 */

const MONSTERS = [
  // E-Rank Monsters
  {
    id: 'goblin-soldier',
    name: 'Goblin Soldier',
    rank: 'E',
    level: 1,
    maxHp: 20,
    attack: 5,
    defense: 1,
    expReward: 10,
    goldReward: 5,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/1/1a/Goblin_E_Rank.png',
    description: 'Basic goblin. Weak E-Rank monster.'
  },
  {
    id: 'wolf-beast',
    name: 'Wolf Beast',
    rank: 'E',
    level: 2,
    maxHp: 25,
    attack: 6,
    defense: 2,
    expReward: 15,
    goldReward: 7,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/3/3d/Wolf_E_Rank.png',
    description: 'Feral wolf. Fast and agile.'
  },
  {
    id: 'skeleton-archer',
    name: 'Skeleton Archer',
    rank: 'E',
    level: 2,
    maxHp: 30,
    attack: 7,
    defense: 1,
    expReward: 18,
    goldReward: 8,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/9/9e/Skeleton_Archer.png',
    description: 'Undead archer. Shoots arrows from distance.'
  },

  // D-Rank Monsters
  {
    id: 'ogre-warrior',
    name: 'Ogre Warrior',
    rank: 'D',
    level: 10,
    maxHp: 80,
    attack: 20,
    defense: 8,
    expReward: 50,
    goldReward: 30,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/b/b9/Ogre_Warrior.png',
    description: 'Large ogre with great strength.'
  },
  {
    id: 'shadow-imp',
    name: 'Shadow Imp',
    rank: 'D',
    level: 8,
    maxHp: 50,
    attack: 18,
    defense: 5,
    expReward: 40,
    goldReward: 25,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/5/56/Shadow_Imp.png',
    description: 'Small demonic creature. Can cast dark spells.'
  },
  {
    id: 'giant-spider',
    name: 'Giant Spider',
    rank: 'D',
    level: 9,
    maxHp: 70,
    attack: 22,
    defense: 6,
    expReward: 45,
    goldReward: 28,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/7/77/Giant_Spider.png',
    description: 'Enormous arachnid. Shoots webs to trap enemies.'
  },

  // C-Rank Monsters
  {
    id: 'orc-soldier',
    name: 'Orc Soldier',
    rank: 'C',
    level: 25,
    maxHp: 150,
    attack: 40,
    defense: 15,
    expReward: 100,
    goldReward: 60,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/c/c0/Orc_Soldier.png',
    description: 'Green-skinned orc. Moderate threat level.'
  },
  {
    id: 'vampire-bat',
    name: 'Vampire Bat',
    rank: 'C',
    level: 22,
    maxHp: 100,
    attack: 35,
    defense: 10,
    expReward: 85,
    goldReward: 50,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/2/2f/Vampire_Bat.png',
    description: 'Flying creature that drains health.'
  },

  // B-Rank Monsters
  {
    id: 'high-orc',
    name: 'High Orc',
    rank: 'B',
    level: 50,
    maxHp: 300,
    attack: 70,
    defense: 30,
    expReward: 200,
    goldReward: 120,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/4/4c/High_Orc.png',
    description: 'Elite orc warrior. Dangerous opponent.'
  },
  {
    id: 'wyvern',
    name: 'Wyvern',
    rank: 'B',
    level: 55,
    maxHp: 350,
    attack: 75,
    defense: 35,
    expReward: 220,
    goldReward: 150,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/6/6f/Wyvern.png',
    description: 'Dragon-like creature. Breathes fire.'
  },

  // A-Rank Monsters
  {
    id: 'chimera',
    name: 'Chimera',
    rank: 'A',
    level: 80,
    maxHp: 500,
    attack: 100,
    defense: 50,
    expReward: 400,
    goldReward: 250,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/8/8d/Chimera.png',
    description: 'Hybrid monster with multiple heads. Extremely dangerous.'
  },
  {
    id: 'basilisk',
    name: 'Basilisk',
    rank: 'A',
    level: 85,
    maxHp: 550,
    attack: 110,
    defense: 45,
    expReward: 450,
    goldReward: 280,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/9/92/Basilisk.png',
    description: 'Venomous serpent. Petrifying gaze.'
  }
];

module.exports = MONSTERS;
