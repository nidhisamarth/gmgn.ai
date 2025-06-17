
import React from 'react';
import { Shield, RefreshCw, Gift, Trophy, CreditCard, Bell, Plus, LogOut } from 'lucide-react';

interface WalletDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletDropdown = ({ isOpen, onClose }: WalletDropdownProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleItemClick = (item: string) => {
    console.log(`Wallet dropdown item clicked: ${item}`);
    // Handle item functionality here
  };

  return (
    <div 
      className="fixed inset-0 z-50"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Dropdown positioned from top right */}
      <div className="absolute top-16 right-4 w-64 bg-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
        {/* Header with folder icon and count */}
        <div className="flex items-center gap-3 p-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-2 bg-gray-700 px-2 py-1 rounded">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4h3l1-1h7v9H2V4z" stroke="white" strokeWidth="1" fill="none" />
              <line x1="4" y1="6" x2="10" y2="6" stroke="white" strokeWidth="0.5" />
              <line x1="4" y1="7.5" x2="10" y2="7.5" stroke="white" strokeWidth="0.5" />
              <line x1="4" y1="9" x2="10" y2="9" stroke="white" strokeWidth="0.5" />
            </svg>
            <span className="text-white text-sm font-medium">0</span>
          </div>
          <button className="ml-auto text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {/* My Wallet */}
          <button 
            onClick={() => handleItemClick('my-wallet')}
            className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm1 2a1 1 0 011-1h8a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1V6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">My Wallet</span>
          </button>

          {/* Wallet Manager */}
          <button 
            onClick={() => handleItemClick('wallet-manager')}
            className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" />
              <path d="M14 8a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            <span className="text-sm">Wallet Manager</span>
          </button>

          {/* Security */}
          <button 
            onClick={() => handleItemClick('security')}
            className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Security</span>
            </div>
            <div className="flex items-center gap-1 text-red-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-xs">Not Bound</span>
            </div>
          </button>

          {/* Referral */}
          <button 
            onClick={() => handleItemClick('referral')}
            className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            <RefreshCw className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">Referral</span>
          </button>

          {/* Contest(S6) */}
          <button 
            onClick={() => handleItemClick('contest')}
            className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800 transition-colors relative"
          >
            <div className="flex items-center gap-3 flex-1">
              <Trophy className="w-5 h-5 flex-shrink-0 text-green-500" />
              <span className="text-sm text-green-500">Contest(S6)</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </button>

          {/* Deposit/Withdraw/Buy */}
          <button 
            onClick={() => handleItemClick('deposit')}
            className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Deposit/Withdraw/Buy</span>
            </div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          {/* TG Alert */}
          <button 
            onClick={() => handleItemClick('tg-alert')}
            className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            <Bell className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">TG Alert</span>
          </button>

          {/* Add Twitter */}
          <button 
            onClick={() => handleItemClick('add-twitter')}
            className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            <Plus className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">Add Twitter</span>
          </button>

          {/* Disconnect */}
          <button 
            onClick={() => handleItemClick('disconnect')}
            className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-800 transition-colors"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">Disconnect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletDropdown;
