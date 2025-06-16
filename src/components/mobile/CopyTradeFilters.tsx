import React, { useState } from "react";

const CopyTradeFilters = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Pump SM",
    "Smart Money",
    "KOL/VC",
    "Fresh Wallet",
    "Sniper",
  ];

  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap text-sm px-3 py-2 transition-colors min-h-[32px] touch-manipulation flex-shrink-0 ${
              activeFilter === filter
                ? "text-white font-medium"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CopyTradeFilters;
