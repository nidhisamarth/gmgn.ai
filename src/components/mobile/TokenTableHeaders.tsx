
import React from 'react';
import { Filter } from 'lucide-react';

const TokenTableHeaders = () => {
  return (
    <div className="bg-black px-4 py-3 border-b border-gray-800">
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-sm font-medium">Token</span>
          <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
            <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[5px] border-transparent border-b-gray-400 transform hover:border-b-gray-300 transition-colors"></div>
          </button>
          <Filter className="w-4 h-4 flex-shrink-0" />
        </div>
        
        <div className="flex items-center gap-4 text-right flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Liq</span>
            <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[5px] border-transparent border-b-gray-400 transform hover:border-b-gray-300 transition-colors"></div>
            </button>
            <Filter className="w-4 h-4 flex-shrink-0" />
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">MC</span>
            <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[5px] border-transparent border-b-gray-400 transform hover:border-b-gray-300 transition-colors"></div>
            </button>
          </div>
          
          <div className="flex flex-col items-center text-xs text-gray-500 leading-tight min-w-[24px]">
            <span className="font-medium">P1</span>
            <span className="font-medium">P2</span>
            <span className="font-medium">P3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenTableHeaders;
