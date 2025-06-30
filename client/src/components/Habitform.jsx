import React, { useState, useEffect } from 'react';


export const Habitform = () => {
  const [form, setForm] = useState({
    plan: '',
    description: '',
    day: '',
    category: '',
    startDate: '',
    endDate: ''
  });

  const [shake, setShake] = useState(false);
  

  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmpty = Object.values(form).some((value) => value === '');
    if (hasEmpty) {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Reset shake after animation
    } else {
      alert('Form Submitted Successfully!');
      // You can send form data to backend or store it
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      
      <div className="bg-white border border-gray-300 rounded-xl p-8 w-full max-w-4xl shadow-md">
     {/* Image added here */}
 <div className="bg-white">
  <img
    src="/b.jpg"
    alt="How to Form Good Habits"
    className="mx-auto w-[180px] h-auto object-contain rounded"
  />
</div>



        <form onSubmit={handleSubmit}>
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner space-y-4">

            <div>
              <label className="block font-semibold mb-1">Title</label>
              <input type="text" name="plan" value={form.plan} onChange={handleChange} placeholder="Enter the habit" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Description</label>
              <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Enter habit description" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Day of the Week</label>
              <select name="day" value={form.day} onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="">Select</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Everyday</option>
              </select>
            </div>


            <div>
              <label className="block font-semibold mb-1 text-gray-700">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full p-3 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Start Date</label>
                <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block font-semibold mb-1">End Date</label>
                <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className="w-full p-2 border rounded-md" />
              </div>
            </div>

            

            <div className="flex justify-between pt-4">
              <button
                type="submit"
                className={`${shake ? 'shake' : ''} bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-200 font-semibold`}
              >
                Schedule Now
              </button>
              <button
                type="reset"
                className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-200 font-semibold"
                onClick={() =>
                  setForm({
                    plan: '',
                    description: '',
                    day: '',
                    category: '',
                    startDate: '',
                    endDate: '',
                  })
                }
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Habitform;
