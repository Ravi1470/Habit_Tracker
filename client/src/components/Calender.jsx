import React, { useState } from "react";
import CalenderView from "./CalenderView";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay();
  const lastDate = lastDay.getDate();

  const calendarData = [];
  for (let i = 0; i < startDay; i++) {
    calendarData.push(" ");
  }
  for (let i = 1; i <= lastDate; i++) {
    calendarData.push(i);
  }

  const weeks = [];
  for (let i = 0; i < calendarData.length; i += 7) {
    weeks.push(calendarData.slice(i, i + 7));
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  return (
    <div className="text-white bg-gray-400 font-mono p-4 min-h-screen">
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={goToPrevMonth}
          className="px-5 py-2 bg-blue-500 rounded">
          ←
        </button>
        <h2 className="text-lg font-bold">
          {monthName} {year}
        </h2>
        <button
          onClick={goToNextMonth}
          className="px-5 py-2 bg-blue-500 rounded">
          →
        </button>
      </div>
      <CalenderView
        weeks={weeks}
        currentDate={currentDate}
      />
    </div>
  );
};

export default Calendar;
