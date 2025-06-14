
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const FollowSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="px-4 py-4 bg-black">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
        <input
          type="text"
          placeholder="Search Wallet"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-xl pl-12 pr-4 py-4 border-none outline-none text-base min-h-[48px] touch-manipulation focus:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default FollowSearchBar;
