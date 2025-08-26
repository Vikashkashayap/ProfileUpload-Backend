const Profile = require("../models/profileModel");

// CREATE
exports.createProfile = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const image = req.file ? req.file.path : null;

    const profile = await Profile.create({ name, email, phone, address, image });
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
exports.getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateProfile = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const image = req.file ? req.file.path : undefined;

    const updatedData = { name, email, phone, address };
    if (image) updatedData.image = image;

    const profile = await Profile.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
