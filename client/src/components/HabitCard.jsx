import React, { useEffect, useState } from 'react';
import { CheckCircle, Bell, BellOff } from 'lucide-react';

const HabitCard = ({ title, description, completed }) => {
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  useEffect(() => {
    const today = new Date().toDateString();
    const storedData = JSON.parse(localStorage.getItem(title)) || {};

    if (completed && storedData.lastCompleted !== today) {
      const lastDate = new Date(storedData.lastCompleted);
      const diff = Math.floor(
        (new Date(today) - new Date(lastDate)) / (1000 * 60 * 60 * 24)
      );

      let updatedCurrentStreak = 1;
      if (diff === 1) {
        updatedCurrentStreak = storedData.currentStreak + 1;
      }

      const updatedMaxStreak = Math.max(updatedCurrentStreak, storedData.maxStreak || 0);

      setCurrentStreak(updatedCurrentStreak);
      setMaxStreak(updatedMaxStreak);

      localStorage.setItem(
        title,
        JSON.stringify({
          currentStreak: updatedCurrentStreak,
          maxStreak: updatedMaxStreak,
          lastCompleted: today,
        })
      );
    } else {
      setCurrentStreak(storedData.currentStreak || 0);
      setMaxStreak(storedData.maxStreak || 0);
    }
  }, [completed, title]);

  const handleReminderToggle = () => {
    setIsReminderEnabled((prev) => !prev);
    alert(`Reminder ${!isReminderEnabled ? 'enabled' : 'disabled'}`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'radial-gradient(circle at center, #1f2937, #000000)',
        cursor: 'default',
      }}
    >
      <div
        className="text-white rounded-2xl shadow-lg p-20 w-96 relative text-left transform transition-transform duration-300 hover:scale-105"
        style={{
          background: 'radial-gradient(circle at top left, #111827, #1f2937)',
          cursor: 'pointer',
        }}
      >
        <div className="absolute top-5 right-5 text-right">
          {completed && <CheckCircle className="text-green-400 w-6 h-6 mb-1" />}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-5 left-6">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-5">{description}</p>

        {/* Current Streak */}
        <div className="text-sm text-gray-300 mb-2">
          🔥 <span className="font-bold text-white">{currentStreak}</span> day streak
        </div>

        {/* Max Streak */}
        <div className="text-sm text-gray-300 mb-6">
          🏆 <span className="font-bold text-white">{maxStreak}</span> max streak
        </div>

        <div className="absolute bottom-5 right-5">
          <button
            onClick={handleReminderToggle}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              isReminderEnabled
                ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            {isReminderEnabled ? 'Disable Reminder' : 'Enable Reminder'}
          </button>

          <div className="flex items-center mt-2 text-sm text-gray-300">
            {isReminderEnabled ? (
              <>
                <Bell className="w-4 h-4 text-yellow-400 mr-1" />
                Reminder is On
              </>
            ) : (
              <>
                <BellOff className="w-4 h-4 text-gray-500 mr-1" />
                Reminder is Off
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
