// src/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
      const MONGO_URI="mongodb+srv://vikashkashyap756:Welcome%401234@canada-form.ba6ezdb.mongodb.net/canadaForm?retryWrites=true&w=majority&appName=canada-Form";


    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
