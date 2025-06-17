import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface WalletItem {
  rank: number;
  address: string;
  balance: number;
  pnl: string;
  usd: string;
  avatar: string;
  bgColor: string;
  sevenDPnl: string;
  sevenDUsd: string;
  thirtyDPr: string;
  sevenDWinRate: string;
  sevenDTxs: string;
  sevenDTxsDetail: string;
  sevenDToke: string;
  sevenDTokeDetail: string;
  sevenDLoss: string;
  sevenDWin: string;
  sevenDIndicator: "green" | "red" | "none";
  sevenDAvgCost: string;
}

interface CopyTradeWalletListProps {
  isSolMode?: boolean;
  sortByBalance?: boolean;
  onDataScroll?: (scrollLeft: number) => void;
  scrollLeft?: number;
}

const CopyTradeWalletList = ({
  isSolMode = false,
  sortByBalance = false,
  onDataScroll,
  scrollLeft = 0,
}: CopyTradeWalletListProps) => {
  const walletsHighBalance: WalletItem[] = [
    {
      rank: 1,
      address: "Euris",
      balance: 2609.57,
      pnl: "+90.6%",
      usd: "+$45K",
      avatar: "🐸",
      bgColor: "bg-orange-500",
      sevenDPnl: "+48.6%",
      sevenDUsd: "+$125.1K",
      thirtyDPr: "+29%",
      sevenDWinRate: "72%",
      sevenDTxs: "1,878",
      sevenDTxsDetail: "1,199/679",
      sevenDToke: "4",
      sevenDTokeDetail: ">500%",
      sevenDLoss: "121",
      sevenDWin: "17",
      sevenDIndicator: "green",
      sevenDAvgCost: "$613.5",
    },
    {
      rank: 2,
      address: "Cupsey",
      balance: 2228.41,
      pnl: "+19.7%",
      usd: "+$44.6K",
      avatar: "👦",
      bgColor: "bg-pink-500",
      sevenDPnl: "+17.9%",
      sevenDUsd: "+$242.8K",
      thirtyDPr: "+14.6%",
      sevenDWinRate: "69.5%",
      sevenDTxs: "4,068",
      sevenDTxsDetail: "2,084/1,984",
      sevenDToke: "0",
      sevenDTokeDetail: ">500%",
      sevenDLoss: "309",
      sevenDWin: "50",
      sevenDIndicator: "green",
      sevenDAvgCost: "$1,147.8",
    },
    {
      rank: 3,
      address: "Gsm56...fym",
      balance: 1291.21,
      pnl: "+4.6K%",
      usd: "+$7,026.4",
      avatar: "🎯",
      bgColor: "bg-pink-500",
      sevenDPnl: "+92.9%",
      sevenDUsd: "+$110.5K",
      thirtyDPr: "+92.9%",
      sevenDWinRate: "60%",
      sevenDTxs: "49",
      sevenDTxsDetail: "18/31",
      sevenDToke: "0",
      sevenDTokeDetail: ">500%",
      sevenDLoss: "2",
      sevenDWin: "1",
      sevenDIndicator: "green",
      sevenDAvgCost: "$16.2K",
    },
    {
      rank: 4,
      address: "主小二",
      balance: 1229.42,
      pnl: "+3.6K%",
      usd: "+$1,654.5",
      avatar: "🎯",
      bgColor: "bg-pink-500",
      sevenDPnl: "+211.3%",
      sevenDUsd: "+$279.5K",
      thirtyDPr: "+113%",
      sevenDWinRate: "85.7%",
      sevenDTxs: "99",
      sevenDTxsDetail: "27/72",
      sevenDToke: "1",
      sevenDTokeDetail: ">500%",
      sevenDLoss: "6",
      sevenDWin: "5",
      sevenDIndicator: "green",
      sevenDAvgCost: "$21.3K",
    },
    {
      rank: 5,
      address: "ET5C6...Gnf",
      balance: 856.95,
      pnl: "+63.8%",
      usd: "+$22.4K",
      avatar: "🎯",
      bgColor: "bg-green-500",
      sevenDPnl: "+48.9%",
      sevenDUsd: "+$49.9K",
      thirtyDPr: "+41.6%",
      sevenDWinRate: "26.6%",
      sevenDTxs: "212",
      sevenDTxsDetail: "83/129",
      sevenDToke: "2",
      sevenDTokeDetail: ">500%",
      sevenDLoss: "20",
      sevenDWin: "27",
      sevenDIndicator: "green",
      sevenDAvgCost: "$1,516.9",
    },
    {
      rank: 6,
      address: "FvQJU...Zxt",
      balance: 787.09,
      pnl: "-2.1K%",
      usd: "-$3,914.9",
      avatar: "🎯",
      bgColor: "bg-green-500",
      sevenDPnl: "+45.4%",
      sevenDUsd: "+$9,802.2",
      thirtyDPr: "+45.4%",
      sevenDWinRate: "100%",
      sevenDTxs: "16",
      sevenDTxsDetail: "8/8",
      sevenDToke: "0",
      sevenDTokeDetail: ">500%",
      sevenDLoss: "0",
      sevenDWin: "0",
      sevenDIndicator: "none",
      sevenDAvgCost: "$21.5K",
    },
    {
      rank: 7,
      address: "danny",
      balance: 705.24,
      pnl: "+2K%",
      usd: "+$3,212.1",
      avatar: "🎯",
      bgColor: "bg-gray-500",
      sevenDPnl: "+0.9%",
      sevenDUsd: "+$2,224.6",
      thirtyDPr: "+11.7%",
      sevenDWinRate: "51.1%",
      sevenDTxs: "811",
      sevenDTxsDetail: "360/451",
      sevenDToke: "0",
      sevenDTokeDetail: ">500%",
      sevenDLoss: "130",
      sevenDWin: "25",
      sevenDIndicator: "red",
      sevenDAvgCost: "$756.8",
    },
    {
      rank: 8,
      address: "gake",
      balance: 702.7,
      pnl: "+139%",
      usd: "+$106.1K",
      avatar: "🎯",
      bgColor: "bg-orange-500",
      sevenDPnl: "+150.2%",
      sevenDUsd: "+$605K",
      thirtyDPr: "+605K",
      sevenDWinRate: "87.5%",
      sevenDTxs: "105",
      sevenDTxsDetail: "39/66",
      sevenDToke: "2",
      sevenDTokeDetail: ">500%",
      sevenDLoss: "12",
      sevenDWin: "14",
      sevenDIndicator: "green",
      sevenDAvgCost: "$11.8K",
    },
  ];

  const walletsZeroBalance: WalletItem[] = [
    {
      rank: 1,
      address: "市囤慈善家",
      balance: 0,
      pnl: "",
      usd: "",
      avatar: "💀",
      bgColor: "bg-gray-500",
    },
    {
      rank: 2,
      address: "Hgym9...TDt",
      balance: 0,
      pnl: "",
      usd: "",
      avatar: "👦",
      bgColor: "bg-yellow-500",
    },
    {
      rank: 3,
      address: "3Fstp...2i8",
      balance: 0,
      pnl: "",
      usd: "",
      avatar: "🎯",
      bgColor: "bg-yellow-500",
    },
    {
      rank: 4,
      address: "HsYEZ...Qyo",
      balance: 0,
      pnl: "",
      usd: "",
      avatar: "🎯",
      bgColor: "bg-yellow-500",
    },
    {
      rank: 5,
      address: "BthHk...Ksv",
      balance: 0,
      pnl: "",
      usd: "",
      avatar: "🎯",
      bgColor: "bg-yellow-500",
    },
    {
      rank: 6,
      address: "BH2JM...6G4",
      balance: 0,
      pnl: "",
      usd: "",
      avatar: "🎯",
      bgColor: "bg-green-500",
    },
    {
      rank: 7,
      address: "6PUKX...1fa",
      balance: 0,
      pnl: "",
      usd: "",
      avatar: "🎯",
      bgColor: "bg-green-500",
    },
  ];

  const wallets = sortByBalance ? walletsZeroBalance : walletsHighBalance;

  const getRankSuffix = (rank: number) => {
    if (rank === 1) return "st";
    if (rank === 2) return "nd";
    if (rank === 3) return "rd";
    return "th";
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-500"; // Gold for 1st
    if (rank === 2) return "bg-gray-400"; // Silver for 2nd
    if (rank === 3) return "bg-orange-600"; // Bronze for 3rd
    return "";
  };

  const shouldShowRank = (rank: number) => rank <= 3;
  const scrollableRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getPnLTextColor = (rank: number, pnl: string) => {
    if (pnl.startsWith("-")) return "text-red-400"; // Red for negative values
    return "text-green-400"; // Green for positive values
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>, index: number) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    onDataScroll?.(scrollLeft);

    // Sync all other rows
    scrollableRefs.current.forEach((ref, i) => {
      if (ref && i !== index) {
        ref.scrollLeft = scrollLeft;
      }
    });
  };

  useEffect(() => {
    scrollableRefs.current.forEach((ref) => {
      if (ref) {
        ref.scrollLeft = scrollLeft;
      }
    });
  }, [scrollLeft]);

  return (
    <div className="px-4">
      {wallets.map((wallet, index) => (
        <div
          key={wallet.rank}
          className="flex items-center py-3 border-b border-gray-800/30 last:border-b-0"
        >
          {/* Left: Fixed Basic Columns */}
          <div className="flex items-center flex-shrink-0">
            {/* Wallet Info */}
            <div className="min-w-[120px] text-left">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-full ${wallet.bgColor} flex items-center justify-center text-sm flex-shrink-0`}
                  >
                    {wallet.avatar}
                  </div>
                  {shouldShowRank(wallet.rank) && (
                    <div
                      className={`absolute -top-2 left-1/2 transform -translate-x-1/2 ${getRankBadgeColor(wallet.rank)} text-black text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[28px] text-center leading-none`}
                    >
                      {wallet.rank}
                      {getRankSuffix(wallet.rank)}
                    </div>
                  )}
                </div>

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
            </div>

            {/* 1D PnL Column - 10 spaces gap */}
            <div className="text-center min-w-[60px] ml-10">
              <div
                className={`${sortByBalance ? "text-white" : (wallet.rank === 3 || wallet.rank === 7) && !sortByBalance ? "" : getPnLTextColor(wallet.rank, wallet.pnl)} text-sm font-medium`}
              >
                {sortByBalance
                  ? "--"
                  : wallet.rank === 3 || wallet.rank === 7
                    ? ""
                    : wallet.pnl}
              </div>
              <div
                className={`${sortByBalance ? "text-white" : (wallet.rank === 3 || wallet.rank === 7) && !sortByBalance ? "" : getPnLTextColor(wallet.rank, wallet.usd)} text-sm font-medium`}
              >
                {sortByBalance
                  ? "--"
                  : wallet.rank === 3 || wallet.rank === 7
                    ? ""
                    : isSolMode
                      ? `${wallet.usd} SOL`
                      : wallet.usd}
              </div>
            </div>

            {/* USD Column */}
            <div className="text-center min-w-[60px] ml-4"></div>

            {/* Filter space */}
            <div className="w-4 ml-4 flex justify-center"></div>
          </div>

          {/* Middle: Scrollable columns container */}
          <div
            ref={(el) => (scrollableRefs.current[index] = el)}
            className="flex items-center gap-4 flex-1 overflow-x-auto scrollbar-hide ml-4"
            onScroll={(e) => handleScroll(e, index)}
          >
            {/* 7D PnL Column */}
            <div className="text-center min-w-[60px] flex-shrink-0">
              <div className="text-green-400 text-sm font-medium">
                {sortByBalance ? "--" : wallet.sevenDPnl}
              </div>
              <div className="text-green-400 text-sm font-medium">
                {sortByBalance ? "--" : wallet.sevenDUsd}
              </div>
            </div>

            {/* 30D Pr Column */}
            <div className="text-center min-w-[60px] flex-shrink-0">
              <div className="text-green-400 text-sm font-medium">
                {sortByBalance ? "--" : wallet.thirtyDPr}
              </div>
            </div>

            {/* 7D Win Rate Column */}
            <div className="text-center min-w-[80px] flex-shrink-0">
              <div className="text-white text-sm font-medium">
                {sortByBalance ? "--" : wallet.sevenDWinRate}
              </div>
            </div>

            {/* 7D TXs Column */}
            <div className="text-center min-w-[60px] flex-shrink-0">
              <div className="text-white text-sm font-medium">
                {sortByBalance ? "--" : wallet.sevenDTxs}
              </div>
              <div className="text-gray-400 text-xs">
                {sortByBalance ? "--" : wallet.sevenDTxsDetail}
              </div>
            </div>

            {/* 7D Toke Column */}
            <div className="text-center min-w-[60px] flex-shrink-0">
              <div className="text-white text-sm font-medium">
                {sortByBalance ? "--" : wallet.sevenDToke}
              </div>
              <div className="text-gray-400 text-xs">
                {sortByBalance ? "--" : wallet.sevenDTokeDetail}
              </div>
            </div>

            {/* 7D Loss/Win Column */}
            <div className="text-center min-w-[40px] flex-shrink-0 flex flex-col items-center">
              <div className="text-white text-sm font-medium underline">
                {sortByBalance ? "--" : wallet.sevenDLoss}
              </div>
              <div className="text-gray-400 text-xs">{"<-50%"}</div>
              <div className="text-white text-sm font-medium underline mt-1">
                {sortByBalance ? "--" : wallet.sevenDWin}
              </div>
              <div className="text-gray-400 text-xs">{">-50%"}</div>
              {!sortByBalance && wallet.sevenDIndicator !== "none" && (
                <div
                  className={`w-1 h-6 mt-1 ${wallet.sevenDIndicator === "green" ? "bg-green-400" : "bg-red-400"}`}
                ></div>
              )}
            </div>

            {/* 7D Avg Cost Column */}
            <div className="text-center min-w-[80px] flex-shrink-0">
              <div className="text-white text-sm font-medium">
                {sortByBalance ? "--" : wallet.sevenDAvgCost}
              </div>
            </div>
          </div>

          {/* Right: Fixed Copy Button */}
          <div className="min-w-[60px] flex-shrink-0 flex justify-center">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-gray-600 text-white hover:bg-gray-800 text-sm px-4 py-2 h-auto whitespace-nowrap"
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
