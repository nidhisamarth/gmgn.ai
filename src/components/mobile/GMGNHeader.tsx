
import React from 'react';

const GMGNHeader = () => {
  return (
    <div className="bg-black text-white">
      {/* Top navigation with GMGN branding */}
      <div className="flex items-center px-4 py-4">
        <div className="flex items-center gap-6">
          <div className="text-green-500 font-bold text-xl">GMGN</div>
          <div className="flex items-center gap-6 text-gray-400">
            <span className="text-white border-b-2 border-green-500 pb-1">Trenches</span>
            <span>New</span>
            <span>Trending</span>
            <span>Cop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GMGNHeader;
