const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadMiddleware");
const {
  createProfile,
  getProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} = require("../controllers/profileController");

// CRUD routes
router.post("/", upload.single("image"), createProfile);
router.get("/", getProfiles);
router.get("/:id", getProfileById);
router.put("/:id", upload.single("image"), updateProfile);
router.delete("/:id", deleteProfile);

module.exports = router;
