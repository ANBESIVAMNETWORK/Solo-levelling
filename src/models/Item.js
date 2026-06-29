// src/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  rarity: { type: String, enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'], default: 'common' },
  type: { type: String, enum: ['consumable', 'weapon', 'armor', 'accessory', 'material', 'misc'], default: 'misc' },
  equippable: { type: Boolean, default: false },
  equipSlot: { type: String, enum: ['weapon', 'armor', 'accessory', 'none'], default: 'none' },
  attributes: {
    attack: { type: Number, default: 0 },
    defense: { type: Number, default: 0 },
    hpBoost: { type: Number, default: 0 },
    mpBoost: { type: Number, default: 0 }
  },
  price: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Item || mongoose.model('Item', ItemSchema);
