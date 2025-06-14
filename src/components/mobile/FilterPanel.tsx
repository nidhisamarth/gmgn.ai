
import React, { useState } from 'react';
import { Filter } from 'lucide-react';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterPanel = ({ isOpen, onClose }: FilterPanelProps) => {
  const [filterWashTraded, setFilterWashTraded] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [hiddenTokens, setHiddenTokens] = useState<string[]>([]);

  console.log('FilterPanel render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Filter backdrop clicked - closing panel');
      onClose();
    }
  };

  const handleCloseClick = () => {
    console.log('Filter close button clicked');
    onClose();
  };

  const handleReset = () => {
    setFilterWashTraded(false);
    setSearchKeyword('');
    setHiddenTokens([]);
    console.log('Filter reset');
  };

  const handleApply = () => {
    console.log('Filter applied:', {
      filterWashTraded,
      searchKeyword,
      hiddenTokens
    });
    onClose();
  };

  const toggleHiddenToken = (tokenName: string) => {
    setHiddenTokens(prev => 
      prev.includes(tokenName) 
        ? prev.filter(t => t !== tokenName)
        : [...prev, tokenName]
    );
  };

  const hideButtons = ['Hide1', 'Hide2', 'Hide3', 'Hide4', 'Hide5'];

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-lg w-full max-w-md max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-white text-xl font-medium">Filter</h2>
          <button
            onClick={handleCloseClick}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto space-y-6">
          {/* Filter Wash Traded */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="filterWashTraded"
              checked={filterWashTraded}
              onChange={(e) => setFilterWashTraded(e.target.checked)}
              className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-green-500 focus:ring-green-500 focus:ring-2"
            />
            <label htmlFor="filterWashTraded" className="text-gray-400 text-lg">
              Filter Wash Traded
            </label>
          </div>

          {/* Search Token */}
          <div>
            <h3 className="text-white text-lg mb-3">Search Token</h3>
            <div className="relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Keyword1, Keyword1...(max5)"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          {/* Hide Token */}
          <div>
            <h3 className="text-white text-lg mb-4">Hide Token</h3>
            <div className="grid grid-cols-2 gap-3">
              {hideButtons.map((buttonName) => (
                <button
                  key={buttonName}
                  onClick={() => toggleHiddenToken(buttonName)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors ${
                    hiddenTokens.includes(buttonName)
                      ? 'bg-gray-700 border-gray-500'
                      : 'bg-gray-800 border-gray-600'
                  }`}
                >
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                  <span className="text-gray-400">{buttonName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-700">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Reset</span>
          </button>
          
          <button
            onClick={handleApply}
            className="bg-white text-black px-8 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
