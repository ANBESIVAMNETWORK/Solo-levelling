// src/database/mongoose.js
const mongoose = require('mongoose');

module.exports = async function connectMongoose() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGO_URI not set in environment');
  }
  mongoose.set('strictQuery', false);
  await mongoose.connect(uri, {
    // options are optional; modern mongoose auto-detects
  });
  console.log('Connected to MongoDB');
  return mongoose;
};
