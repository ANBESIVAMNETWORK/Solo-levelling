// src/data/bosses.js
/**
 * Solo Leveling Boss Monsters Database
 * Dungeon bosses and world bosses
 */

const BOSSES = [
  // Dungeon Bosses
  {
    id: 'goblin-king',
    name: 'Goblin King',
    rank: 'D',
    level: 15,
    maxHp: 200,
    attack: 25,
    defense: 10,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/3/3e/Goblin_King.png',
    description: 'Leader of goblin colonies. Often found in D-Rank dungeons.'
  },
  {
    id: 'orc-warlord',
    name: 'Orc Warlord',
    rank: 'C',
    level: 30,
    maxHp: 400,
    attack: 45,
    defense: 20,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/7/74/Orc_Warlord.png',
    description: 'Powerful orc leader. C-Rank dungeon boss.'
  },
  {
    id: 'troll-king',
    name: 'Troll King',
    rank: 'B',
    level: 50,
    maxHp: 600,
    attack: 60,
    defense: 35,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/8/8f/Troll_King.png',
    description: 'Ancient troll with regeneration abilities.'
  },
  {
    id: 'dragon-hatchling',
    name: 'Dragon Hatchling',
    rank: 'A',
    level: 80,
    maxHp: 1000,
    attack: 90,
    defense: 50,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/9/91/Dragon_Hatchling.png',
    description: 'Young dragon. Rare A-Rank dungeon boss. Can use fire breath.'
  },

  // World Bosses
  {
    id: 'green-goblin-chieftain',
    name: 'Green Goblin Chieftain',
    rank: 'B',
    level: 55,
    maxHp: 800,
    attack: 70,
    defense: 40,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/c/c3/Green_Goblin_Boss.png',
    description: 'Leader of massive goblin army. World boss encounter.'
  },
  {
    id: 'red-orc-general',
    name: 'Red Orc General',
    rank: 'A',
    level: 85,
    maxHp: 1200,
    attack: 95,
    defense: 60,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/4/48/Red_Orc_General.png',
    description: 'Legendary orc general. S-Rank dungeon boss.'
  },
  {
    id: 'ice-witch',
    name: 'Ice Witch',
    rank: 'A',
    level: 90,
    maxHp: 900,
    attack: 100,
    defense: 45,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/5/52/Ice_Witch.png',
    description: 'Powerful mage. Casts ice spells. High damage output.'
  },
  {
    id: 'shadow-dragon',
    name: 'Shadow Dragon',
    rank: 'S',
    level: 150,
    maxHp: 2000,
    attack: 150,
    defense: 100,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/2/2b/Shadow_Dragon_Boss.png',
    description: 'Legendary S-Rank boss. Nearly unstoppable. Rare encounter.'
  },
  {
    id: 'lich-king',
    name: 'Lich King',
    rank: 'S',
    level: 160,
    maxHp: 2500,
    attack: 140,
    defense: 110,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/8/85/Lich_King.png',
    description: 'Undead sorcerer. Can revive minions. Ultimate S-Rank challenge.'
  }
];

module.exports = BOSSES;
