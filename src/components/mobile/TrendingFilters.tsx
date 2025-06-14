
import React, { useState } from 'react';

const TrendingFilters = () => {
  const [activeFilter, setActiveFilter] = useState('1h');
  
  const filters = ['1m', '5m', '1h', '6h'];

  return (
    <div className="bg-black px-4 py-4 border-b border-gray-800">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-white text-lg font-medium">Trending</span>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
              <span className="text-xs">BC</span>
            </div>
            <span className="text-sm">NextBC</span>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded text-sm font-medium min-h-[36px] touch-manipulation transition-colors whitespace-nowrap flex-shrink-0 ${
                activeFilter === filter
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-500 hover:text-white bg-gray-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingFilters;
