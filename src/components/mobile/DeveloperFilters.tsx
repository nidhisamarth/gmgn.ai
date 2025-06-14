
import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const DeveloperFilters = () => {
  return (
    <div className="bg-black px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0">
          {/* Devs icon */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs">💻</span>
            </div>
            <span className="text-white text-sm whitespace-nowrap font-medium">Devs</span>
          </div>
          
          {/* Search icon */}
          <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center flex-shrink-0 min-h-[32px] min-w-[32px] touch-manipulation hover:bg-gray-600 transition-colors">
            <Search className="w-4 h-4 text-white" />
          </button>
          
          {/* Filter with number */}
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-2 rounded text-sm flex-shrink-0 min-h-[32px] touch-manipulation hover:bg-gray-600 transition-colors">
            <Filter className="w-4 h-4 text-white" />
            <span className="text-white font-medium">9</span>
          </button>
          
          {/* Folder with number */}
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-2 rounded text-sm flex-shrink-0 min-h-[32px] touch-manipulation hover:bg-gray-600 transition-colors">
            <div className="w-3 h-3 flex flex-col justify-center">
              <div className="w-3 h-0.5 bg-white rounded-sm mb-0.5"></div>
              <div className="w-3 h-0.5 bg-white rounded-sm"></div>
            </div>
            <span className="text-white font-medium">1</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>
          
          {/* Lightning bolt */}
          <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 min-h-[32px] min-w-[32px] touch-manipulation hover:bg-green-400 transition-colors">
            <span className="text-white text-sm">⚡</span>
          </button>
          
          {/* Filter with 0 */}
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-2 rounded text-sm flex-shrink-0 min-h-[32px] touch-manipulation hover:bg-gray-600 transition-colors">
            <div className="flex flex-col gap-0.5">
              <div className="w-2 h-0.5 bg-cyan-400 rounded"></div>
              <div className="w-2 h-0.5 bg-cyan-400 rounded"></div>
              <div className="w-2 h-0.5 bg-cyan-400 rounded"></div>
            </div>
            <span className="text-white font-medium">0</span>
          </button>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="flex items-center gap-1 bg-gray-800 px-3 py-2 rounded text-sm border border-gray-600 min-h-[32px] touch-manipulation hover:bg-gray-700 transition-colors">
            <span className="text-white text-xs font-medium">P1</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>
          
          <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center flex-shrink-0 min-h-[32px] min-w-[32px] touch-manipulation hover:bg-gray-600 transition-colors">
            <div className="w-4 h-4 border border-gray-400 rounded-full relative">
              <div className="absolute inset-1 border border-gray-400 rounded-full"></div>
              <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-gray-400"></div>
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-gray-400"></div>
              <div className="absolute -left-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 bg-gray-400"></div>
              <div className="absolute -right-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 bg-gray-400"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperFilters;
