import React, { useState } from "react";
import { CheckCircle, Bell, BellOff, Trash2, MoreVertical } from "lucide-react";
import { deleteHabit } from "../Services/Hapit";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const HabitCard = ({ habit }) => {
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleReminderToggle = () => {
    setIsReminderEnabled((prev) => !prev);
    alert(`Reminder ${!isReminderEnabled ? "enabled" : "disabled"}`);
  };

  const { mutate: deleteHabitMutation, isLoading: isDeleting } = useMutation({
    mutationFn: () => deleteHabit(habit?._id),
    onSuccess: () => {
      alert("Habit deleted successfully!");
      queryClient.invalidateQueries(["habits"]);
    },
    onError: () => {
      alert("Failed to delete habit.");
    },
  });

  return (
    <div className="flex justify-center p-4">
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-6 w-full max-w-md h-[380px] shadow-lg border border-gray-700 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between">
        {/* Check Icon */}
        {habit?.completed && (
          <CheckCircle className="absolute top-4 right-4 w-6 h-6 text-green-400" />
        )}

        {/* 3-Dot Menu */}
        <div className="absolute top-3 right-10">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            <MoreVertical className="w-5 h-5 text-gray-300 absolute " />
          </button>
          {menuOpen && (
            <div className="absolute mt-2 right-0 bg-slate-800 border border-gray-600 rounded-md shadow-lg w-40 z-10">
              <button
                onClick={deleteHabitMutation}
                disabled={isDeleting}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                {isDeleting ? "Deleting..." : "Delete Habit"}
              </button>
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-1">{habit?.title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-300 line-clamp-2 mb-4">
          {habit?.description}
        </p>

        {/* Streaks */}
        <div className="flex justify-between items-center bg-slate-700 bg-opacity-50 rounded-lg p-3 text-sm mb-4">
          <div className="flex items-center gap-2">
            🔥 <span className="font-medium">{habit?.currentStreak}</span> day
            streak
          </div>
          <div className="flex items-center gap-2">
            🏆 <span className="font-medium">{habit?.longestStreak}</span> max
          </div>
        </div>

        {/* Reminder Toggle */}
        <div className="flex justify-between items-center border-t border-gray-600 pt-4">
          <button
            onClick={handleReminderToggle}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              isReminderEnabled
                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}>
            {isReminderEnabled ? "Disable Reminder" : "Enable Reminder"}
          </button>

          <div className="flex items-center text-sm text-gray-400">
            {isReminderEnabled ? (
              <>
                <Bell className="w-5 h-5 text-yellow-300 mr-1" />
                <span className="text-yellow-200 font-medium">On</span>
              </>
            ) : (
              <>
                <BellOff className="w-5 h-5 text-gray-500 mr-1" />
                <span className="text-gray-400">Off</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
