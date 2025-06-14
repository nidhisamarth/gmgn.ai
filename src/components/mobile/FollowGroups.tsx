
import React, { useState } from 'react';

const FollowGroups = () => {
  const [activeGroup, setActiveGroup] = useState('All');
  
  const groups = ['All', 'Default'];

  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex items-center gap-3">
        {groups.map((group) => (
          <button
            key={group}
            onClick={() => setActiveGroup(group)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors min-h-[36px] touch-manipulation ${
              activeGroup === group
                ? 'text-white bg-gray-700 font-medium'
                : 'text-gray-500 border border-gray-600 hover:text-white hover:bg-gray-800'
            }`}
          >
            {group}
          </button>
        ))}
        <button className="text-green-400 text-sm hover:text-green-300 transition-colors px-3 py-2 min-h-[36px] touch-manipulation rounded-lg hover:bg-green-400/10">
          + New Group
        </button>
      </div>
    </div>
  );
};

export default FollowGroups;
