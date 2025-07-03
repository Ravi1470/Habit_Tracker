import axios from "axios";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
  JWT_EXPIRES_IN,
  JWT_SECRET,
} = process.env;

const createToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const googleLogin = (req, res) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=openid%20email%20profile`;
  res.redirect(url);
};

export const googleCallback = async (req, res) => {
  const code = req.query.code;

  try {
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: GOOGLE_REDIRECT_URI,
      grant_type: "authorization_code",
    });

    const { access_token } = tokenRes.data;

    const userInfoRes = await axios.get(
      "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    const { id, email, name, picture } = userInfoRes.data;

    let user = await User.findOne({ googleId: id });
    if (!user) {
      user = await User.create({ googleId: id, email, name, picture });
    }
    const token = createToken(user._id);

    // ✅ Store token in HttpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production with HTTPS
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.redirect(process.env.FRONTEND_URL);
    // res.json({ message: "✅ Google login successful", user });
  } catch (error) {
    console.error("OAuth error:", error.response?.data || error.message);
    res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-__v");

    if (!user) return res.status(401).json({ error: "User not found" });

    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.redirect(process.env.FRONTEND_URL || "http://localhost:5173");
    res.status(401).json({ error: "Invalid or expired token" });
  }
};
