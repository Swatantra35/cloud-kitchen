/**
 * Seed script
 * Run once: npm run seed
 * Idempotent — safe to re-run (uses upsert for menu items)
 */

require("dotenv").config();
const mongoose = require("mongoose");
const Admin    = require("../models/Admin");
const MenuItem = require("../models/MenuItem");
const Setting  = require("../models/Setting");

const seed = async () => {
  try {
    console.log("🌱  Connecting to MongoDB…");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅  Connected.\n");

    // ── Seed default menu items if empty ──────────────────────────────────────
    const existingItems = await MenuItem.countDocuments();
    if (existingItems === 0) {
      console.log("🥟  Seeding default menu items…");
      const defaultItems = [
        { itemId: 1, name: "Steam Veg Momos", category: "momos", emoji: "🥟", desc: "Classic steamed dumplings filled with spiced fresh vegetables", price: 120, halfPrice: 70, pieces: 10, halfPieces: 5, veg: true, popular: true, available: true },
        { itemId: 2, name: "Fried Veg Momos", category: "momos", emoji: "🥟", desc: "Crispy fried dumplings with seasoned vegetable filling", price: 140, halfPrice: 80, pieces: 10, halfPieces: 5, veg: true, popular: false, available: true },
        { itemId: 3, name: "Steam Chicken Momos", category: "momos", emoji: "🥟", desc: "Juicy minced chicken steamed dumplings with Himalayan spices", price: 160, halfPrice: 90, pieces: 10, halfPieces: 5, veg: false, popular: true, available: true },
        { itemId: 4, name: "Tandoori Paneer Momos", category: "momos", emoji: "🥟", desc: "Marinated cottage cheese momos grilled in tandoor", price: 180, halfPrice: 100, pieces: 10, halfPieces: 5, veg: true, spicy: true, popular: true, available: true },
        { itemId: 5, name: "Paneer Kathi Roll", category: "rolls", emoji: "🌯", desc: "Grilled paneer tikka wrapped in a crisp paratha with chutney", price: 130, veg: true, popular: true, available: true },
        { itemId: 6, name: "Chilli Potato", category: "snacks", emoji: "🌶️", desc: "Crispy potato fingers tossed in spicy Indo-Chinese sauce", price: 110, veg: true, spicy: true, popular: true, available: true },
        { itemId: 7, name: "Cutting Chai", category: "drinks", emoji: "☕", desc: "Strong spiced Indian ginger cardamom tea", price: 30, veg: true, popular: true, available: true },
      ];
      await MenuItem.insertMany(defaultItems);
      console.log(`   ✔ ${defaultItems.length} default menu items initialized!\n`);
    } else {
      console.log(`   ℹ  ${existingItems} menu items already exist in database.\n`);
    }

    // ── Seed default store settings ────────────────────────────────────────
    console.log("⚙️  Seeding default store configurations…");
    const existingSettings = await Setting.findOne();
    if (existingSettings) {
      console.log("   ℹ  Store settings already exist.\n");
    } else {
      await Setting.create({});
      console.log("   ✔ Default store settings initialized!\n");
    }

    console.log("🎉  Seed complete!\n");
    process.exit(0);
  } catch (err) {
    console.error("❌  Seed failed:", err.message);
    process.exit(1);
  }
};

seed();
