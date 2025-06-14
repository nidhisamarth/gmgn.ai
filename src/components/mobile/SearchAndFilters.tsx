
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchAndFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Gainers', 'Losers', 'Watchlist'];

  return (
    <div className="bg-black px-4 py-4 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search tokens..."
          className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-xl pl-12 pr-4 py-3 border-none outline-none"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-green-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilters;
