import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

const { JWT_SECRET } = process.env;

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id).select("-__v");
    if (!user) {
      return res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
    }

    req.user = user; // ✅ attach user to request
    next();
  } catch (err) {
    console.error("JWT verification error:", err.message);
    return res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
  }
};
