
import React from 'react';

const FollowAlerts = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">📱</span>
          </div>
          TG Alert
        </button>
        <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">📱</span>
          </div>
          0-Latency Alert
        </button>
        <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm ml-auto">
          <div className="w-4 h-4 flex items-center justify-center">
            <span className="text-white text-xs">📁</span>
          </div>
          Bulk Import
        </button>
      </div>
    </div>
  );
};

export default FollowAlerts;
