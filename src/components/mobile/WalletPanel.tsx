
import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface WalletPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletPanel = ({ isOpen, onClose }: WalletPanelProps) => {
  const [selectedWallet, setSelectedWallet] = useState('W1 Wallet1');

  console.log('WalletPanel render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Wallet backdrop clicked - closing panel');
      onClose();
    }
  };

  const handleCloseClick = () => {
    console.log('Wallet close button clicked');
    onClose();
  };

  const handleWalletSelect = (walletName: string) => {
    setSelectedWallet(walletName);
    console.log('Wallet selected:', walletName);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Wallet Section */}
        <div className="p-4">
          <h2 className="text-white text-lg font-medium mb-4">Wallet</h2>
          
          {/* Wallet Item */}
          <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700">
            <div className="flex items-center gap-3">
              {/* Checkmark */}
              <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                <Check className="w-3 h-3 text-black" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4h3l1-1h7v9H2V4z" stroke="white" strokeWidth="1" fill="none" />
                  </svg>
                  <span className="text-white font-medium">W1 Wallet1</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 text-sm">A4Z7C...H6n</span>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right section with purple badge and "0" */}
            <div className="flex items-center gap-1 bg-purple-600 px-2 py-1 rounded text-xs text-white">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                <rect x="2" y="2" width="8" height="1" rx="0.5" />
                <rect x="2" y="5" width="8" height="1" rx="0.5" />
                <rect x="2" y="8" width="8" height="1" rx="0.5" />
              </svg>
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPanel;
