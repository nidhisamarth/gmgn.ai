
import React from 'react';
import { Filter } from 'lucide-react';

const TrendingTokenHeaders = () => {
  return (
    <div className="bg-black px-4 py-3 border-b border-gray-800">
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <span>Token</span>
          <button>
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-400"></div>
          </button>
          <Filter className="w-4 h-4" />
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span>Liq</span>
            <button>
              <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-400"></div>
            </button>
            <Filter className="w-4 h-4" />
          </div>
          
          <div className="flex items-center gap-2">
            <span>MC</span>
            <button>
              <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-400"></div>
            </button>
          </div>
          
          <span>P1</span>
        </div>
      </div>
      
      <div className="mt-2 text-right">
        <div className="text-gray-500 text-xs space-y-1">
          <div>P2</div>
          <div>P3</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingTokenHeaders;
