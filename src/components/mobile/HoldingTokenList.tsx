
import React from 'react';

const HoldingTokenList = () => {
  // Sample data - in real app this would come from API
  const holdings = [];

  if (holdings.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-16 px-4 min-h-[400px]">
        <div className="w-16 h-16 mb-6">
          <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-3xl">💰</span>
          </div>
        </div>
        <span className="text-gray-400 text-base mb-3 font-medium">No Holdings Yet</span>
        <span className="text-gray-500 text-sm text-center max-w-xs leading-relaxed">
          Your token holdings will appear here once you make your first purchase
        </span>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-black">
      {/* Holdings list would go here */}
    </div>
  );
};

export default HoldingTokenList;
