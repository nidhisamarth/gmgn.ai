
import React, { useState } from 'react';

const TimeFilters = () => {
  const [activeFilter, setActiveFilter] = useState('1h');
  
  const filters = ['1m', '5m', '1h', '6h', '24h'];

  return (
    <div className="bg-black px-4 py-3">
      <div className="flex gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-gray-700 text-white'
                : 'text-gray-500 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeFilters;
