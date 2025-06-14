
import React from 'react';
import { Button } from '@/components/ui/button';

interface WalletItem {
  rank: number;
  address: string;
  balance: number;
  pnl: string;
  icon: string;
  hasActivity: boolean;
}

const CopyTradeWalletList = () => {
  const wallets: WalletItem[] = [
    { rank: 1, address: '05JSY...xTy', balance: 0.418, pnl: '--', icon: '🐸', hasActivity: true },
    { rank: 2, address: '6cSx5...UK8', balance: 0, pnl: '--', icon: '🌟', hasActivity: true },
    { rank: 3, address: '20JMe...BRZ', balance: 0.028, pnl: '--', icon: '🎯', hasActivity: true },
    { rank: 4, address: '4qP1j...dk9', balance: 0.03, pnl: '--', icon: '💎', hasActivity: true },
    { rank: 5, address: 'HscRE...rwr', balance: 0.039, pnl: '--', icon: '🚀', hasActivity: true },
    { rank: 6, address: '5HNeh...rzq', balance: 81.54, pnl: '--', icon: '⭐', hasActivity: true },
    { rank: 7, address: '7GMZy...upZ', balance: 0.013, pnl: '--', icon: '💫', hasActivity: true },
  ];

  const getRankSuffix = (rank: number) => {
    if (rank === 1) return 'st';
    if (rank === 2) return 'nd';
    if (rank === 3) return 'rd';
    return 'th';
  };

  return (
    <div className="px-4">
      {wallets.map((wallet) => (
        <div key={wallet.rank} className="flex items-center justify-between py-4 border-b border-gray-800/50 last:border-b-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="bg-gray-700 rounded px-2 py-1 text-xs text-gray-300">
                {wallet.rank}{getRankSuffix(wallet.rank)}
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
                {wallet.icon}
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium">{wallet.address}</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                {wallet.hasActivity && (
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                )}
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <span className="text-gray-500">≡</span>
                <span>{wallet.balance}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">{wallet.pnl}</span>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-gray-600 text-white hover:bg-gray-800 text-sm px-4 py-1.5 h-auto"
            >
              Copy
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CopyTradeWalletList;
