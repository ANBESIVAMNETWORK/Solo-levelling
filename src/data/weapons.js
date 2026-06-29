// src/data/weapons.js
/**
 * Solo Leveling Weapons & Equipment Database
 * Weapons, armor, and accessories with stats
 */

const WEAPONS = [
  // Legendary Weapons
  {
    id: 'soul-weapon-dagger',
    name: 'Soul Weapon: Dagger',
    rarity: 'legendary',
    type: 'weapon',
    attack: 50,
    defense: 5,
    price: 10000,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/e/e2/Soul_Dagger.png',
    description: 'Sung Jin-Woo\'s primary soul weapon. Materializes from mana.'
  },
  {
    id: 'soul-weapon-sword',
    name: 'Soul Weapon: Sword',
    rarity: 'legendary',
    type: 'weapon',
    attack: 55,
    defense: 8,
    price: 12000,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/7/73/Soul_Sword.png',
    description: 'Legendary sword. Secondary form of Sung Jin-Woo\'s weapon.'
  },

  // S-Rank Weapons
  {
    id: 'blessed-sword',
    name: 'Blessed Sword',
    rarity: 'epic',
    type: 'weapon',
    attack: 35,
    defense: 5,
    price: 5000,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/8/8c/Blessed_Sword.png',
    description: 'Holy weapon with divine properties. Good for clearing dungeons.'
  },
  {
    id: 'frostbrand-spear',
    name: 'Frostbrand Spear',
    rarity: 'epic',
    type: 'weapon',
    attack: 32,
    defense: 4,
    price: 4500,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/9/9d/Frostbrand_Spear.png',
    description: 'Ice-enchanted spear. Used by A-Rank hunters.'
  },

  // A-Rank Weapons
  {
    id: 'iron-sword',
    name: 'Iron Sword',
    rarity: 'uncommon',
    type: 'weapon',
    attack: 15,
    defense: 2,
    price: 200,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/c/cb/Iron_Sword.png',
    description: 'Basic iron sword. Good starting weapon.'
  },
  {
    id: 'steel-dagger',
    name: 'Steel Dagger',
    rarity: 'uncommon',
    type: 'weapon',
    attack: 12,
    defense: 1,
    price: 150,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/5/54/Steel_Dagger.png',
    description: 'Lightweight dagger. Good for quick strikes.'
  },
  {
    id: 'wooden-club',
    name: 'Wooden Club',
    rarity: 'common',
    type: 'weapon',
    attack: 8,
    defense: 0,
    price: 50,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/2/2a/Wooden_Club.png',
    description: 'Basic wooden club. For novice hunters.'
  },

  // Armor
  {
    id: 'dragon-scale-armor',
    name: 'Dragon Scale Armor',
    rarity: 'legendary',
    type: 'armor',
    attack: 10,
    defense: 60,
    price: 15000,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/a/aa/Dragon_Armor.png',
    description: 'Ultimate armor crafted from dragon scales. Nearly impenetrable.'
  },
  {
    id: 'blessed-mail',
    name: 'Blessed Mail',
    rarity: 'epic',
    type: 'armor',
    attack: 5,
    defense: 35,
    price: 4000,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/d/da/Blessed_Mail.png',
    description: 'Holy-infused mail armor. Provides excellent protection.'
  },
  {
    id: 'leather-armor',
    name: 'Leather Armor',
    rarity: 'uncommon',
    type: 'armor',
    attack: 2,
    defense: 10,
    price: 250,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/3/30/Leather_Armor.png',
    description: 'Basic leather armor for starting hunters.'
  },
  {
    id: 'cloth-robe',
    name: 'Cloth Robe',
    rarity: 'common',
    type: 'armor',
    attack: 1,
    defense: 5,
    price: 100,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/4/40/Cloth_Robe.png',
    description: 'Light cloth robe. Minimal protection.'
  },

  // Accessories
  {
    id: 'ring-of-power',
    name: 'Ring of Power',
    rarity: 'legendary',
    type: 'accessory',
    attack: 20,
    defense: 15,
    price: 8000,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/f/f8/Ring_Power.png',
    description: 'Legendary ring that greatly boosts all stats.'
  },
  {
    id: 'amulet-wisdom',
    name: 'Amulet of Wisdom',
    rarity: 'epic',
    type: 'accessory',
    attack: 5,
    defense: 10,
    price: 2000,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/1/16/Amulet_Wisdom.png',
    description: 'Ancient amulet that increases intelligence and mana pool.'
  },
  {
    id: 'iron-ring',
    name: 'Iron Ring',
    rarity: 'common',
    type: 'accessory',
    attack: 2,
    defense: 3,
    price: 100,
    image: 'https://static.wikia.nocookie.net/solo-leveling/images/6/65/Iron_Ring.png',
    description: 'Simple iron ring. Small stat boost.'
  }
];

module.exports = WEAPONS;
