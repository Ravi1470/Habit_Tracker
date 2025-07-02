import mongoose from "mongoose";

const habitHistorySchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Habit",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  status: {
    type: String,
    enum: ["done", "missed", "skipped"],
    default: "done",
  },
  notes: String,
});

habitHistorySchema.index({ habitId: 1, timestamp: 1 });

export default mongoose.model("HabitHistory", habitHistorySchema);
