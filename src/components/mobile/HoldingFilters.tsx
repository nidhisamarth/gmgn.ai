
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HoldingFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Profitable', 'Losing', 'Recent'];

  return (
    <div className="px-4 py-4 border-b border-gray-800 bg-black">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide flex-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded text-sm min-h-[36px] touch-manipulation transition-colors whitespace-nowrap flex-shrink-0 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white bg-gray-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <button className="flex items-center gap-2 text-gray-400 text-sm min-h-[36px] px-3 py-2 touch-manipulation flex-shrink-0">
          <span>Sort</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default HoldingFilters;
