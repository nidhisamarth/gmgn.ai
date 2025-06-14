
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const NewCreationsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    console.log('Search term:', e.target.value);
    // Here you would implement actual search functionality
  };

  const handleFilterClick = () => {
    console.log('Filter clicked');
    // Here you would implement filter functionality
  };

  return (
    <div className="bg-black px-4 py-3">
      {/* New Creations Header with Search and Filter on same line */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/31ef9bb6-a6cf-451e-acb0-51abe9686e18.png" 
            alt="Sapling icon" 
            className="w-5 h-5"
          />
          <span className="text-white font-medium">New Creations</span>
        </div>
        
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            placeholder="Search" 
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg text-sm focus:outline-none focus:border-green-500"
          />
        </div>
        
        <button 
          onClick={handleFilterClick}
          className="bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1 hover:bg-gray-800 transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default NewCreationsSection;
