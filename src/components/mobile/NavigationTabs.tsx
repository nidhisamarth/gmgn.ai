
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const tabs = [
    { name: 'Trenches', path: '/' },
    { name: 'New', path: '/new' },
    { name: 'Trending', path: '/trending' },
    { name: 'CopyTrade', path: '/copytrade' },
    { name: 'Monitor', path: '/monitor' },
    { name: 'Follow', path: '/follow' },
    { name: 'Holding', path: '/holding' }
  ];

  const getActiveTab = () => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
    return currentTab ? currentTab.name : 'Trenches';
  };

  const handleTabClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    e.stopPropagation();
    // Only navigate if it's actually a different path
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <div className="bg-black px-4 py-4 border-b border-gray-800 sticky top-[56px] z-40">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={(e) => handleTabClick(e, tab.path)}
            className={`whitespace-nowrap text-sm px-3 py-2 min-h-[36px] touch-manipulation transition-colors flex-shrink-0 rounded-sm ${
              getActiveTab() === tab.name 
                ? 'text-white font-medium border-b-2 border-white bg-gray-800/50' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
