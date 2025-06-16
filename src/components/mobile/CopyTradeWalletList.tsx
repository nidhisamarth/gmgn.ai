import React from "react";
import { Button } from "@/components/ui/button";

interface WalletItem {
  rank: number;
  address: string;
  balance: number;
  pnl: string;
  usd: string;
  avatar: string;
  bgColor: string;
}

const CopyTradeWalletList = () => {
  const wallets: WalletItem[] = [
    {
      rank: 1,
      address: "o5JSY...xTY",
      balance: 10.32,
      pnl: "+21.1K%",
      usd: "+$1,566.5",
      avatar: "🐸",
      bgColor: "bg-orange-500",
    },
    {
      rank: 2,
      address: "GL1q3...xp5",
      balance: 25.85,
      pnl: "+13.2K%",
      usd: "+$3,840.1",
      avatar: "🎯",
      bgColor: "bg-pink-500",
    },
    {
      rank: 3,
      address: "CWYTm...poR",
      balance: 0.147,
      pnl: "+4.6K%",
      usd: "+$7,026.4",
      avatar: "🎯",
      bgColor: "bg-pink-500",
    },
    {
      rank: 4,
      address: "BEorY...VDm",
      balance: 11.41,
      pnl: "+3.6K%",
      usd: "+$1,654.5",
      avatar: "🎯",
      bgColor: "bg-pink-500",
    },
    {
      rank: 5,
      address: "7oKkk...9Qn",
      balance: 87.71,
      pnl: "+2.6K%",
      usd: "+$2,074.5",
      avatar: "🎯",
      bgColor: "bg-pink-500",
    },
    {
      rank: 6,
      address: "5GsiE...Thi",
      balance: 0,
      pnl: "+2.1K%",
      usd: "+$3,914.9",
      avatar: "🎯",
      bgColor: "bg-orange-500",
    },
    {
      rank: 7,
      address: "D7aAU...X4n",
      balance: 0.551,
      pnl: "+2K%",
      usd: "+$3,212.1",
      avatar: "🎯",
      bgColor: "bg-pink-500",
    },
  ];

  const getRankSuffix = (rank: number) => {
    if (rank === 1) return "st";
    if (rank === 2) return "nd";
    if (rank === 3) return "rd";
    return "th";
  };

  return (
    <div className="px-4 pb-4">
      {wallets.map((wallet) => (
        <div
          key={wallet.rank}
          className="flex items-center justify-between py-3 border-b border-gray-800/30 last:border-b-0"
        >
          {/* Left section - Rank, Avatar, Address, Balance */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Rank badge */}
            <div className="bg-amber-600 text-black text-xs font-bold px-2 py-1 rounded min-w-[32px] text-center">
              {wallet.rank}
              {getRankSuffix(wallet.rank)}
            </div>

            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-full ${wallet.bgColor} flex items-center justify-center text-sm flex-shrink-0`}
            >
              {wallet.avatar}
            </div>

            {/* Address and Balance */}
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-medium">
                  {wallet.address}
                </span>
                <span className="text-green-400">🔗</span>
                <span className="text-green-400">🌿</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-xs">
                <span className="text-gray-500">≡</span>
                <span>{wallet.balance}</span>
              </div>
            </div>
          </div>

          {/* Center section - PnL */}
          <div className="flex flex-col items-center min-w-[80px] mx-4">
            <span className="text-green-400 text-sm font-medium">
              {wallet.pnl}
            </span>
            <span className="text-green-400 text-xs">{wallet.usd}</span>
          </div>

          {/* Right section - Copy button */}
          <div className="flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-gray-600 text-white hover:bg-gray-800 text-sm px-4 py-2 h-auto min-w-[60px]"
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
