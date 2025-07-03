import { Router } from "express";
import {
  getHabitHistory,
  createHabitHistory,
} from "../controllers/habitHistoryController.js";
import { protect } from "../middleware/protect.js";

const router = Router();

// Get habit history by habit ID
router.get("/:habitId", protect, getHabitHistory);

// Create new habit history entry
router.post("/", protect, createHabitHistory);

export default router;
