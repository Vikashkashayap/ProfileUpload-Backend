const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const profileRoutes = require("./routes/profileRoutes");
const formRoutes = require("./routes/formRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // serve uploaded images


// Connect DB
connectDB();

// Routes
app.use("/api/profiles", profileRoutes);
app.use("/api/forms", formRoutes);
app.use("/api/products", productRoutes);

module.exports = app;
