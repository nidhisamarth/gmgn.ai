
import React from 'react';
import { TrendingUp, Star } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
      <div className="flex items-center justify-around py-3">
        <div className="flex flex-col items-center gap-1">
          <TrendingUp className="w-6 h-6 text-green-500" />
          <span className="text-green-500 text-xs">Trading</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Star className="w-6 h-6 text-gray-400" />
          <span className="text-gray-400 text-xs">Watchlist</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-gray-400 text-lg">▼</span>
          </div>
          <span className="text-gray-400 text-xs">Filter</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
