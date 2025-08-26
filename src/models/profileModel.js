const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    image: { type: String }, // store file path
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
