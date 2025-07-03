import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/database.js";
import cors from "cors";
import cron from "node-cron";
import cookieParser from "cookie-parser";
dotenv.config();
connectDB();

import habitRoutes from "./routers/habitRoutes.js";
import habitHistoryRoutes from "./routers/habitHistoryRoutes.js";
import authRoutes from "./routers/authRoutes.js";
import { updateHabitStreaks } from "./utils/habitMarkerCron.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true, // Allow cookies to be sent
  })
);

app.use("/api/habits", habitRoutes);
app.use("/api/habit-history", habitHistoryRoutes);
app.use("/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

cron.schedule("5 0 * * *", async () => {
  await updateHabitStreaks();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
