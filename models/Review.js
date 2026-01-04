// models/Review.js
const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Review",
  new mongoose.Schema({
    id: String,            // r4
    productId: String,     // p1
    user: String,          // u4
    rating: Number,        // 1–10
    comment: String,
    date: String           // "2025-01-08"
  })
);
