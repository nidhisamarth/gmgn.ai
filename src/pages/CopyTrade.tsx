import React, { useState } from "react";
import MobileHeader from "../components/mobile/MobileHeader";
import NavigationTabs from "../components/mobile/NavigationTabs";
import CopyTradeNotification from "../components/mobile/CopyTradeNotification";
import CopyTradeHeader from "../components/mobile/CopyTradeHeader";
import CopyTradeFilters from "../components/mobile/CopyTradeFilters";
import CopyTradeTableHeader from "../components/mobile/CopyTradeTableHeader";
import CopyTradeWalletList from "../components/mobile/CopyTradeWalletList";
import { Button } from "@/components/ui/button";

const CopyTrade = () => {
  const [viewMode, setViewMode] = useState<"rank" | "copytrade">("rank");
  const [isSolMode, setIsSolMode] = useState(false);
  const [sortByBalance, setSortByBalance] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleViewModeChange = (mode: "rank" | "copytrade") => {
    setViewMode(mode);
  };

  const handleCurrencyToggle = (solMode: boolean) => {
    setIsSolMode(solMode);
  };

  const handleSolBalClick = () => {
    setSortByBalance(!sortByBalance);
  };

  const handleHeaderScroll = (newScrollLeft: number) => {
    setScrollLeft(newScrollLeft);
  };

  const handleDataScroll = (newScrollLeft: number) => {
    setScrollLeft(newScrollLeft);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MobileHeader />
      <NavigationTabs />
      <CopyTradeNotification />
      <CopyTradeHeader
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
      />

      {viewMode === "rank" ? (
        // Original Rank view with filters and table
        <>
          <CopyTradeFilters />
          <CopyTradeTableHeader
            onCurrencyToggle={handleCurrencyToggle}
            onSolBalClick={handleSolBalClick}
            onHeaderScroll={handleHeaderScroll}
            scrollLeft={scrollLeft}
          />
          <CopyTradeWalletList
            isSolMode={isSolMode}
            sortByBalance={sortByBalance}
            onDataScroll={handleDataScroll}
            scrollLeft={scrollLeft}
          />
        </>
      ) : (
        // CopyTrade view with empty state
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 min-h-[calc(100vh-200px)]">
          {/* Pixelated folder icon */}
          <div className="mb-8">
            <svg
              width="120"
              height="96"
              viewBox="0 0 120 96"
              fill="none"
              className="opacity-60"
            >
              {/* Pixelated folder base */}
              <rect x="16" y="32" width="88" height="56" fill="#4B5563" />
              <rect x="16" y="32" width="88" height="8" fill="#6B7280" />

              {/* Folder tab */}
              <rect x="16" y="24" width="32" height="8" fill="#6B7280" />
              <rect x="48" y="16" width="8" height="8" fill="#6B7280" />
              <rect x="56" y="24" width="48" height="8" fill="#6B7280" />

              {/* Pixelated details */}
              <rect x="24" y="48" width="8" height="8" fill="#374151" />
              <rect x="40" y="48" width="8" height="8" fill="#374151" />
              <rect x="56" y="48" width="8" height="8" fill="#374151" />
              <rect x="72" y="48" width="8" height="8" fill="#374151" />
              <rect x="88" y="48" width="8" height="8" fill="#374151" />

              <rect x="24" y="64" width="8" height="8" fill="#374151" />
              <rect x="40" y="64" width="8" height="8" fill="#374151" />
              <rect x="56" y="64" width="8" height="8" fill="#374151" />
              <rect x="72" y="64" width="8" height="8" fill="#374151" />
              <rect x="88" y="64" width="8" height="8" fill="#374151" />

              {/* Document/paper effect */}
              <rect x="32" y="40" width="64" height="40" fill="#52525B" />
              <rect x="40" y="48" width="48" height="2" fill="#71717A" />
              <rect x="40" y="54" width="48" height="2" fill="#71717A" />
              <rect x="40" y="60" width="48" height="2" fill="#71717A" />
              <rect x="40" y="66" width="32" height="2" fill="#71717A" />

              {/* Simple eyes for character effect */}
              <rect x="64" y="52" width="4" height="4" fill="#D1D5DB" />
              <rect x="76" y="52" width="4" height="4" fill="#D1D5DB" />
            </svg>
          </div>

          {/* Main heading */}
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            No CopyTrade Orders
          </h2>

          {/* Description text */}
          <p className="text-gray-400 text-center mb-8 max-w-md leading-relaxed">
            copy trade helps you instantly mirror all transactions from smart
            wallets
          </p>

          {/* Copy trade button */}
          <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            <span className="mr-2 font-bold text-lg">C</span>
            Copy trade
          </Button>
        </div>
      )}
    </div>
  );
};

export default CopyTrade;
