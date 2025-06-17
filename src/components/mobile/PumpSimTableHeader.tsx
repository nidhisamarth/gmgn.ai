import React, { useState, useRef, useEffect } from "react";
import { Filter } from "lucide-react";

interface PumpSimTableHeaderProps {
  onCurrencyToggle?: (isSolMode: boolean) => void;
  onSortClick?: () => void;
  onHeaderScroll?: (scrollLeft: number) => void;
  scrollLeft?: number;
}

const PumpSimTableHeader = ({
  onCurrencyToggle,
  onSortClick,
  onHeaderScroll,
  scrollLeft = 0,
}: PumpSimTableHeaderProps) => {
  const [isSolMode, setIsSolMode] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const handleCurrencyClick = () => {
    const newMode = !isSolMode;
    setIsSolMode(newMode);
    onCurrencyToggle?.(newMode);
  };

  const handleSortClick = () => {
    onSortClick?.();
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
        <div className="flex items-center flex-shrink-0">
          {/* Token/MCap Header */}
          <div className="min-w-[120px] text-left">
            <div className="flex items-center gap-1">
              <span className="font-medium">Token / MCap</span>
              <button
                onClick={handleSortClick}
                className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1"
              >
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
              </button>
            </div>
          </div>

          {/* 5M Change - 10 spaces gap */}
          <div className="text-center min-w-[60px] ml-10">
            <div className="flex items-center justify-center gap-1">
              <span className="font-medium">5M</span>
              <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
              </button>
            </div>
          </div>

          {/* 1H Change */}
          <div className="text-center min-w-[60px] ml-4">
            <div className="flex items-center justify-center gap-1">
              <span className="font-medium">1H</span>
              <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
              </button>
            </div>
          </div>

          {/* Filter icon */}
          <div className="w-4 ml-4 flex justify-center">
            <Filter className="w-4 h-4 flex-shrink-0" />
          </div>
        </div>

        {/* Middle: Scrollable columns container */}
        <div
          ref={scrollableRef}
          className="flex items-center gap-4 flex-1 overflow-x-auto scrollbar-hide ml-4"
          onScroll={handleScroll}
        >
          {/* 6H Change */}
          <div className="text-center min-w-[60px] flex-shrink-0">
            <div className="flex items-center justify-center gap-1">
              <span className="font-medium">6H</span>
              <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
              </button>
            </div>
          </div>

          {/* 24H Change */}
          <div className="text-center min-w-[60px] flex-shrink-0">
            <div className="flex items-center justify-center gap-1">
              <span className="font-medium">24H</span>
              <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
              </button>
            </div>
          </div>

          {/* Volume 24H */}
          <div className="text-center min-w-[80px] flex-shrink-0">
            <div className="flex items-center justify-center gap-1">
              <span className="font-medium">Vol 24H</span>
              <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
              </button>
            </div>
          </div>

          {/* Txns */}
          <div className="text-center min-w-[60px] flex-shrink-0">
            <div className="flex items-center justify-center gap-1">
              <span className="font-medium">Txns</span>
              <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
              </button>
            </div>
          </div>

          {/* Age */}
          <div className="text-center min-w-[60px] flex-shrink-0">
            <span className="font-medium">Age</span>
          </div>

          {/* Holders */}
          <div className="text-center min-w-[40px] flex-shrink-0">
            <span className="font-medium">Holders</span>
          </div>

          {/* Liquidity */}
          <div className="text-center min-w-[80px] flex-shrink-0">
            <div className="flex items-center justify-center gap-1">
              <span className="font-medium">Liquidity</span>
              <button className="flex items-center justify-center touch-manipulation min-h-[32px] min-w-[32px] p-1">
                <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400 hover:border-b-gray-300 transition-colors"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Fixed Copy button column */}
        <div className="min-w-[60px] flex-shrink-0 flex justify-center">
          <span className="font-medium">Action</span>
        </div>
      </div>
    </div>
  );
};

export default PumpSimTableHeader;
