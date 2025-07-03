import React, { useEffect, useState } from "react";
import CalenderView from "./CalenderView";
import { useQuery } from "@tanstack/react-query";

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
    calendarData.push("");
  }
  for (let i = 1; i <= lastDate; i++) {
    calendarData.push(i);
  }
  console.log(data);
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
    <div
      className="min-h-screen bg-gray-100
     font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goToPrevMonth}
            className="text-white bg-gray-700 hover:bg-gray-800 transition-all duration-300 px-4 py-2 rounded-lg shadow">
            ←
          </button>
          <h2 className="text-3xl font-semibold text-gray-800 tracking-wide">
            {monthName} {year}
          </h2>
          <button
            onClick={goToNextMonth}
            className="text-white bg-gray-700 hover:bg-gray-800 transition-all duration-300 px-4 py-2 rounded-lg shadow">
            →
          </button>
        </div>
        <div className="">
          <CalenderView
            weeks={weeks}
            currentDate={currentDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
