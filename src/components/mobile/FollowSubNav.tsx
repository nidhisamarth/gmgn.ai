
import React, { useState } from 'react';

const FollowSubNav = () => {
  const [activeTab, setActiveTab] = useState('Follow');
  
  const tabs = ['Follow', 'Watchlist', 'Activity', 'Remarks'];

  return (
    <div className="px-4 py-4 border-b border-gray-800 bg-black">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap text-base px-3 py-2 min-h-[40px] touch-manipulation transition-colors flex-shrink-0 rounded-sm ${
              activeTab === tab 
                ? 'text-white font-medium border-b-2 border-white bg-gray-800/50' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FollowSubNav;
