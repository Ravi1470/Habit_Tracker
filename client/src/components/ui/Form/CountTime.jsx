import React, { useEffect, useState } from 'react';

const CircleTimer = ({ value, max, label, color }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = ((max - value) / max) * circumference;

  return (
    <div className="relative w-40 h-40">
      <svg className="rotate-[-90deg]" width="160" height="160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth="12"
          fill="none"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke={color}
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-3xl font-bold text-gray-800">{String(value).padStart(2, '0')}</p>
      </div>
    </div>
  );
};

const CountTime = ({ totalMinutes = 5 }) => {
  const [secondsLeft, setSecondsLeft] = useState(totalMinutes * 60);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white gap-12">
      <CircleTimer value={minutes} max={totalMinutes} label="Minutes" color="#3498db" />
      <CircleTimer value={seconds} max={60} label="Seconds" color="#2ecc71" />
    </div>
  );
};

export default CountTime;

