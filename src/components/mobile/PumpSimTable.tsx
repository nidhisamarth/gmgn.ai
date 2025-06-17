import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface PumpSimData {
  rank: number;
  address: string;
  mcap: string;
  change5m: string;
  change1h: string;
  change6h: string;
  change24h: string;
  volume24h: string;
  txns: string;
  age: string;
  avatar: string;
  bgColor: string;
  holders: string;
  liquidity: string;
  marketCap: string;
  fdv: string;
  buyTax: string;
  sellTax: string;
}

interface PumpSimTableProps {
  isSolMode?: boolean;
  sortByBalance?: boolean;
  onDataScroll?: (scrollLeft: number) => void;
  scrollLeft?: number;
}

const PumpSimTable = ({
  isSolMode = false,
  sortByBalance = false,
  onDataScroll,
  scrollLeft = 0,
}: PumpSimTableProps) => {
  const pumpSimData: PumpSimData[] = [
    {
      rank: 1,
      address: "HGNAN...JW",
      mcap: "$100.0K",
      change5m: "+87.1%",
      change1h: "-65.3%",
      change6h: "",
      change24h: "",
      volume24h: "0",
      txns: "2",
      age: "3",
      avatar: "🐸",
      bgColor: "bg-orange-500",
      holders: "1",
      liquidity: "+$1,898",
      marketCap: "68.9m",
      fdv: "100%",
      buyTax: "-100%",
      sellTax: "-50%",
    },
    {
      rank: 2,
      address: "EuriS",
      mcap: "$1,221.5K",
      change5m: "+84.3%",
      change1h: "+46.7%",
      change6h: "-3%",
      change24h: "72.0%",
      volume24h: "1,900",
      txns: "5",
      age: "300",
      avatar: "👦",
      bgColor: "bg-pink-500",
      holders: "126",
      liquidity: "+$615.5",
      marketCap: "1.7M",
      fdv: "100%",
      buyTax: "-100%",
      sellTax: "-50%",
    },
    {
      rank: 3,
      address: "BoPEr...VXS",
      mcap: "$344.7K",
      change5m: "-36.8%",
      change1h: "+27.8%",
      change6h: "-27.7%",
      change24h: "79%",
      volume24h: "9",
      txns: "1",
      age: "300",
      avatar: "🎯",
      bgColor: "bg-pink-500",
      holders: "349",
      liquidity: "+$206.6",
      marketCap: "200.6",
      fdv: "100%",
      buyTax: "-100%",
      sellTax: "-50%",
    },
    {
      rank: 4,
      address: "Bevers...utM",
      mcap: "$318.6K",
      change5m: "+90.0%",
      change1h: "-22.4%",
      change6h: "-12.2%",
      change24h: "54.2%",
      volume24h: "435",
      txns: "1",
      age: "58",
      avatar: "🎯",
      bgColor: "bg-pink-500",
      holders: "82",
      liquidity: "+$318.6",
      marketCap: "80.3m",
      fdv: "100%",
      buyTax: "-100%",
      sellTax: "-50%",
    },
    {
      rank: 5,
      address: "ER8K...wbE",
      mcap: "$517.4K",
      change5m: "-53.3%",
      change1h: "+14.1%",
      change6h: "+5.4%",
      change24h: "66.7%",
      volume24h: "51",
      txns: "1",
      age: "4",
      avatar: "🎯",
      bgColor: "bg-green-500",
      holders: "2",
      liquidity: "+$517.4",
      marketCap: "13.8m",
      fdv: "100%",
      buyTax: "-100%",
      sellTax: "-50%",
    },
    {
      rank: 6,
      address: "EWqL...SS",
      mcap: "$1,418.3K",
      change5m: "-118.1%",
      change1h: "+34.3%",
      change6h: "-34.5%",
      change24h: "48%",
      volume24h: "176",
      txns: "24",
      age: "33",
      avatar: "🎯",
      bgColor: "bg-green-500",
      holders: "3",
      liquidity: "+$203.7",
      marketCap: "67.0m",
      fdv: "100%",
      buyTax: "-100%",
      sellTax: "-50%",
    },
    {
      rank: 7,
      address: "BPbdL...nYT",
      mcap: "$1,271.4K",
      change5m: "",
      change1h: "+12.1%",
      change6h: "+56.5%",
      change24h: "48.2%",
      volume24h: "37",
      txns: "1",
      age: "6",
      avatar: "🎯",
      bgColor: "bg-gray-500",
      holders: "6",
      liquidity: "+$136.9",
      marketCap: "54.6m",
      fdv: "100%",
      buyTax: "-100%",
      sellTax: "-50%",
    },
    {
      rank: 8,
      address: "BeBBm...cYH5",
      mcap: "$1,315.3K",
      change5m: "+3%",
      change1h: "-11.1%",
      change6h: "",
      change24h: "50%",
      volume24h: "30",
      txns: "6",
      age: "6",
      avatar: "🎯",
      bgColor: "bg-orange-500",
      holders: "6",
      liquidity: "+$87",
      marketCap: "29.3m",
      fdv: "100%",
      buyTax: "-100%",
      sellTax: "-50%",
    },
  ];

  const scrollableRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const getChangeTextColor = (change: string) => {
    if (change.startsWith("-")) return "text-red-400";
    if (change.startsWith("+")) return "text-green-400";
    return "text-white";
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
      {pumpSimData.map((item, index) => (
        <div
          key={item.rank}
          className="flex items-center py-3 border-b border-gray-800/30 last:border-b-0"
        >
          {/* Left: Fixed Basic Columns */}
          <div className="flex items-center flex-shrink-0">
            {/* Rank & Token Info */}
            <div className="min-w-[120px] text-left">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center text-sm flex-shrink-0`}
                  >
                    {item.avatar}
                  </div>
                  {shouldShowRank(item.rank) && (
                    <div
                      className={`absolute -top-2 left-1/2 transform -translate-x-1/2 ${getRankBadgeColor(item.rank)} text-black text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[28px] text-center leading-none`}
                    >
                      {item.rank}
                      {getRankSuffix(item.rank)}
                    </div>
                  )}
                </div>

                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm font-medium">
                      {item.address}
                    </span>
                    <span className="text-green-400">🔗</span>
                    <span className="text-green-400">🌿</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <span className="text-gray-500">MCap</span>
                    <span>{item.mcap}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5M Change - 10 spaces gap */}
            <div className="text-center min-w-[60px] ml-10">
              <div
                className={`${getChangeTextColor(item.change5m)} text-sm font-medium`}
              >
                {item.change5m || "--"}
              </div>
            </div>

            {/* 1H Change */}
            <div className="text-center min-w-[60px] ml-4">
              <div
                className={`${getChangeTextColor(item.change1h)} text-sm font-medium`}
              >
                {item.change1h || "--"}
              </div>
            </div>

            {/* Filter space */}
            <div className="w-4 ml-4 flex justify-center"></div>
          </div>

          {/* Middle: Scrollable columns container */}
          <div
            ref={(el) => (scrollableRefs.current[index] = el)}
            className="flex items-center gap-4 flex-1 overflow-x-auto scrollbar-hide ml-4"
            onScroll={(e) => handleScroll(e, index)}
          >
            {/* 6H Change */}
            <div className="text-center min-w-[60px] flex-shrink-0">
              <div
                className={`${getChangeTextColor(item.change6h)} text-sm font-medium`}
              >
                {item.change6h || "--"}
              </div>
            </div>

            {/* 24H Change */}
            <div className="text-center min-w-[60px] flex-shrink-0">
              <div
                className={`${getChangeTextColor(item.change24h)} text-sm font-medium`}
              >
                {item.change24h || "--"}
              </div>
            </div>

            {/* Volume 24H */}
            <div className="text-center min-w-[80px] flex-shrink-0">
              <div className="text-white text-sm font-medium">
                {item.volume24h || "--"}
              </div>
            </div>

            {/* Txns */}
            <div className="text-center min-w-[60px] flex-shrink-0">
              <div className="text-white text-sm font-medium">
                {item.txns || "--"}
              </div>
            </div>

            {/* Age */}
            <div className="text-center min-w-[60px] flex-shrink-0">
              <div className="text-white text-sm font-medium">
                {item.age || "--"}
              </div>
            </div>

            {/* Holders */}
            <div className="text-center min-w-[40px] flex-shrink-0">
              <div className="text-white text-sm font-medium">
                {item.holders || "--"}
              </div>
            </div>

            {/* Liquidity */}
            <div className="text-center min-w-[80px] flex-shrink-0">
              <div
                className={`${getChangeTextColor(item.liquidity)} text-sm font-medium`}
              >
                {item.liquidity || "--"}
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

export default PumpSimTable;
