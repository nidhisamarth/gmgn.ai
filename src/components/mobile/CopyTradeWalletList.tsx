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
  // Only showing top 3 entries as requested
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
  ];

  const getRankSuffix = (rank: number) => {
    if (rank === 1) return "st";
    if (rank === 2) return "nd";
    if (rank === 3) return "rd";
    return "th";
  };

  return (
    <div className="px-4">
      {wallets.map((wallet) => (
        <div
          key={wallet.rank}
          className="py-3 border-b border-gray-800/30 last:border-b-0"
        >
          <div className="flex items-center justify-between">
            {/* Left: Wallet Info */}
            <div className="flex items-center gap-2" style={{ width: "50%" }}>
              <div className="relative">
                <div
                  className={`w-10 h-10 rounded-full ${wallet.bgColor} flex items-center justify-center text-sm flex-shrink-0`}
                >
                  {wallet.avatar}
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[28px] text-center leading-none">
                  {wallet.rank}
                  {getRankSuffix(wallet.rank)}
                </div>
              </div>

              <div className="flex flex-col">
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

            {/* Center: 1D PnL Column */}
            <div className="text-center" style={{ width: "15%" }}>
              <span className="text-green-400 text-sm font-medium">
                {wallet.pnl}
              </span>
            </div>

            {/* Center-Right: USD Column */}
            <div className="text-center" style={{ width: "20%" }}>
              <span className="text-green-400 text-sm font-medium">
                {wallet.usd}
              </span>
            </div>

            {/* Right: Copy Button */}
            <div className="text-right" style={{ width: "15%" }}>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 text-sm px-4 py-2 h-auto"
              >
                Copy
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CopyTradeWalletList;
