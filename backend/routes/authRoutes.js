const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");
const upload = require("../middleware/uploadMiddleware")

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Convert buffer to Base64 Data URI (Works perfectly on Vercel)
  const base64Image = req.file.buffer.toString("base64");
  const imageUrl = `data:${req.file.mimetype};base64,${base64Image}`;

  res.status(200).json({ imageUrl });
});

module.exports = router;
