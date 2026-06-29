// src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true, index: true },
  username: { type: String, required: true },
  exp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  hp: { type: Number, default: 100 },
  mp: { type: Number, default: 50 },
  gold: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
