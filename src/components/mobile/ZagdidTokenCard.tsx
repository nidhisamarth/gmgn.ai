
import React from 'react';
import { Copy, Search, Eye } from 'lucide-react';
import { useBuyAmount } from '../../contexts/BuyAmountContext';

const ZagdidTokenCard = () => {
  const { buyAmount, calculatePrice } = useBuyAmount();

  const copyContract = () => {
    navigator.clipboard.writeText('4gbFU...pct');
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 mx-4 mb-3 border border-gray-800">
      <div className="flex items-center justify-between">
        {/* Left section with profile and info */}
        <div className="flex items-center gap-4">
          {/* Profile image with green matrix effect */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-green-500 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <div className="text-green-400 text-xs font-mono leading-tight">
                  <div>01010101</div>
                  <div>11001100</div>
                  <div>10101010</div>
                  <div>01100110</div>
                </div>
              </div>
            </div>
            {/* Verified badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          
          {/* Token info */}
          <div className="flex-1">
            {/* Name and title */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white font-bold text-lg">ZAGDID</span>
              <span className="text-gray-400 text-base">daddi just zigzag</span>
            </div>
            
            {/* Timestamp and contract */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-white text-sm">11s</span>
              <span className="text-gray-400 text-sm font-mono">4gbFU...pct</span>
              <button onClick={copyContract} className="text-gray-400 hover:text-white">
                <Copy className="w-4 h-4" />
              </button>
              <Search className="w-4 h-4 text-gray-400" />
              <div className="w-4 h-4 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-gray-300 text-xs">🔍</span>
              </div>
            </div>
            
            {/* Stats row */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white">0%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-400">👥</span>
                <span className="text-white">0%</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4 text-gray-400" />
                <span className="text-white">2</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side with SOL amount and stats */}
        <div className="flex flex-col items-end gap-2">
          {/* SOL amount - this updates based on buy amount */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">⚡</span>
            </div>
            <span className="text-green-400 text-lg font-bold">
              {buyAmount > 0 ? `${buyAmount} SOL` : '7 SOL'}
            </span>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">👑</span>
              <span className="text-white">26</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">👥</span>
              <span className="text-white">3</span>
            </div>
            <div className="text-white">TX 2</div>
          </div>
          
          {/* Volume and Market Cap */}
          <div className="text-right text-sm">
            <div className="text-gray-400">
              V ${buyAmount > 0 ? calculatePrice(buyAmount * 72) : '0.72'} 
              <span className="ml-2">MC ${buyAmount > 0 ? calculatePrice(buyAmount * 4000) : '4K'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZagdidTokenCard;
