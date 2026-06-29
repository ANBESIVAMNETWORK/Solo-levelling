// src/models/Inventory.js
const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true, index: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
      amount: { type: Number, default: 1, min: 1 }
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Helper: add item to inventory
InventorySchema.statics.addItem = async function (userId, itemId, amount = 1) {
  let inv = await this.findOne({ userId });
  if (!inv) {
    inv = new this({ userId, items: [] });
  }
  const existing = inv.items.find(i => i.itemId.toString() === itemId.toString());
  if (existing) {
    existing.amount += amount;
  } else {
    inv.items.push({ itemId, amount });
  }
  inv.updatedAt = new Date();
  await inv.save();
  return inv;
};

// Helper: remove item from inventory
InventorySchema.statics.removeItem = async function (userId, itemId, amount = 1) {
  let inv = await this.findOne({ userId });
  if (!inv) return null;
  const idx = inv.items.findIndex(i => i.itemId.toString() === itemId.toString());
  if (idx === -1) return inv;
  inv.items[idx].amount -= amount;
  if (inv.items[idx].amount <= 0) {
    inv.items.splice(idx, 1);
  }
  inv.updatedAt = new Date();
  await inv.save();
  return inv;
};

module.exports = mongoose.models.Inventory || mongoose.model('Inventory', InventorySchema);
