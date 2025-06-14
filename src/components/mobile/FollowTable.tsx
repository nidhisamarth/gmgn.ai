
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FollowTable = () => {
  const [sortBy, setSortBy] = useState('Wallet');

  const headers = ['Wallet', 'Balance', 'SOL Balance', 'Total Profit', 'Notifi', 'Alerts'];

  return (
    <div className="flex-1 flex flex-col">
      {/* Table Headers */}
      <div className="px-4 py-3 border-b border-gray-800">
        <div className="flex items-center justify-between">
          {headers.map((header, index) => (
            <button
              key={header}
              onClick={() => setSortBy(header)}
              className={`flex items-center gap-1 text-sm ${
                index === 0 ? 'flex-1 justify-start' : 'text-center'
              } ${
                sortBy === header ? 'text-white' : 'text-gray-400'
              }`}
            >
              <span>{header}</span>
              {sortBy === header && (
                <ChevronDown className="w-3 h-3" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center py-16">
        <div className="w-16 h-16 mb-4">
          <div className="w-full h-full bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-500 text-2xl">📁</span>
          </div>
        </div>
        <span className="text-gray-500 text-sm">No Data</span>
      </div>
    </div>
  );
};

export default FollowTable;
