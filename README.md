# Solo Leveling Discord RPG (scaffold)

Minimal Node.js + discord.js v14 + MongoDB scaffold with example commands.

## Requirements
- Node 18+
- MongoDB (Atlas or local)
- Discord application & bot (token, client id). Add bot to a dev guild.

## Setup
1. Copy files into a new repo/folder (already pushed to your GitHub if you followed along).
2. Create a `.env` from `.env.example` and fill values.
3. Install:
   ```
   npm install
   ```
4. Register slash commands to your dev guild (fast) or globally:
   ```
   npm run register-commands
   ```
   - If you set GUILD_ID in `.env`, commands register to that guild.
   - Otherwise they'll be registered globally (may take up to an hour to appear)

5. Start the bot:
   ```
   npm run dev
   ```
   or
   ```
   npm start
   ```

## Commands (so far)
- /start — creates your hunter profile
- /profile — shows your basic profile
- /hunt — fight random monsters to earn EXP and gold

## Next steps
- Add Inventory, Items, shop, equipment and more commands like /gate, /dungeon
- Add content: monsters, loot tables, shadow summons
- Add tests, CI, and a dashboard

