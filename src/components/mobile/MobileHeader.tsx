
import React from 'react';
import { ChevronDown } from 'lucide-react';

const MobileHeader = () => {
  // Prevent header icons from causing navigation
  const handleIconClick = (e: React.MouseEvent, iconType: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Header icon clicked: ${iconType}`);
    // These would handle their respective functionality without navigation
  };

  const handleButtonClick = (e: React.MouseEvent, buttonType: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Header button clicked: ${buttonType}`);
    // These would handle their respective functionality without navigation
  };

  return (
    <div className="bg-black px-4 py-3 flex items-center justify-between min-h-[56px] sticky top-0 z-50 border-b border-gray-800">
      {/* Left section with frog icon and SOL dropdown */}
      <div className="flex items-center gap-3">
        {/* Frog icon */}
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/3446d744-cd08-43f6-beba-f962a9fb2d58.png" 
            alt="Frog icon" 
            className="w-8 h-8 object-contain"
          />
        </div>
        
        {/* SOL dropdown button */}
        <button 
          className="flex items-center gap-2 bg-gray-800 border border-gray-600 px-3 py-2 rounded-lg text-sm min-h-[36px] touch-manipulation hover:bg-gray-700 transition-colors"
          onClick={(e) => handleButtonClick(e, 'sol-dropdown')}
        >
          {/* SOL icon as SVG */}
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" stroke="#a855f7" strokeWidth="2" fill="none" />
            <rect x="6" y="5" width="4" height="1" rx="0.5" fill="white" />
            <rect x="6" y="7.5" width="4" height="1" rx="0.5" fill="white" />
            <rect x="6" y="10" width="4" height="1" rx="0.5" fill="white" />
          </svg>
          <span className="text-white font-medium text-sm">SOL</span>
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </button>
      </div>

      {/* Center section with search and target icons */}
      <div className="flex items-center gap-4">
        {/* Search icon as SVG */}
        <button 
          onClick={(e) => handleIconClick(e, 'search')}
          className="p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-900 rounded transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="2" fill="none" />
            <path d="14 14l4 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        
        {/* Target/crosshair icon as SVG */}
        <button 
          onClick={(e) => handleIconClick(e, 'target')}
          className="p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-900 rounded transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1" fill="none" />
            <line x1="12" y1="2" x2="12" y2="6" stroke="white" strokeWidth="2" />
            <line x1="12" y1="18" x2="12" y2="22" stroke="white" strokeWidth="2" />
            <line x1="2" y1="12" x2="6" y2="12" stroke="white" strokeWidth="2" />
            <line x1="18" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Right section with file/folder button and settings dropdown */}
      <div className="flex items-center gap-2">
        {/* Folder button with SVG icon */}
        <button 
          className="flex items-center gap-2 bg-gray-800 border border-gray-600 px-3 py-2 rounded-lg text-sm min-h-[36px] touch-manipulation hover:bg-gray-700 transition-colors"
          onClick={(e) => handleButtonClick(e, 'folder')}
        >
          {/* Folder icon as SVG */}
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4h3l1-1h7v9H2V4z" stroke="white" strokeWidth="1" fill="none" />
            <line x1="4" y1="6" x2="10" y2="6" stroke="white" strokeWidth="0.5" />
            <line x1="4" y1="7.5" x2="10" y2="7.5" stroke="white" strokeWidth="0.5" />
            <line x1="4" y1="9" x2="10" y2="9" stroke="white" strokeWidth="0.5" />
          </svg>
          <span className="text-white text-sm font-medium">0</span>
        </button>
        
        {/* Settings dropdown */}
        <button 
          onClick={(e) => handleIconClick(e, 'settings')}
          className="p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-900 rounded transition-colors"
        >
          <ChevronDown className="w-5 h-5 text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
