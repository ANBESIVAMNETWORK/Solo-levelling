# Solo Leveling Discord RPG (with Content Database)

Node.js + discord.js v14 + MongoDB RPG bot with comprehensive Solo Leveling theme and content.

## Features
- ✅ Character profiles & leveling system
- ✅ Combat engine (player vs. monsters)
- ✅ Inventory & equipment system
- ✅ Comprehensive character database (200+ hunters)
- ✅ Shadow army system (Igris, Beru, Tank, Iron, Bellion, etc.)
- ✅ Weapons & armor with stats
- ✅ Boss monsters & gate system
- ✅ Shop system

## Requirements
- Node 18+
- MongoDB (Atlas or local)
- Discord bot token & application ID

## Setup

```bash
git clone https://github.com/ANBESIVAMNETWORK/Solo-levelling.git
cd Solo-levelling
npm install
```

Create `.env` from `.env.example`:
```
DISCORD_TOKEN=your-token
CLIENT_ID=your-client-id
GUILD_ID=your-guild-id (optional)
MONGO_URI=your-mongodb-uri
```

Register commands:
```bash
npm run register-commands
```

Start bot:
```bash
npm run dev
```

## Available Commands

### Profile & Progression
- `/start` — Create hunter profile
- `/profile` — View your stats
- `/hunt` — Fight monsters for EXP & gold

### Inventory & Equipment
- `/inventory` — View your items
- `/equip [itemname]` — Equip weapon/armor
- `/shop` — Browse available items

### Reference (Databases)
- `/hunters [rank]` — View Solo Leveling hunters by rank
- `/shadows [rarity]` — View shadow army by rarity
- `/weapons [type] [rarity]` — View weapons/armor by type and rarity

## Data Files

All character, weapon, and monster data stored in `/src/data/`:
- `hunters.js` — 200+ hunters (S-Rank, A-Rank, etc.) with images
- `shadows.js` — Shadow army (Igris, Beru, Tank, Iron, Bellion, Tusk)
- `weapons.js` — Weapons, armor, accessories with stats
- `bosses.js` — Dungeon & world bosses
- `monsters.js` — Common monsters by rank (E-S)
- `gates.js` — Gate system by rank with difficulty levels

Each entry includes:
- Name, rank, level
- Stats (attack, defense, HP, MP)
- Rarity (common, uncommon, rare, epic, legendary)
- High-quality image URLs from Solo Leveling Fandom
- Descriptions

## Architecture

```
src/
├── index.js (bot bootstrap)
├── commands/ (slash commands)
│   ├── start.js
│   ├── profile.js
│   ├── hunt.js
│   ├── inventory.js
│   ├── equip.js
│   ├── shop.js
│   ├── hunters.js
│   ├── shadows.js
│   ├── weapons-list.js
├── models/ (Mongoose schemas)
│   ├── User.js
│   ├── Item.js
│   ├── Inventory.js
│   ├── Enemy.js
├── services/ (business logic)
│   ├── combat.js
│   ├── inventory.js
├── data/ (game content)
│   ├── hunters.js
│   ├── shadows.js
│   ├── weapons.js
│   ├── bosses.js
│   ├── monsters.js
│   ├── gates.js
├── database/
│   └── mongoose.js
├── handlers/
│   └── commandHandler.js
```

## Next Steps
- ✅ Inventory system
- ⬜ `/buy [item]` command to purchase from shop
- ⬜ `/gate [rank]` dungeon exploration
- ⬜ `/summon [shadow]` shadow recruitment
- ⬜ Raids & guilds
- ⬜ PvP Arena
- ⬜ Admin dashboard

## License
MIT
