
import React, { useState } from 'react';
import { Search, Target, ChevronDown } from 'lucide-react';

const TrendingHeader = () => {
  const [selectedChain, setSelectedChain] = useState('SOL');

  return (
    <div className="bg-black text-white px-4 py-3 border-b border-gray-800">
      <div className="flex items-center justify-between">
        {/* Left side - Chain selector and search */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">🧩</span>
            </div>
            <button className="flex items-center gap-1 text-white">
              <span className="font-medium">{selectedChain}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          <Search className="w-6 h-6 text-gray-400" />
          <Target className="w-6 h-6 text-gray-400" />
        </div>

        {/* Right side - Portfolio and settings */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded">
            <div className="w-4 h-4 bg-gray-600 rounded"></div>
            <span className="text-sm">0</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default TrendingHeader;
