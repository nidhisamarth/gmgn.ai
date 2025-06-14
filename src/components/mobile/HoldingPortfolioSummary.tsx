
import React from 'react';

const HoldingPortfolioSummary = () => {
  return (
    <div className="px-4 py-4 border-b border-gray-800">
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-white text-lg font-semibold">Total Portfolio Value</h3>
            <p className="text-gray-400 text-sm">Updated 2 mins ago</p>
          </div>
          <div className="text-right">
            <p className="text-white text-xl font-bold">$0.00</p>
            <p className="text-gray-500 text-sm">0.00%</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 text-xs">SOL Balance</p>
            <p className="text-white text-sm font-medium">0.00</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-xs">Tokens</p>
            <p className="text-white text-sm font-medium">0</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-xs">24h P&L</p>
            <p className="text-gray-500 text-sm font-medium">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldingPortfolioSummary;
