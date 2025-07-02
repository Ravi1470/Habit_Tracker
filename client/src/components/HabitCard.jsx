import React, { useState } from 'react';
import { CheckCircle, Bell, BellOff } from 'lucide-react';

const HabitCard = ({ title, description, completed, currentStreak }) => {
  const [isReminderEnabled, setIsReminderEnabled] = useState(false);
  const [loadTime] = useState(new Date().toLocaleTimeString());

  const handleReminderToggle = () => {
    setIsReminderEnabled(prev => !prev);
    alert(`Reminder ${!isReminderEnabled ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-lg p-20 w-96 relative">

        <div className="absolute top-5 right-5 text-right">
          {completed && <CheckCircle className="text-green-400 w-6 h-6 mb-1" />}
          <div className="text-xs text-gray-400">{loadTime}</div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-5">{description}</p>

        {/* Current Streak */}
        <div className="text-sm text-gray-300 mb-6   bottom-2left-2">
          🔥 <span className="font-bold text-white">{currentStreak}</span> day streak
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



