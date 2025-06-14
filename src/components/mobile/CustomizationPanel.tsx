
import React from 'react';

interface CustomizationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomizationPanel = ({ isOpen, onClose }: CustomizationPanelProps) => {
  console.log('CustomizationPanel render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Backdrop clicked - closing panel');
      onClose();
    }
  };

  const handleCloseClick = () => {
    console.log('Close button clicked');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-lg font-semibold">Customize</h2>
          <button
            onClick={handleCloseClick}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Visual Section */}
        <div className="mb-8">
          <h3 className="text-white text-sm font-medium mb-4">Visual</h3>
          
          {/* Size Options */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1 bg-gray-800 rounded-lg p-3 border border-gray-700">
              <div className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-flex items-center gap-1">
                <span>⚡</span>
                <span>5</span>
              </div>
              <div className="text-gray-300 text-sm">Small</div>
            </div>
            <div className="flex-1 bg-gray-800 rounded-lg p-3 border-2 border-green-500">
              <div className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-flex items-center gap-1">
                <span>⚡</span>
                <span>5</span>
              </div>
              <div className="text-gray-300 text-sm">Large</div>
            </div>
            <div className="flex-1 bg-gray-800 rounded-lg p-3 border border-gray-700">
              <div className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-flex items-center gap-1">
                <span>⚡</span>
                <span>5</span>
              </div>
              <div className="text-gray-300 text-sm">Mega</div>
            </div>
          </div>

          {/* Button Color */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-300 text-sm">Button Color</span>
            <div className="w-6 h-6 bg-white border border-gray-600 rounded"></div>
          </div>

          {/* Settings List */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">A+</span>
              <span className="text-gray-300 text-sm">Large MC/Vol</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
              <span className="text-gray-300 text-sm">Hide Search Bar</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-800 border border-gray-600 rounded"></div>
              <span className="text-gray-300 text-sm">Square Logo</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                <div className="bg-gray-600 rounded-sm"></div>
                <div className="bg-gray-600 rounded-sm"></div>
                <div className="bg-gray-600 rounded-sm"></div>
                <div className="bg-gray-600 rounded-sm"></div>
              </div>
              <span className="text-gray-300 text-sm">Spaced Tables</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-300 text-sm">New Tab on Right Click</span>
            </div>
          </div>
        </div>

        {/* Customize Data Section */}
        <div>
          <h3 className="text-white text-sm font-medium mb-4">Customize Data</h3>
          
          <div className="grid grid-cols-2 gap-2">
            {[
              'Top 10 Hold', 'DEV', 'Dev Burnt', 'Insiders',
              'Bundlers', 'Phishing', 'Snipers', 'Rug',
              'Socials', 'CTO', 'Dex Paid', 'Dex Updated',
              'X Search', '1h Vol', 'Market Cap', '1h TXs',
              'Bot Trading', 'Dev Migrated', 'Holders'
            ].map((item) => (
              <button
                key={item}
                className="bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded px-3 py-2 text-xs text-gray-300 transition-colors"
                onClick={() => console.log(`Data filter clicked: ${item}`)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationPanel;
