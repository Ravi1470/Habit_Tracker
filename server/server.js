import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/database.js";
import cors from "cors";
dotenv.config();
connectDB();

import habitRoutes from "./routers/habitRoutes.js";
import habitHistoryRoutes from "./routers/habitHistoryRoutes.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/habits", habitRoutes);
app.use("/api/habit-history", habitHistoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
