
import React, { useState } from 'react';

const MonitorTimeFilters = () => {
  const [activeTime, setActiveTime] = useState('24h');
  
  const timeFilters = ['1m', '5m', '15m', '1h', '6h', '24h'];

  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {timeFilters.map((time) => (
          <button
            key={time}
            onClick={() => setActiveTime(time)}
            className={`whitespace-nowrap text-sm px-3 py-1.5 rounded transition-colors ${
              activeTime === time
                ? 'text-white bg-gray-700'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonitorTimeFilters;
