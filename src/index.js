// src/index.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const connectMongoose = require('./database/mongoose');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.commands = new Collection();

const handlersPath = path.join(__dirname, 'handlers');
const commandHandler = require(path.join(handlersPath, 'commandHandler'));
commandHandler(client);

// Connect to MongoDB
connectMongoose()
  .then(() => {
    const token = process.env.DISCORD_TOKEN;
    if (!token) {
      console.error('DISCORD_TOKEN is not set in environment.');
      process.exit(1);
    }
    client.login(token);
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const cmd = client.commands.get(interaction.commandName);
  if (!cmd) {
    await interaction.reply({ content: 'Unknown command', ephemeral: true });
    return;
  }
  try {
    await cmd.execute(interaction);
  } catch (err) {
    console.error('Command execution error:', err);
    if (!interaction.replied) {
      await interaction.reply({ content: 'There was an error executing that command.', ephemeral: true });
    }
  }
});
