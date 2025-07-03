import { Router } from "express";
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  toggleReminder,
} from "../controllers/habitController.js";
import { protect } from "../middleware/protect.js";

const router = Router();

router.get("/", protect, getHabits);

router.post("/", protect, createHabit);

router.put("/:id", protect, updateHabit);

router.delete("/:id", protect, deleteHabit);

router.put("/:id/reminder", protect, toggleReminder);

export default router;
