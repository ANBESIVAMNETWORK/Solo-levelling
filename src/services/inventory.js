// src/services/inventory.js
const Inventory = require('../models/Inventory');
const Item = require('../models/Item');

/**
 * Add item to user's inventory
 */
module.exports.addItemToInventory = async function (userId, itemId, amount = 1) {
  return Inventory.addItem(userId, itemId, amount);
};

/**
 * Remove item from user's inventory
 */
module.exports.removeItemFromInventory = async function (userId, itemId, amount = 1) {
  return Inventory.removeItem(userId, itemId, amount);
};

/**
 * Get user's inventory with item details populated
 */
module.exports.getUserInventory = async function (userId) {
  const inv = await Inventory.findOne({ userId }).populate('items.itemId');
  return inv || { userId, items: [] };
};

/**
 * Generate a loot drop based on rarity table
 * Returns an array of item IDs dropped
 */
module.exports.generateLoot = async function () {
  // Simple loot logic: random chance of common/uncommon/rare items
  const rng = Math.random();
  let rarity = 'common';
  if (rng > 0.8) rarity = 'rare';
  else if (rng > 0.5) rarity = 'uncommon';

  // In a real system, query items of that rarity
  // For now, return placeholder
  return { rarity, itemCount: rng > 0.7 ? 2 : 1 };
};
