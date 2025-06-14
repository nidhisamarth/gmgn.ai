
import React from 'react';
import { Star } from 'lucide-react';
import { useBuyAmount } from '../../contexts/BuyAmountContext';

interface TokenCardProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  volume: string;
  marketCap: string;
  age: string;
  icon: string;
  isPositive: boolean;
}

const GMGNTokenCard: React.FC<TokenCardProps> = ({
  name,
  symbol,
  price,
  change,
  changePercent,
  volume,
  marketCap,
  age,
  icon,
  isPositive
}) => {
  const { buyAmount, calculatePrice } = useBuyAmount();

  return (
    <div className="bg-gray-900 rounded-lg p-4 mx-4 mb-3 border border-gray-800">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{icon}</div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <div>
              <div className="text-white font-medium text-lg">{name}</div>
              <div className="text-gray-400 text-sm">{symbol}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
            {age}
          </div>
          <div className="text-right">
            <div className="text-white font-medium text-lg">{price}</div>
            <div className={`text-sm flex items-center gap-1 ${
              isPositive ? 'text-green-500' : 'text-red-500'
            }`}>
              <span className="text-xs">{isPositive ? '↗' : '↘'}</span>
              <span>{changePercent}</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mb-3" />

      <div className="flex justify-between">
        <div>
          <div className="text-gray-400 text-sm mb-1">Volume</div>
          <div className="text-white font-medium">{volume}</div>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-sm mb-1">Market Cap</div>
          <div className="text-white font-medium">{marketCap}</div>
        </div>
      </div>

      {/* Buy Amount Section */}
      {buyAmount > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">👥 {buyAmount}</span>
              <span className="text-gray-400 text-sm">TX 3</span>
            </div>
            <div className="text-right">
              <div className="text-gray-400 text-sm">V ${calculatePrice(buyAmount * 100)}</div>
              <div className="text-gray-400 text-sm">MC ${calculatePrice(buyAmount * 1000)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GMGNTokenCard;
