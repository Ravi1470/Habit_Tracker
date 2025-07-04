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
<<<<<<< HEAD
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
=======
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
>>>>>>> d35b3a13d2771b5a88aa32c4387dfc4e3cc7c1d4
});

export default router;
