import React from 'react';
import { Copy } from 'lucide-react';
import { useBuyAmount } from '../../contexts/BuyAmountContext';

interface TokenListItemProps {
  name: string;
  displayName: string;
  timestamp: string;
  contract: string;
  profileImage: string;
  hasGreenCheck?: boolean;
  hasBadge?: boolean;
  badgeIcon?: string;
  badgeNumber?: number;
  socialIcons: string[];
  stats: {
    percentage1: number;
    percentage2: number;
    runs?: number;
    views?: number;
  };
  volume: string;
  marketCap: string;
  communityCount: number;
  txCount: number;
  targetCount?: number;
}

const TokenListItem: React.FC<TokenListItemProps> = ({
  name,
  displayName,
  timestamp,
  contract,
  profileImage,
  hasGreenCheck = true,
  hasBadge,
  badgeIcon,
  badgeNumber,
  socialIcons,
  stats,
  volume,
  marketCap,
  communityCount,
  txCount,
  targetCount
}) => {
  const { buyAmount, calculatePrice } = useBuyAmount();

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'instagram':
        return <div className="w-4 h-4 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 rounded flex items-center justify-center">
          <div className="w-1.5 h-1.5 border border-white rounded-full"></div>
        </div>;
      case 'x':
        return <div className="w-4 h-4 bg-black rounded flex items-center justify-center border border-gray-600">
          <span className="text-white text-xs font-bold">X</span>
        </div>;
      case 'search':
        return <div className="w-4 h-4 bg-gray-600 rounded flex items-center justify-center">
          <span className="text-gray-300 text-xs">🔍</span>
        </div>;
      case 'crown':
        return <div className="w-4 h-4 bg-yellow-500 rounded flex items-center justify-center">
          <span className="text-white text-xs">👑</span>
        </div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 mx-4 mb-3 border border-gray-800">
      <div className="flex items-start gap-3">
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <img 
            src={profileImage} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          {hasGreenCheck && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
          {hasBadge && badgeIcon && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <span className="text-white text-xs">{badgeIcon}</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Name and timestamp */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-medium">{name}</span>
            <span className="text-gray-400 text-sm">{displayName}</span>
          </div>
          
          {/* Contract and socials */}
          <div className="flex items-center gap-2 mb-2 text-sm">
            <span className="text-gray-500">{timestamp}</span>
            <span className="text-gray-400 font-mono">{contract}</span>
            <Copy className="w-3 h-3 text-gray-400" />
            <div className="flex items-center gap-1">
              {socialIcons.map((icon, index) => (
                <div key={index}>{getSocialIcon(icon)}</div>
              ))}
            </div>
            {badgeNumber && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-xs">👑</span>
                <span className="text-white text-xs">{badgeNumber}</span>
              </div>
            )}
          </div>
          
          {/* Stats - Combined on same line */}
          <div className="flex items-center gap-3 text-sm mb-2">
            <div className="flex items-center gap-1">
              <span className="text-pink-400">👥</span>
              <span className="text-pink-400">{stats.percentage1}%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-green-400">👥</span>
              <span className="text-green-400">{stats.percentage2}%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-pink-400">🍭</span>
              <span className="text-pink-400">Run</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">👁</span>
              <span className="text-gray-400">{stats.views || 1}</span>
            </div>
            {stats.runs && stats.runs > 0 && (
              <div className="flex items-center gap-1">
                <span className="text-gray-400">🏃</span>
                <span className="text-gray-400">{stats.runs}</span>
              </div>
            )}
            <div className="text-gray-400">
              V {buyAmount > 0 ? `$${calculatePrice(buyAmount * 100)}` : volume} 
              MC {buyAmount > 0 ? `$${calculatePrice(buyAmount * 1000)}` : marketCap}
            </div>
          </div>
        </div>
        
        {/* Right side stats */}
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
              <span className="text-white">{buyAmount > 0 ? buyAmount : communityCount}</span>
            </div>
            <div className="text-white">TX {txCount}</div>
          </div>
          
          {targetCount && (
            <div className="text-gray-400 text-sm">🎯 {targetCount}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenListItem;
