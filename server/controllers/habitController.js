import Habit from "../models/HabitModel.js";

// Get all habits
const getHabits = async (req, res, next) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    console.error("Error fetching habits:", error);
    res.status(500).json({ error: "Failed to fetch habits" });
  }
};

const getHabit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const habit = await Habit.find(id);
    res.status(200).json(habit);
  } catch (error) {
    console.error("Error fetching habit:", error);
    res.status(500).json({ error: "Failed to fetch habit" });
  }
};

// Create a new habit
const createHabit = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      notes,
      priority,
      reminderDays,
      reminderTimes,
    } = req.body;

    const newHabit = new Habit({
      title,
      description,
      category,
      notes,
      priority,
      reminderDays,
      reminderTimes,
      userId: req.user._id,
    });
    console.log(req.user);
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (error) {
    console.error("Error creating habit:", error);
    res.status(500).json({ error: "Failed to create habit", input: req.body });
  }
};

// Update a habit by ID
const updateHabit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedHabit = await Habit.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (updatedHabit) {
      res.status(200).json(updatedHabit);
    } else {
      res.status(404).json({ error: "Habit not found" });
    }
  } catch (error) {
    console.error("Error updating habit:", error);
    res.status(500).json({ error: "Failed to update habit" });
  }
};

// Delete a habit by ID
const deleteHabit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedHabit = await Habit.findByIdAndDelete(id);

    if (deletedHabit) {
      res.status(200).json({ message: "Habit deleted successfully" });
    } else {
      res.status(404).json({ error: "Habit not found" });
    }
  } catch (error) {
    console.error("Error deleting habit:", error);
    res.status(500).json({ error: "Failed to delete habit" });
  }
};

// Toggle isReminderEnabled
const toggleReminder = async (req, res, next) => {
  try {
    const { id } = req.params;

    const habit = await Habit.findById(id);
    if (!habit) return res.status(404).json({ error: "Habit not found" });

    habit.isReminderEnabled = !habit.isReminderEnabled;
    await habit.save();

    res.status(200).json({
      message: `Reminder toggled to ${habit.isReminderEnabled}`,
      habit,
    });
  } catch (error) {
    console.error("Error toggling reminder:", error);
    res.status(500).json({ error: "Failed to toggle reminder" });
  }
};

export {
  getHabits,
  getHabit,
  createHabit,
  updateHabit,
  deleteHabit,
  toggleReminder,
};
