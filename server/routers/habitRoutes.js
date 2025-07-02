import { Router } from "express";
import {
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  toggleReminder,
} from "../controllers/habitController.js";

const router = Router();

router.get("/", getHabits);

router.post("/", createHabit);

router.put("/:id", updateHabit);

router.delete("/:id", deleteHabit);

router.put("/:id/reminder", toggleReminder);

export default router;
