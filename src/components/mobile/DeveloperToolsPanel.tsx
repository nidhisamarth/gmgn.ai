
import React, { useState } from 'react';

interface DeveloperToolsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeveloperToolsPanel = ({ isOpen, onClose }: DeveloperToolsPanelProps) => {
  const [devAddress, setDevAddress] = useState('');
  const [addresses, setAddresses] = useState<string[]>([]);
  
  console.log('DeveloperToolsPanel render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Developer tools backdrop clicked - closing panel');
      onClose();
    }
  };

  const handleCloseClick = () => {
    console.log('Developer tools close button clicked');
    onClose();
  };

  const handleAddAddress = () => {
    if (devAddress.trim() && !addresses.includes(devAddress.trim())) {
      setAddresses([...addresses, devAddress.trim()]);
      console.log('Added dev address:', devAddress.trim());
      setDevAddress('');
    }
  };

  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddAddress();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-lg w-full max-w-md max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-white text-xl font-medium">Devs</h2>
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
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Input Section */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Dev Address"
              value={devAddress}
              onChange={(e) => setDevAddress(e.target.value)}
              onKeyPress={handleInputKeyPress}
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
            <button
              onClick={handleAddAddress}
              className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Add
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col items-center justify-center text-center min-h-[200px]">
            {addresses.length === 0 ? (
              <>
                {/* Folder Icon */}
                <div className="mb-4">
                  <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
                  </svg>
                </div>
                
                {/* Message */}
                <p className="text-gray-400 text-sm mb-4">
                  Please add Dev Addresses to block
                </p>
              </>
            ) : (
              <div className="w-full">
                <h3 className="text-white text-lg mb-4">Added Addresses:</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {addresses.map((address, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-white text-left text-sm">
                      {address}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Counter */}
          <div className="mt-4 text-gray-400 text-sm text-center">
            {addresses.length}/500 Addresses
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperToolsPanel;
