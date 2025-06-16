
import React, { useState } from 'react';

const TrendingFiltersSection = () => {
  const [activeTimeFilter, setActiveTimeFilter] = useState('1h');
  
  const timeFilters = ['1m', '5m', '1h', '6h'];

  return (
    <div className="bg-black px-4 py-4 border-b border-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-white text-lg font-medium">Trending</span>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
              <span className="text-xs">🌊</span>
            </div>
            <span className="text-sm">NextBC</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveTimeFilter(filter)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                activeTimeFilter === filter
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

export default TrendingFiltersSection;
