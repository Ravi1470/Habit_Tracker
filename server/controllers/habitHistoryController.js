import HabitHistory from "../models/HabitHistoryModel.js";
const getHabitHistory = async (req, res) => {
  try {
    const { habitId } = req.params;
    const { days } = req.query;

    let filter = { habitId };

    if (days) {
      const now = new Date();
      const fromDate = new Date(now.setDate(now.getDate() - Number(days)));

      filter.timestamp = { $gte: fromDate };
    }

    const habitHistory = await HabitHistory.find(filter).sort({
      timestamp: -1,
    });

    if (habitHistory.length > 0) {
      res.status(200).json(habitHistory);
    } else {
      res.status(404).json({
        error: "No history found for this habit in the given interval",
      });
    }
  } catch (error) {
    console.error("Error fetching habit history:", error);
    res.status(500).json({ error: "Failed to fetch habit history" });
  }
};

const createHabitHistory = async (req, res) => {
  try {
    const { habitId, status, notes } = req.body;

    const newHabitHistory = new HabitHistory({
      habitId,
      status,
      notes,
    });

    await newHabitHistory.save();
    res.status(201).json(newHabitHistory);
  } catch (error) {
    console.error("Error creating habit history:", error);
    res
      .status(500)
      .json({ error: "Failed to create habit history", input: req.body });
  }
};

export { getHabitHistory, createHabitHistory };
