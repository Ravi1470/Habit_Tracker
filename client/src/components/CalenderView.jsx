import React from "react";

const CalenderView = ({ weeks, currentDate }) => {
  const today = new Date();

  return (
    <div className="rounded-xl text-black select-none p-4 bg-white shadow-inner animate-fadeIn">
      {/* Weekday Headers */}
      <ul className="grid grid-cols-7 gap-2 font-semibold text-center text-gray-600 text-sm sm:text-base mb-3 uppercase tracking-wider">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
          <li key={idx}>{day}</li>
        ))}
      </ul>

      {/* Calendar Days */}
      {weeks.map((week, idx) => (
        <ul
          key={idx}
          className="grid grid-cols-7 text-center gap-2 mb-2">
          {week.map((day, index) => {
            const isToday =
              day === today.getDate() &&
              currentDate.getMonth() === today.getMonth() &&
              currentDate.getFullYear() === today.getFullYear();

            return (
              <li
                key={index}
                className={`p-4 sm:p-6 h-20 sm:h-24 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out shadow-sm text-lg font-medium
                  ${
                    isToday
                      ? "bg-emerald-500 text-white border-2 border-emerald-700 font-bold animate-pulse"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-105"
                  }
                  animate-zoomIn delay-[${index * 50}ms]`}>
                {day || ""}
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
};

export default CalenderView;
