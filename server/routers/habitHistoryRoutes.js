import { Router } from "express";
import {
  getHabitHistory,
  createHabitHistory,
} from "../controllers/habitHistoryController.js";

const router = Router();

// Get habit history by habit ID
router.get("/:habitId", getHabitHistory);

// Create new habit history entry
router.post("/", createHabitHistory);

export default router;
