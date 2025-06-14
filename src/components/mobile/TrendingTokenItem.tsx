
import React from 'react';
import { Copy, Zap } from 'lucide-react';
import { useBuyAmount } from '../../contexts/BuyAmountContext';

interface TrendingTokenItemProps {
  name: string;
  symbol: string;
  timestamp: string;
  contract: string;
  profileImage: string;
  liquidity: string;
  marketCap: string;
  hasFireIcon?: boolean;
  hasDropIcon?: boolean;
  hasVerifiedIcon?: boolean;
  hasCheckIcon?: boolean;
}

const TrendingTokenItem: React.FC<TrendingTokenItemProps> = ({
  name,
  symbol,
  timestamp,
  contract,
  profileImage,
  liquidity,
  marketCap,
  hasFireIcon,
  hasDropIcon,
  hasVerifiedIcon,
  hasCheckIcon
}) => {
  const { buyAmount, calculatePrice } = useBuyAmount();

  return (
    <div className="bg-gray-900 rounded-lg p-4 mx-4 mb-3 border border-gray-800">
      <div className="flex items-center">
        {/* Star icon */}
        <div className="w-8 flex justify-center">
          <span className="text-gray-500 text-lg">⭐</span>
        </div>
        
        {/* Profile image and verified badge */}
        <div className="relative ml-3 mr-4">
          <img 
            src={profileImage} 
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          {hasVerifiedIcon && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">💧</span>
            </div>
          )}
          {hasCheckIcon && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
        </div>
        
        {/* Token info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-medium">{name}</span>
            <span className="text-gray-400 text-sm">{symbol}</span>
            {hasDropIcon && <span className="text-purple-500">💧</span>}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{timestamp}</span>
            <span className="font-mono text-xs">{contract}</span>
            <Copy className="w-3 h-3" />
          </div>
        </div>
        
        {/* Liquidity */}
        <div className="text-right mr-6">
          <div className="text-white font-medium">
            {buyAmount > 0 ? `${calculatePrice(buyAmount * 50)}K` : liquidity}
          </div>
          {hasFireIcon && <span className="text-orange-500 text-sm">🔥</span>}
        </div>
        
        {/* Market Cap */}
        <div className="text-right mr-6">
          <div className="text-white font-medium">
            {buyAmount > 0 ? `$${calculatePrice(buyAmount * 1000)}K` : marketCap}
          </div>
        </div>
        
        {/* Lightning icon */}
        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
          <Zap className="w-3 h-3 text-black" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default TrendingTokenItem;
