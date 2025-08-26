const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String, // ex: "Mobile", "Laptop", "Shoes"
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String, // product image ka link
  },
  stock: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
