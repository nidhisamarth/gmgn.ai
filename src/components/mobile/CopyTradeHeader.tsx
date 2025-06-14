
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CopyTradeHeader = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white text-lg font-medium">Rank</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">CopyTrade</span>
            <button
              onClick={() => setIsToggled(!isToggled)}
              className={`w-10 h-6 rounded-full transition-colors relative ${
                isToggled ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                  isToggled ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 text-xs px-3 py-1.5 h-auto"
        >
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
          0-Latency Alert
        </Button>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 text-sm px-4 py-2 h-auto"
      >
        <span className="font-bold mr-1">C</span>
        Create
      </Button>
    </div>
  );
};

export default CopyTradeHeader;
