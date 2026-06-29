// src/data/shadows.js
/**
 * Solo Leveling Shadow Army Database
 * All shadows that Sung Jin-Woo can summon
 */

const SHADOWS = [
  {
    id: 'igris',
    name: 'Igris',
    title: 'Shadow of a Knight',
    rarity: 'epic',
    level: 50,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/a/a8/Igris.png',
    description: 'First shadow summon. A knight with sword mastery. Can evolve.'
  },
  {
    id: 'beru',
    name: 'Beru',
    title: 'Shadow of a Centipede',
    rarity: 'legendary',
    level: 60,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/d/d2/Beru.png',
    description: 'Powerful bug-type shadow. High speed and attack power.'
  },
  {
    id: 'tank',
    name: 'Tank',
    title: 'Shadow of a Golem',
    rarity: 'epic',
    level: 45,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/e/e5/Tank_Shadow.png',
    description: 'Tank-type shadow. High defense and HP. Protects allies.'
  },
  {
    id: 'iron',
    name: 'Iron',
    title: 'Shadow of an Iron Beast',
    rarity: 'epic',
    level: 48,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/b/b4/Iron_Shadow.png',
    description: 'Armored shadow. Excellent defense and moderate damage output.'
  },
  {
    id: 'bellion',
    name: 'Bellion',
    title: 'Shadow of a Demon',
    rarity: 'legendary',
    level: 55,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/f/f3/Bellion_Shadow.png',
    description: 'Demon-type shadow. High attack and intelligence. Can cast spells.'
  },
  {
    id: 'tusk',
    name: 'Tusk',
    title: 'Shadow of a Beast',
    rarity: 'rare',
    level: 40,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/c/c9/Tusk_Shadow.png',
    description: 'Beast-type shadow. Good all-around stats. Early game shadow.'
  },
  {
    id: 'shadow-soldiers',
    name: 'Shadow Soldiers',
    title: 'Weaker Shadows',
    rarity: 'common',
    level: 10,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/1/1c/Shadow_Soldiers.png',
    description: 'Low-tier shadows. Weak individually but strong in numbers.'
  }
];

module.exports = SHADOWS;
