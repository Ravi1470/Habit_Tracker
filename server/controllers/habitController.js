import Habit from "../models/HabitModel.js";

// Get all habits
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    console.error("Error fetching habits:", error);
    res.status(500).json({ error: "Failed to fetch habits" });
  }
};

// Create a new habit
const createHabit = async (req, res) => {
  try {
    const { title, description, frequency, category } = req.body;
    const newHabit = new Habit({ title, description, frequency, category });
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (error) {
    console.error("Error creating habit:", error);
    res.status(500).json({ error: "Failed to create habit", input: req.body });
  }
};

// Update a habit by ID
const updateHabit = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, frequency, category } = req.body;

    const updatedHabit = await Habit.findByIdAndUpdate(
      id,
      { title, description, frequency, category },
      { new: true, runValidators: true }
    );

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
const deleteHabit = async (req, res) => {
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

export { getHabits, createHabit, updateHabit, deleteHabit };
