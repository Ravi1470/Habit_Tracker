import React, { useState, useEffect } from 'react';
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaClipboardList,
  FaFire,
  FaCheckCircle,
} from 'react-icons/fa';
import {
  MdCategory,
  MdNotes,
  MdOutlineRestartAlt,
} from 'react-icons/md';

export const Habitform = () => {
  const [timeInput, setTimeInput] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);

  const [form, setForm] = useState({
    plan: '',
    description: '',
    day: '',
    category: '',
    priority: '',
    notes: '',
  });

  const days = [
    'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY',
    'FRIDAY', 'SATURDAY', 'SUNDAY', 'EVERYDAY'
  ];

  const [theme, setTheme] = useState('light');
  const [selectedDays, setSelectedDays] = useState([]);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 18 ? 'dark' : 'light');
  }, []);

  const handleTimeAdd = () => {
    if (timeInput && !timeSlots.includes(timeInput)) {
      setTimeSlots([...timeSlots, timeInput]);
      setTimeInput('');
    }
  };

  const handleTimeRemove = (index) => {
    const updated = [...timeSlots];
    updated.splice(index, 1);
    setTimeSlots(updated);
  };

  const handleDayClick = (day) => {
    const allDays = days.slice(0, 7); // Exclude "EVERYDAY"
    if (day === 'EVERYDAY') {
      const isAllSelected = allDays.every((d) => selectedDays.includes(d));
      setSelectedDays(isAllSelected ? [] : allDays);
    } else {
      setSelectedDays((prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      );
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmpty = Object.values(form).some((v) => v === '');
    if (hasEmpty || selectedDays.length === 0 || timeSlots.length === 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      const fullData = {
        ...form,
        days: selectedDays,
        times: timeSlots,
      };
      console.log('Submitted Habit:', fullData);
      alert('Habit Scheduled Successfully!');
    }
  };

  const isDark = theme === 'dark';
  const bgMain = isDark
    ? 'bg-gray-900 text-white'
    : 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800';
  const bgForm = isDark
    ? 'bg-gray-800 border border-gray-700'
    : 'bg-white border border-gray-200';

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 py-10 ${bgMain}`}>
      <div className={`rounded-3xl p-10 w-full max-w-4xl shadow-2xl transition-all duration-500 ${bgForm}`}>
        <div className="flex items-center justify-center mb-6">
          <img src="/bc.png" alt="Habit Icon" className="w-[70px] h-auto object-contain rounded" />
          <h1 className={`text-5xl font-extrabold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Habit Form
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className=" font-semibold mb-1 flex items-center gap-1">
                <FaClipboardList /> Title
              </label>
              <input
                type="text"
                name="plan"
                value={form.plan}
                onChange={handleChange}
                placeholder="Enter the habit"
                className="w-full p-3 border rounded-md focus:ring-2 bg-sky-950 text-white focus:ring-blue-400"
              />
            </div>

            <div>
              <label className=" font-semibold mb-1 flex items-center gap-1">
                <MdNotes /> Description
              </label>
              <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Habit description"
                className="w-full p-3 border rounded-md focus:ring-2 bg-sky-950 text-white focus:ring-blue-400"
              />
            </div>

            <div className="col-span-2">
              <label className=" font-semibold mb-1 flex items-center gap-1">
                <FaCheckCircle /> Select Days
              </label>
              <div className="flex flex-wrap gap-2">
                {days.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDayClick(day)}
                    className={`px-4 py-2 rounded-full border transition-all duration-200 shadow-sm ${
                      selectedDays.includes(day)
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-sky-950 text-white border-gray-300 hover:bg-green-600'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className=" font-semibold mb-1 flex items-center gap-1">
                <FaFire /> Priority
              </label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 bg-sky-950 text-white focus:ring-orange-400"
              >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label className=" font-semibold mb-1 flex items-center gap-1">
                <MdCategory /> Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 bg-sky-950 text-white focus:ring-purple-400"
              >
                <option value="">Select a category</option>
                <option>Health</option>
                <option>Running</option>
                <option>Study</option>
                <option>Meditation</option>
                <option>Fitness</option>
                <option>Reading</option>
                <option>Custom</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className=" font-semibold mb-1 flex items-center gap-1">
                <FaRegClock /> Preferred Time Slots
              </label>

              <div className="flex items-center gap-3 mb-3">
                <input
                  type="time"
                  value={timeInput}
                  onChange={(e) => setTimeInput(e.target.value)}
                  className="flex-1 p-3 border rounded-md bg-sky-950 text-white focus:ring-2 focus:ring-green-400"
                />
                <button
                  type="button"
                  onClick={handleTimeAdd}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Add
                </button>
              </div>

              {timeSlots.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((time, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full"
                    >
                      <span>{time}</span>
                      <button
                        type="button"
                        onClick={() => handleTimeRemove(index)}
                        className="text-red-500 hover:text-red-700 font-bold"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="md:col-span-2">
              <label className=" font-semibold mb-1 flex items-center gap-1">
                <MdNotes /> Notes
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="3"
                placeholder="Write a note or motivation..."
                className="w-full p-3 border rounded-md bg-sky-950 text-white focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8">
            <button
              type="submit"
              className={`${
                shake ? 'shake' : ''
              } bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300 font-semibold`}
            >
              Schedule Now
            </button>

            <button
              type="reset"
              onClick={() => {
                setForm({
                  plan: '',
                  description: '',
                  day: '',
                  category: '',
                  priority: '',
                  notes: '',
                });
                setTimeSlots([]);
                setSelectedDays([]);
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300 font-semibold"
            >
              <MdOutlineRestartAlt size={18} /> Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Habitform;
