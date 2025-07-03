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
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
});

export default router;
