# Solo Leveling Discord RPG

**Complete A-to-Z Solo Leveling RPG bot with all characters, enemies, dungeons, and systems.**

## Current Features (Phases 1-3)

### Core Gameplay
- ✅ Hunter profiles & progression
- ✅ Combat engine (turn-based)
- ✅ EXP & leveling system
- ✅ Inventory & equipment
- ✅ Shop system (`/buy`, `/sell`)
- ✅ Gate exploration (`/gate [rank]` E-S with multi-wave dungeons)
- ✅ Shadow summons (`/summon [shadow]`)
- ✅ Shadow army tracking (`/shadows-army`)
- ✅ Quests system (`/quest list|accept|progress`)
- ✅ Skills system (`/skills`)

### Content Database
- ✅ 18+ hunters (all ranks)
- ✅ 7 shadows (Igris, Beru, Tank, Iron, Bellion, Tusk, soldiers)
- ✅ 20+ weapons & armor
- ✅ 7 bosses
- ✅ 20+ monsters (E-S rank)
- ✅ 10+ gates (E-S rank)
- ✅ 8+ quests (story & daily)
- ✅ 10+ skills (physical, shadow, magic, support, ultimate)

## Commands

### Profile & Progression
- `/start` — Create hunter profile
- `/profile` — View your stats
- `/hunt` — Fight random monsters
- `/quest [list|accept|progress]` — Manage quests
- `/skills` — View learned skills

### Combat & Exploration
- `/gate [rank]` — Enter gate (E/D/C/B/A/S) with multi-wave dungeons
- `/summon [shadowname]` — Summon shadow to your army
- `/shadows-army` — View your summoned shadows

### Inventory & Economy
- `/inventory` — View items
- `/equip [itemname]` — Equip weapon/armor
- `/shop` — View items for sale
- `/buy [itemname] [quantity]` — Purchase item
- `/sell [itemname] [quantity]` — Sell item

### Reference
- `/hunters [rank]` — View hunters by rank
- `/shadows [rarity]` — View shadow army database
- `/weapons [type] [rarity]` — View weapons/armor

## Setup

```bash
git clone https://github.com/ANBESIVAMNETWORK/Solo-levelling.git
cd Solo-levelling
npm install
```

Create `.env`:
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

Start:
```bash
npm run dev
```

## Database Structure

```
src/data/
├── hunters.js (18+ hunters with images)
├── shadows.js (7 shadows)
├── weapons.js (20+ items)
├── bosses.js (7 bosses)
├── monsters.js (20+ monsters E-S rank)
├── gates.js (10+ gates E-S rank)
├── quests.js (8+ quests)
└── skills.js (10+ skills)

src/models/
├── User.js
├── Item.js
├── Inventory.js
├── Enemy.js
├── Shadow.js
├── Skill.js
└── Quest.js

src/commands/
├── start.js, profile.js
├── hunt.js, gate.js
├── summon.js, shadows-army.js
├── buy.js, sell.js, shop.js, inventory.js, equip.js
├── quest.js, skills.js
├── hunters.js, shadows.js, weapons-list.js
└── (more coming...)
```

## Upcoming Features

- **Phase 4**: Advanced Combat & Skills (`/use-skill`)
- **Phase 5**: Raids & Boss Encounters (`/raid [boss]`)
- **Phase 6**: Guild System (`/guild create|join|war`)
- **Phase 7**: PvP Arena (`/pvp [opponent]`)
- **Phase 8**: Story Mode & Advanced Quests
- **Phase 9**: Admin Dashboard (web UI)
- **Phase 10**: CI/CD, Tests, Docker

## License
MIT
