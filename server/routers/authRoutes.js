import express from "express";
import {
  googleLogin,
  googleCallback,
  getCurrentUser,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/google", googleLogin);
router.get("/google/callback", googleCallback);
router.get("/me", getCurrentUser);
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});

export default router;
