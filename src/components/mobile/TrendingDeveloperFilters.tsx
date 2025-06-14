
import React from 'react';
import { Filter, Zap, ChevronDown } from 'lucide-react';

const TrendingDeveloperFilters = () => {
  return (
    <div className="bg-black px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">👨‍💻</span>
            <span className="text-gray-400 text-sm">Devs</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400 text-sm">Filter</span>
          </div>
          
          <button className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm border border-gray-700">
            <span className="text-white">1</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>
          
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <Zap className="w-3 h-3 text-black" fill="currentColor" />
          </div>
          
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex flex-col justify-center">
              <div className="w-4 h-1 bg-gray-400 rounded-sm mb-0.5"></div>
              <div className="w-4 h-1 bg-gray-400 rounded-sm"></div>
            </div>
            <span className="text-gray-400 text-sm">0</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">P1 ▲</span>
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-400 text-xs">👁</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDeveloperFilters;
