// src/handlers/commandHandler.js
const fs = require('fs');
const path = require('path');

module.exports = (client) => {
  const commandsPath = path.join(__dirname, '..', 'commands');
  const commandFiles = fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if (command && command.data && command.execute) {
      client.commands.set(command.data.name, command);
    } else {
      console.warn(`Skipping invalid command file: ${file}`);
    }
  }
};
