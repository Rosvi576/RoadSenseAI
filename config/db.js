const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("⚠ MongoDB Connection Failed");
    console.log(error.message);

    // Let server.js decide what to do
    throw error;
  }
}

console.log("db.js loaded");

module.exports = connectDB;