// src/data/skills.js
/**
 * Solo Leveling Skills Database
 * Player abilities and shadow skills
 */

const SKILLS = [
  // Basic Skills
  {
    id: 'slash',
    name: 'Slash',
    type: 'physical',
    level: 1,
    damage: 15,
    manaCost: 0,
    cooldown: 0,
    description: 'Basic melee attack.'
  },
  {
    id: 'power-strike',
    name: 'Power Strike',
    type: 'physical',
    level: 5,
    damage: 30,
    manaCost: 20,
    cooldown: 3,
    description: 'A powerful strike that deals double damage.'
  },
  {
    id: 'whirlwind',
    name: 'Whirlwind',
    type: 'physical',
    level: 10,
    damage: 40,
    manaCost: 40,
    cooldown: 5,
    description: 'Spin attack hitting all enemies.'
  },

  // Shadow Skills
  {
    id: 'shadow-strike',
    name: 'Shadow Strike',
    type: 'shadow',
    level: 1,
    damage: 25,
    manaCost: 30,
    cooldown: 2,
    description: 'Command shadows to strike.'
  },
  {
    id: 'shadow-burst',
    name: 'Shadow Burst',
    type: 'shadow',
    level: 20,
    damage: 60,
    manaCost: 80,
    cooldown: 6,
    description: 'All shadows attack at once.'
  },

  // Magic Skills
  {
    id: 'fireball',
    name: 'Fireball',
    type: 'magic',
    level: 5,
    damage: 35,
    manaCost: 50,
    cooldown: 3,
    description: 'Cast a fireball at enemy.'
  },
  {
    id: 'ice-spear',
    name: 'Ice Spear',
    type: 'magic',
    level: 10,
    damage: 40,
    manaCost: 60,
    cooldown: 4,
    description: 'Freeze and pierce with ice.'
  },
  {
    id: 'shadow-domain',
    name: 'Shadow Domain',
    type: 'ultimate',
    level: 50,
    damage: 100,
    manaCost: 200,
    cooldown: 15,
    description: 'Summon domain of shadows. Ultimate ability.'
  },

  // Support Skills
  {
    id: 'heal',
    name: 'Heal',
    type: 'support',
    level: 5,
    heal: 50,
    manaCost: 40,
    cooldown: 3,
    description: 'Restore health.'
  },
  {
    id: 'mana-shield',
    name: 'Mana Shield',
    type: 'support',
    level: 10,
    defense: 30,
    manaCost: 60,
    cooldown: 5,
    description: 'Create shield that reduces damage.'
  }
];

module.exports = SKILLS;
