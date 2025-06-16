
import React, { useState } from 'react';
import { Star, Copy, Zap } from 'lucide-react';

interface TrendingTokenRowProps {
  token: {
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
    isStarred?: boolean;
  };
}

const TrendingTokenRow: React.FC<TrendingTokenRowProps> = ({ token }) => {
  const [isStarred, setIsStarred] = useState(token.isStarred || false);

  return (
    <div className="bg-black px-4 py-3 border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors">
      <div className="flex items-center">
        {/* Star favorite */}
        <button 
          onClick={() => setIsStarred(!isStarred)}
          className="w-8 flex justify-center mr-3"
        >
          <Star 
            className={`w-4 h-4 ${
              isStarred ? 'text-yellow-500 fill-current' : 'text-gray-500'
            }`} 
          />
        </button>
        
        {/* Token info */}
        <div className="flex items-center gap-3 flex-1">
          <div className="relative">
            <img 
              src={token.profileImage} 
              alt={token.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            {token.hasVerifiedIcon && (
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💧</span>
              </div>
            )}
          </div>
          
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-sm">{token.name}</span>
              <span className="text-gray-400 text-xs">{token.symbol}</span>
              {token.hasDropIcon && <span className="text-purple-500 text-xs">💧</span>}
              {token.hasFireIcon && <span className="text-orange-500 text-xs">🔥</span>}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>{token.timestamp}</span>
              <span className="font-mono truncate max-w-20">{token.contract}</span>
              <Copy className="w-3 h-3 cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Liquidity */}
        <div className="text-right mr-8 min-w-16">
          <div className="text-white font-medium text-sm">{token.liquidity}</div>
        </div>
        
        {/* Market Cap */}
        <div className="text-right mr-6 min-w-20">
          <div className="text-white font-medium text-sm">{token.marketCap}</div>
        </div>
        
        {/* Lightning action */}
        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
          <Zap className="w-3 h-3 text-black" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default TrendingTokenRow;
