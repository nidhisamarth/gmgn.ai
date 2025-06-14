
import React from 'react';

interface NewTokenItemProps {
  name: string;
  displayName: string;
  timestamp: string;
  contract: string;
  profileImage: string;
  verified?: boolean;
  warningIcon?: boolean;
  price: string;
  percentage: string;
  hasLightning?: boolean;
}

const NewTokenItem: React.FC<NewTokenItemProps> = ({
  name,
  displayName,
  timestamp,
  contract,
  profileImage,
  verified = false,
  warningIcon = false,
  price,
  percentage,
  hasLightning = false
}) => {
  return (
    <div className="bg-black px-4 py-3 flex items-center justify-between border-b border-gray-800">
      {/* Left side - Star, Profile, Info */}
      <div className="flex items-center gap-3 flex-1">
        {/* Star rating */}
        <button className="text-gray-500 hover:text-yellow-500">
          <span className="text-lg">☆</span>
        </button>
        
        {/* Profile image */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={profileImage} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Solana badge */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center border-2 border-black">
            <span className="text-white text-xs">◎</span>
          </div>
        </div>
        
        {/* Token info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-medium">{name}</span>
            {verified && <span className="text-green-500">●</span>}
            {warningIcon && <span className="text-red-500">⚠️</span>}
            <span className="text-green-500">💎</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">{timestamp}</span>
            <span className="text-gray-500 font-mono text-xs">{contract}</span>
            <button className="text-gray-500 hover:text-white">
              <span className="text-xs">📋</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Right side - Price and Lightning */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-white font-medium text-sm">{price}</div>
          <div className="text-gray-400 text-sm">{percentage}</div>
        </div>
        
        {hasLightning && (
          <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-green-500 text-sm">⚡</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NewTokenItem;
