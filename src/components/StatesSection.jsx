import React, { useEffect, useState } from 'react';

const Stat = ({ end, label, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.ceil((duration * 1000) / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gold-500">
        {count}
      </div>
      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white mt-2">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <Stat end={15} label="Partners" />
          <Stat end={200} label="Departed Maids" />
          <Stat end={2} label="Years of Experience" />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
