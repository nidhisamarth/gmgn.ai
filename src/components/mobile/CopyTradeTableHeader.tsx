import React, { useState, useRef, useEffect } from "react";
import { Filter } from "lucide-react";

interface CopyTradeTableHeaderProps {
  onCurrencyToggle?: (isSolMode: boolean) => void;
  onSolBalClick?: () => void;
  onHeaderScroll?: (scrollLeft: number) => void;
  scrollLeft?: number;
}

const CopyTradeTableHeader = ({
  onCurrencyToggle,
  onSolBalClick,
  onHeaderScroll,
  scrollLeft = 0,
}: CopyTradeTableHeaderProps) => {
  const [isSolMode, setIsSolMode] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const handleCurrencyClick = () => {
    const newMode = !isSolMode;
    setIsSolMode(newMode);
    onCurrencyToggle?.(newMode);
  };

  const handleSolBalClick = () => {
    onSolBalClick?.();
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    onHeaderScroll?.(scrollLeft);
  };

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft = scrollLeft;
    }
  }, [scrollLeft]);
  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex items-center text-gray-400 text-sm">
        {/* Left: Fixed Basic Columns */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Wallet/SOL Balance Header */}
          <div className="flex items-center gap-1 min-w-[120px]">
            <span className="font-medium">Wallet / SOL Bal</span>
            <button
              onClick={handleSolBalClick}
              className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1"
            >
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
            </button>
          </div>

          {/* 1D PnL with dropdown */}
          <div className="flex items-center gap-1 min-w-[60px]">
            <span className="font-medium">1D PnL</span>
            <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
            </button>
          </div>

          {/* USD/SOL toggle button */}
          <button
            onClick={handleCurrencyClick}
            className="flex items-center gap-1 hover:text-gray-200 transition-colors min-w-[60px]"
          >
            <span className="font-medium">{isSolMode ? "SOL" : "USD"}</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Filter icon */}
          <Filter className="w-4 h-4 flex-shrink-0" />
        </div>

        {/* Middle: Scrollable columns container */}
        <div
          ref={scrollableRef}
          className="flex items-center gap-4 flex-1 overflow-x-auto scrollbar-hide ml-4"
          onScroll={handleScroll}
        >
          {/* 7D PnL Column */}
          <div className="flex items-center gap-1 min-w-[60px] flex-shrink-0">
            <span className="font-medium">7D PnL</span>
            <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
            </button>
          </div>

          <div className="flex items-center gap-1 min-w-[60px] flex-shrink-0">
            <span className="font-medium">30D Pr</span>
          </div>

          <div className="flex items-center gap-1 min-w-[80px] flex-shrink-0">
            <span className="font-medium">7D Win Rate</span>
            <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
            </button>
          </div>

          <div className="flex items-center gap-1 min-w-[60px] flex-shrink-0">
            <span className="font-medium">7D TXs</span>
            <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
            </button>
          </div>

          <div className="flex items-center gap-1 min-w-[60px] flex-shrink-0">
            <span className="font-medium">7D Toke</span>
          </div>

          <div className="flex items-center gap-1 min-w-[40px] flex-shrink-0">
            <span className="font-medium">7D</span>
          </div>

          <div className="flex items-center gap-1 min-w-[80px] flex-shrink-0">
            <span className="font-medium">7D Avg Cost</span>
            <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
            </button>
          </div>
        </div>

        {/* Right: Fixed Copy button column */}
        <div className="min-w-[60px] flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default CopyTradeTableHeader;
