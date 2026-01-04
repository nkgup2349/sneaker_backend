const mongoose = require("mongoose");

module.exports = mongoose.model("products", new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  images: [String],
  authenticityScore: Number
}));
