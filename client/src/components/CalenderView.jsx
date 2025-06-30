import React from "react";

const CalenderView = ({ weeks, currentDate }) => {
  const today = new Date();

  return (
    <div className="rounded text-black select-none">
      <ul className="grid grid-cols-7 gap-2 font-bold text-center p-1">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      {weeks.map((week, idx) => (
        <ul
          key={idx}
          className="grid grid-cols-7 text-center">
          {week.map((day, index) => {
            const isToday =
              day === today.getDate() &&
              currentDate.getMonth() === today.getMonth() &&
              currentDate.getFullYear() === today.getFullYear();

            return (
              <li
                key={index}
                className={`p-2 border rounded lg:h-28 flex justify-center items-center lg:text-2xl ${
                  isToday
                    ? "bg-green-400 border-2 border-blue-700"
                    : "bg-gray-200"
                }`}>
                {day}
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
};

export default CalenderView;
