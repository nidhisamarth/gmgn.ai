
import React from 'react';
import { Copy } from 'lucide-react';
import { TokenData } from '../../types/token';
import { useBuyAmount } from '../../contexts/BuyAmountContext';
import SocialIcon from './SocialIcon';

interface TokenCardProps {
  token: TokenData;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  const { buyAmount, calculatePrice } = useBuyAmount();

  const copyContract = () => {
    navigator.clipboard.writeText(token.contract);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 mx-4 mb-3 border border-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Profile Image with Green Ring and Verification Badge */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-green-500 p-0.5">
              <img 
                src={token.profileImage} 
                alt={token.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          
          {/* Token Info */}
          <div className="flex-1 min-w-0">
            {/* Name and Display Name */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white font-bold text-lg">{token.name}</span>
              <span className="text-gray-400 text-base">{token.displayName}</span>
            </div>
            
            {/* Timestamp, Contract, and Social Icons */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-green-400 text-sm font-medium">{token.timestamp}</span>
              <span className="text-gray-400 text-sm font-mono">{token.contract}</span>
              <button onClick={copyContract} className="text-gray-400 hover:text-white">
                <Copy className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                {token.socialIcons.map((icon, index) => (
                  <SocialIcon key={index} type={icon} />
                ))}
              </div>
            </div>
            
            {/* Stats Row */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-green-400">👥</span>
                <span className="text-green-400">{token.stats.percentage1}%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-400">👥</span>
                <span className="text-green-400">{token.stats.percentage2}%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-pink-400">🍭</span>
                <span className="text-pink-400">Run</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-400">👁</span>
                <span className="text-white">{token.stats.views}</span>
              </div>
              <span className="text-gray-400">
                · V {buyAmount > 0 ? `$${calculatePrice(buyAmount * 100)}` : token.volume} 
                MC {buyAmount > 0 ? `$${calculatePrice(buyAmount * 1000)}` : token.marketCap}
              </span>
            </div>
          </div>
        </div>
        
        {/* Right Side Stats */}
        <div className="flex flex-col items-end gap-2">
          {/* SOL amount */}
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
              <span className="text-gray-400">👥</span>
              <span className="text-white">{buyAmount > 0 ? buyAmount : token.communityCount}</span>
            </div>
            <div className="text-white">TX {token.txCount}</div>
          </div>
          
          {/* Progress bars */}
          <div className="flex gap-1">
            <div className="w-12 h-1 bg-green-500 rounded-full"></div>
            <div className="w-4 h-1 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
