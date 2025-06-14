
import React, { useState } from 'react';
import { ChevronDown, Filter, Edit, Settings } from 'lucide-react';
import { useBuyAmount } from '../../contexts/BuyAmountContext';
import CustomizationPanel from './CustomizationPanel';
import DeveloperToolsPanel from './DeveloperToolsPanel';
import FilterPanel from './FilterPanel';
import TrendSettingsPanel from './TrendSettingsPanel';
import WalletPanel from './WalletPanel';
import TPSLCustomizationPanel from './TPSLCustomizationPanel';

const TrenchesSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Trenches');
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  const [isDeveloperToolsOpen, setIsDeveloperToolsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isTrendSettingsOpen, setIsTrendSettingsOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isTPSLOpen, setIsTPSLOpen] = useState(false);
  const [showTPSLTooltip, setShowTPSLTooltip] = useState(false);
  
  const { buyAmount, setBuyAmount, calculatePrice } = useBuyAmount();

  console.log('TrenchesSection render - isCustomizationOpen:', isCustomizationOpen, 'isDeveloperToolsOpen:', isDeveloperToolsOpen, 'isFilterOpen:', isFilterOpen, 'isTrendSettingsOpen:', isTrendSettingsOpen, 'isWalletOpen:', isWalletOpen, 'isTPSLOpen:', isTPSLOpen);

  const dropdownOptions = [
    {
      name: 'Trenches',
      icon: (
        <img 
          src="/lovable-uploads/67520719-6b9f-429e-ac3d-5787cb090bfb.png" 
          alt="Military helmet" 
          className="w-5 h-5 filter brightness-75 hue-rotate-90"
          style={{ filter: 'brightness(0.6) sepia(1) saturate(2) hue-rotate(90deg)' }}
        />
      )
    },
    {
      name: 'Pump.fun',
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      )
    },
    {
      name: 'Believe',
      icon: (
        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L8 6H4L6 2Z" fill="white" />
            <circle cx="6" cy="8.5" r="1.5" fill="white" />
          </svg>
        </div>
      )
    },
    {
      name: 'Boop',
      icon: (
        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="1.5" fill="white" />
            <circle cx="8" cy="4" r="1.5" fill="white" />
            <path d="M3 8C3 8 4.5 10 6 10S9 8 9 8" stroke="white" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      )
    },
    {
      name: 'Launchlab',
      icon: (
        <div className="w-5 h-5 bg-purple-500 rounded flex items-center justify-center">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L10 10M10 2L2 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      )
    },
    {
      name: 'Moonit',
      icon: (
        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1L7 4H10L7.5 6.5L8.5 10L6 8L3.5 10L4.5 6.5L2 4H5L6 1Z" fill="white" />
          </svg>
        </div>
      )
    }
  ];

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (e: React.MouseEvent, optionName: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOption(optionName);
    setIsDropdownOpen(false);
    console.log(`Selected: ${optionName}`);
  };

  const handleWalletClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Wallet folder icon clicked - opening wallet panel');
    setIsWalletOpen(true);
  };

  const handleWalletClose = () => {
    console.log('Closing wallet panel');
    setIsWalletOpen(false);
  };

  const handleTPSLHover = () => {
    console.log('TP/SL text hovered - showing tooltip');
    setShowTPSLTooltip(true);
  };

  const handleTPSLLeave = () => {
    console.log('TP/SL text hover ended - hiding tooltip');
    setShowTPSLTooltip(false);
  };

  const handleTPSLClose = () => {
    console.log('Closing TP/SL panel');
    setIsTPSLOpen(false);
  };

  const handleFilterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Filter icon clicked - opening filter panel');
    setIsFilterOpen(true);
  };

  const handleFilterClose = () => {
    console.log('Closing filter panel');
    setIsFilterOpen(false);
  };

  const handleTrendSettingsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Trend settings icon clicked - opening trend settings panel');
    setIsTrendSettingsOpen(true);
  };

  const handleTrendSettingsClose = () => {
    console.log('Closing trend settings panel');
    setIsTrendSettingsOpen(false);
  };

  const handleBuyAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setBuyAmount(value);
    console.log('Buy amount changed to:', value);
  };

  const handleButtonClick = (e: React.MouseEvent, buttonType: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Button clicked: ${buttonType}`);
  };

  const handleCustomizeClose = () => {
    console.log('Closing customization panel');
    setIsCustomizationOpen(false);
  };

  const handleDeveloperToolsClose = () => {
    console.log('Closing developer tools panel');
    setIsDeveloperToolsOpen(false);
  };

  const selectedOptionData = dropdownOptions.find(option => option.name === selectedOption) || dropdownOptions[0];

  return (
    <>
      <div className="bg-black px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section with Trenches title and dropdown */}
          <div className="flex items-center gap-2 relative">
            {selectedOptionData.icon}
            <span className="text-white font-medium">{selectedOption}</span>
            <button onClick={handleDropdownToggle}>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {dropdownOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={(e) => handleOptionSelect(e, option.name)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-800 transition-colors ${
                        selectedOption === option.name ? 'bg-gray-800 text-white' : 'text-gray-300'
                      }`}
                    >
                      {option.icon}
                      <span className="font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right section - exact replica of screenshot */}
          <div className="flex items-center gap-2">
            {/* Folder icon with 1 */}
            <button 
              className="flex items-center gap-1 text-white hover:bg-gray-800 px-2 py-1 rounded transition-colors"
              onClick={handleWalletClick}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4h3l1-1h7v9H2V4z" fill="white" />
              </svg>
              <span className="text-sm">1</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            
            {/* TP/SL text - shows tooltip on hover */}
            <div className="relative">
              <span 
                className="text-white text-sm hover:bg-gray-800 px-2 py-1 rounded transition-colors cursor-pointer"
                onMouseEnter={handleTPSLHover}
                onMouseLeave={handleTPSLLeave}
              >
                TP/SL
              </span>
              
              {/* TP/SL Tooltip */}
              {showTPSLTooltip && (
                <div className="absolute top-full right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50 p-3 min-w-[200px]">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">TP1:</span>
                      <span className="text-white">TP 100%, Sell 50%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">TP2:</span>
                      <span className="text-white">TP 300%, Sell 50%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Edit/Pen icon */}
            <button className="text-gray-400 hover:text-white transition-colors">
              <Edit className="w-4 h-4" />
            </button>
            
            {/* Buy section with green circle and lightning */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">⚡</span>
              </div>
              <span className="text-white text-sm font-medium">Buy</span>
            </div>
            
            {/* Filter icon with number 9 */}
            <button 
              className="flex items-center gap-1 hover:bg-gray-800 px-2 py-1 rounded transition-colors"
              onClick={handleFilterClick}
            >
              <Filter className="w-4 h-4 text-cyan-400" />
              <span className="text-white text-sm">9</span>
            </button>
            
            {/* P1, P2, P3 buttons */}
            <div className="flex items-center gap-1">
              <button 
                className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm transition-colors"
                onClick={(e) => handleButtonClick(e, 'p1')}
              >
                P1
              </button>
              <button 
                className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm transition-colors"
                onClick={(e) => handleButtonClick(e, 'p2')}
              >
                P2
              </button>
              <button 
                className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm transition-colors"
                onClick={(e) => handleButtonClick(e, 'p3')}
              >
                P3
              </button>
            </div>
            
            {/* Settings gear icon */}
            <button 
              className="text-gray-400 hover:text-white transition-colors"
              onClick={handleTrendSettingsClick}
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Customization Panel */}
      <CustomizationPanel 
        isOpen={isCustomizationOpen} 
        onClose={handleCustomizeClose} 
      />

      {/* Developer Tools Panel */}
      <DeveloperToolsPanel 
        isOpen={isDeveloperToolsOpen} 
        onClose={handleDeveloperToolsClose} 
      />

      {/* Filter Panel */}
      <FilterPanel 
        isOpen={isFilterOpen} 
        onClose={handleFilterClose} 
      />

      {/* Trend Settings Panel */}
      <TrendSettingsPanel 
        isOpen={isTrendSettingsOpen} 
        onClose={handleTrendSettingsClose} 
      />

      {/* Wallet Panel */}
      <WalletPanel 
        isOpen={isWalletOpen} 
        onClose={handleWalletClose} 
      />

      {/* TP/SL Customization Panel */}
      <TPSLCustomizationPanel 
        isOpen={isTPSLOpen} 
        onClose={handleTPSLClose} 
      />
    </>
  );
};

export default TrenchesSection;
