
import React, { useState } from 'react';

const MonitorFilters = () => {
  const [activeFilter, setActiveFilter] = useState('Follow');
  
  const filters = [
    { name: 'Follow', count: null },
    { name: 'Smart', count: 2 },
    { name: 'KOL', count: '99+' }
  ];

  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex gap-4">
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => setActiveFilter(filter.name)}
            className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded transition-colors ${
              activeFilter === filter.name
                ? 'text-white bg-gray-700'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {filter.name}
            {filter.count && (
              <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                {filter.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonitorFilters;
