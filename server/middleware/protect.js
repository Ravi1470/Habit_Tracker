import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

const { JWT_SECRET } = process.env;

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
<<<<<<< HEAD
      res.status(404).json({ message: "try to login" });
=======
      return res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
>>>>>>> d35b3a13d2771b5a88aa32c4387dfc4e3cc7c1d4
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id).select("-__v");
    if (!user) {
<<<<<<< HEAD
      res.status(404).json({ message: "try to login again" });
=======
      return res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
>>>>>>> d35b3a13d2771b5a88aa32c4387dfc4e3cc7c1d4
    }

    req.user = user; // ✅ attach user to request
    next();
  } catch (err) {
    console.error("JWT verification error:", err.message);
<<<<<<< HEAD
    res.status(500).json({ message: "internal server error" });
=======
    return res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
>>>>>>> d35b3a13d2771b5a88aa32c4387dfc4e3cc7c1d4
  }
};
