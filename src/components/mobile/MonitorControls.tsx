
import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

const MonitorControls = () => {
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState('P1');

  const portfolios = ['P1', 'P2', 'P3'];

  const handlePortfolioClick = (portfolio: string) => {
    setSelectedPortfolio(portfolio);
    setShowPortfolioDropdown(false);
  };

  return (
    <div className="px-4 py-3 flex items-center justify-between">
      {/* Left side - Filter button */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-white">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filter</span>
        </button>
        
        {/* Center controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded border border-gray-700">
            <div className="w-4 h-4 flex flex-col justify-center">
              <div className="w-4 h-1 bg-white rounded-sm mb-0.5"></div>
              <div className="w-4 h-1 bg-white rounded-sm"></div>
            </div>
            <span className="text-white text-sm">1</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
          
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          
          <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
            <div className="w-3 h-3 flex flex-col justify-center">
              <div className="w-3 h-1 bg-white rounded-sm mb-0.5"></div>
              <div className="w-3 h-1 bg-white rounded-sm"></div>
            </div>
            <span className="text-white text-sm">0</span>
          </div>
        </div>
      </div>

      {/* Right side - Portfolio dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowPortfolioDropdown(!showPortfolioDropdown)}
          className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded border border-gray-700"
        >
          <span className="text-white text-sm font-medium">{selectedPortfolio}</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </button>
        
        {showPortfolioDropdown && (
          <div className="absolute right-0 top-full mt-1 bg-gray-800 border border-gray-700 rounded shadow-lg z-10">
            {portfolios.map((portfolio) => (
              <button
                key={portfolio}
                onClick={() => handlePortfolioClick(portfolio)}
                className="block w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-700 first:rounded-t last:rounded-b"
              >
                {portfolio}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MonitorControls;
