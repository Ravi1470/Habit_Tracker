import Habit from "../models/HabitModel.js";
import HabitHistory from "../models/HabitHistoryModel.js";

/**
 * Updates currentStreak and longestStreak for all habits
 * based on yesterday's habit history.
 */
export async function updateHabitStreaks() {
  console.log("⏰ Running habit streak updater...");

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const startOfYesterday = new Date(yesterday.setHours(0, 0, 0, 0));
  const endOfYesterday = new Date(yesterday.setHours(23, 59, 59, 999));

  try {
    const habits = await Habit.find();

    for (const habit of habits) {
      const history = await HabitHistory.findOne({
        habitId: habit._id,
        timestamp: { $gte: startOfYesterday, $lte: endOfYesterday },
      });

      if (!history || history.status === "missed") {
        habit.currentStreak = 0;
      } else if (history.status === "done") {
        habit.currentStreak += 1;
        if (habit.currentStreak > habit.longestStreak) {
          habit.longestStreak = habit.currentStreak;
        }
      }
      // status === "skipped" --> streak remains unchanged

      await habit.save();
    }

    console.log("✅ Streaks updated successfully.");
  } catch (error) {
    console.error("❌ Error updating habit streaks:", error.message);
  }
}
