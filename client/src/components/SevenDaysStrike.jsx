import React, { useState, useEffect } from 'react';
import fire from '../../public/fire.png';
import wood from '../../public/wood.png';
import fireicon from '../../public/fireicon.png';
import water from '../../public/water.png';
import smoke from '../../public/smoke.png';

const SevenDaysStrike = () => {
  const data = [false, true, false, true, true, false, false];

  const [isFireHovered, setIsFireHovered] = useState(false);
  const [isWoodHovered, setIsWoodHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [containerFireIcons, setContainerFireIcons] = useState([]);
  const [containerWaterIcons, setContainerWaterIcons] = useState([]);

  // 🔥 Fire animation
  useEffect(() => {
    let interval;
    if (isFireHovered) {
      interval = setInterval(() => {
        const newIcon = {
          id: crypto.randomUUID(),
          left: Math.random() * 400 - 20,
          size: 15 + Math.random() * 25,
          drift: Math.random() > 0.7,
        };
        setContainerFireIcons((prev) => [...prev.slice(-30), newIcon]);
        setTimeout(() => {
          setContainerFireIcons((prev) =>
            prev.filter((icon) => icon.id !== newIcon.id)
          );
        }, 3000);
      }, 150);
    }

    return () => clearInterval(interval);
  }, [isFireHovered]);

  // 💧 Water animation
  useEffect(() => {
    let interval;
    if (isWoodHovered) {
      interval = setInterval(() => {
        const newDrop = {
          id: crypto.randomUUID(),
          left: Math.random() * 400 - 20,
          size: 10 + Math.random() * 15,
        };
        setContainerWaterIcons((prev) => [...prev.slice(-30), newDrop]);
        setTimeout(() => {
          setContainerWaterIcons((prev) =>
            prev.filter((drop) => drop.id !== newDrop.id)
          );
        }, 3000);
      }, 150);
    }

    return () => clearInterval(interval);
  }, [isWoodHovered]);

  return (
    <div
      className={`w-full h-screen transition-colors duration-500 flex items-center justify-center ${
        isFireHovered
          ? 'bg-gradient-to-br from-yellow-700 via-red-700 to-black'
          : 'bg-black'
      }`}
    >
      <div className="w-[400px] h-[50px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-md flex items-center justify-center space-x-8 shadow-lg relative overflow-visible">
        
        {/* 🔥 Floating fire icons */}
        {containerFireIcons.map((icon) => (
          <img
            key={icon.id}
            src={fireicon}
            alt="fireicon"
            className={`absolute animate-fire-float-fast pointer-events-none ${
              icon.drift ? 'opacity-70' : ''
            }`}
            style={{
              left: `${icon.left}px`,
              bottom: '0px',
              width: `${icon.size}px`,
              zIndex: 0,
            }}
          />
        ))}

        {/* 💧 Falling water drops */}
        {containerWaterIcons.map((drop) => (
          <img
            key={drop.id}
            src={water}
            alt="water"
            className="absolute animate-water-fall pointer-events-none"
            style={{
              left: `${drop.left}px`,
              top: '0px',
              width: `${drop.size}px`,
              zIndex: 0,
            }}
          />
        ))}

        {/* 🔥 or 🪵 with smoke */}
        {data.map((status, index) => (
          <div key={index} className="relative">
            {/* 💨 Smoke for wood hover */}
            {!status && hoveredIndex === index && (
              <img
                src={smoke}
                alt="smoke"
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-[30px] h-[30px] animate-smoke-pulse pointer-events-none z-20"
              />
            )}

            <img
              src={status ? fire : wood}
              alt={`img-${index}`}
              onMouseEnter={() => {
                if (status) {
                  setIsFireHovered(true);
                } else {
                  setIsWoodHovered(true);
                }
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setIsFireHovered(false);
                setIsWoodHovered(false);
                setHoveredIndex(null);
              }}
              className={`w-[25px] h-[25px] object-cover rounded transition duration-300 hover:scale-125 z-10 ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? 'blur-[1px] opacity-80'
                  : ''
              } ${!status && hoveredIndex === index ? 'animate-shake-once' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SevenDaysStrike;
