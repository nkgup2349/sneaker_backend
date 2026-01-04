const mongoose = require("mongoose");

module.exports = mongoose.model("sellerproducts", new mongoose.Schema({
  productId: String,
  sellerName: String,
  sellerRating: Number,
  price: Number,
  stock: Number,
  createdAt: { type: Date, default: Date.now }
}));
