
import React from 'react';
import { Filter } from 'lucide-react';

const CopyTradeTableHeader = () => {
  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="font-medium">Wallet / SOL Bal</span>
          <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
          </button>
        </div>
        
        <div className="flex items-center gap-6 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-medium">1D PnL</span>
            <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-medium">USD</span>
            <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
            </button>
          </div>
          
          <Filter className="w-4 h-4 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default CopyTradeTableHeader;
