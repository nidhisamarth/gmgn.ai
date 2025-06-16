import React from "react";
import { Button } from "@/components/ui/button";

interface CopyTradeHeaderProps {
  viewMode: "rank" | "copytrade";
  onViewModeChange: (mode: "rank" | "copytrade") => void;
}

const CopyTradeHeader = ({
  viewMode,
  onViewModeChange,
}: CopyTradeHeaderProps) => {
  const isToggled = viewMode === "copytrade";

  return (
    <div className="px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewModeChange("rank")}
            className={`text-lg font-medium transition-colors px-2 py-1 rounded ${
              viewMode === "rank"
                ? "text-white bg-gray-800"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Rank
          </button>
          <button
            onClick={() => onViewModeChange("copytrade")}
            className={`text-lg font-medium transition-colors px-2 py-1 rounded ${
              viewMode === "copytrade"
                ? "text-white bg-gray-800"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            CopyTrade
          </button>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 text-xs px-3 py-1.5 h-auto"
        >
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
          0-Latency Alert
        </Button>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 text-sm px-4 py-2 h-auto"
      >
        <span className="font-bold mr-1">C</span>
        Create
      </Button>
    </div>
  );
};

export default CopyTradeHeader;
