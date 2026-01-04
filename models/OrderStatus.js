// models/OrderStatus.js
const mongoose = require("mongoose");

module.exports = mongoose.model(
  "OrderStatus",
  new mongoose.Schema({
    id: String,           
    date: String,        
    status: String,    

    productId: String,  
    productName: String,      
    category: String,
    price: Number,  
    image: String,  

    userId: String  
  })
);
