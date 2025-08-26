const Product = require("../models/productModel");

// Add new product
exports.createProduct = async (req, res) => {
   try {
    let data = req.body;

    // Agar array bheja gaya hai
    if (Array.isArray(data)) {
      const products = await Product.insertMany(data);
      res.status(201).json(products);
    } else {
      // Agar single object bheja gaya hai
      const product = new Product(data);
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
