import React from "react";
import { Link } from "react-router-dom";
import HabitList from "../components/HabitList";

const Habit = () => {
  return (
    <div className="min-h-screen bg-gray-700 text-white">
      {/* Header */}
      <header className="h-20 px-6 flex justify-between items-center bg-slate-800 shadow-md border-b border-slate-700">
        <h1 className="text-2xl font-bold text-white">MicroHabits</h1>
        <Link
          to="/CreateForm"
          className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 shadow-md hover:shadow-indigo-500/30">
          + Create Habit
        </Link>
      </header>

      {/* Main Habit List Section */}
      <main className="p-6 max-w-7xl mx-auto">
        <HabitList />
      </main>
    </div>
  );
};

export default Habit;
