
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SectionHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <div className="bg-black px-4 py-4 space-y-4">
      {/* Trenches Header */}
      <div className="flex items-center gap-2">
        <span className="text-xl">🏔️</span>
        <span className="text-white font-medium">Trenches</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
      
      {/* Filter Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-white text-xs">📊</span>
          </div>
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-white text-xs">🏠</span>
          </div>
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-white text-xs">≡</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-800 px-2 py-1 rounded text-xs text-white border border-gray-600">
            📁 1
          </div>
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">⚡</span>
          </div>
          <div className="bg-gray-800 px-2 py-1 rounded text-xs text-white">
            ≡ 0
          </div>
          <div className="bg-gray-800 px-2 py-1 rounded text-xs text-white">
            P1
          </div>
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-400 text-xs">⚙</span>
          </div>
        </div>
      </div>
      
      {/* New Creations Header */}
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/31ef9bb6-a6cf-451e-acb0-51abe9686e18.png" 
          alt="Leaf icon" 
          className="w-5 h-5"
        />
        <span className="text-white font-medium">New Creations</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
      
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 rounded-lg"
          />
        </div>
        <Button 
          type="button"
          variant="outline" 
          className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800 rounded-lg"
        >
          🔽 Filter
        </Button>
      </form>
    </div>
  );
};

export default SectionHeader;
