import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

const { JWT_SECRET } = process.env;

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(404).json({ message: "try to login" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id).select("-__v");
    if (!user) {
      res.status(404).json({ message: "try to login again" });
    }

    req.user = user; // ✅ attach user to request
    next();
  } catch (err) {
    console.error("JWT verification error:", err.message);
    res.status(500).json({ message: "internal server error" });
  }
};
