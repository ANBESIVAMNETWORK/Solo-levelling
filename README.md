# Solo Leveling Discord RPG (scaffold)

Minimal Node.js + discord.js v14 + MongoDB scaffold with example commands.

## Requirements
- Node 18+
- MongoDB (Atlas or local)
- Discord application & bot (token, client id). Add bot to a dev guild.

## Setup
1. Clone the repo (already pushed to your GitHub):
   ```
   git clone https://github.com/ANBESIVAMNETWORK/Solo-levelling.git
   cd Solo-levelling
   ```
2. Create a `.env` from `.env.example` and fill values:
   ```
   DISCORD_TOKEN=your-bot-token
   CLIENT_ID=your-client-id
   GUILD_ID=your-dev-guild-id (optional, for faster registration)
   MONGO_URI=your-mongodb-connection-string
   ```
3. Install:
   ```
   npm install
   ```
4. Register slash commands to your dev guild (fast) or globally:
   ```
   npm run register-commands
   ```
   - If you set GUILD_ID in `.env`, commands register to that guild instantly.
   - Otherwise they'll be registered globally (may take up to 1 hour to appear).

5. Start the bot:
   ```
   npm run dev
   ```
   or production mode:
   ```
   npm start
   ```

## Commands
- `/start` — creates your hunter profile
- `/profile` — shows your basic profile
- `/hunt` — fight monsters for EXP and gold
- `/inventory` — view your items
- `/equip [itemname]` — equip an item to a slot
- `/shop` — view purchasable items

## Quick Start Guide
1. Run `/start` to create a profile
2. Run `/hunt` to fight enemies and gain EXP
3. Check `/profile` to see your stats
4. Use `/shop` to see available items
5. Use `/inventory` to view your items
6. Use `/equip [itemname]` to equip weapons/armor

## Architecture
- **Models**: User, Item, Inventory, Enemy (Mongoose schemas)
- **Services**: combat.js (fight resolution), inventory.js (item management)
- **Commands**: All slash commands in `src/commands/`
- **Database**: MongoDB with Mongoose ODM

## Next Steps
- Add gates/dungeons with multiple enemies
- Add shadow summons and shadow army mechanics
- Add guilds and guild wars
- Add PvP arena
- Add admin dashboard
- Add content: 200+ hunters, bosses, monsters, items, skills
