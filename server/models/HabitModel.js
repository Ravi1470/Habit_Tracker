import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: false, default: null },
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
    notes: { type: String, required: false, default: "" },
    completed: { type: Boolean, default: false },
    completionDate: { type: Date },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    reminderDays: {
      type: [Number],
      default: [],
      required: true,
    },
    reminderTimes: {
      type: [String],
      default: [],
      required: true,
    },
    isReminderEnabled: { type: Boolean, default: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const Habit = mongoose.model("Habit", habitSchema);
export default Habit;
