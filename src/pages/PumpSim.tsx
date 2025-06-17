import React, { useState } from "react";
import MobileHeader from "../components/mobile/MobileHeader";
import NavigationTabs from "../components/mobile/NavigationTabs";
import PumpSimTableHeader from "../components/mobile/PumpSimTableHeader";
import PumpSimTable from "../components/mobile/PumpSimTable";
import CopyTradeFilters from "../components/mobile/CopyTradeFilters";

const PumpSim = () => {
  const [isSolMode, setIsSolMode] = useState(false);
  const [sortByBalance, setSortByBalance] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleCurrencyToggle = (solMode: boolean) => {
    setIsSolMode(solMode);
  };

  const handleSortClick = () => {
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

      {/* Pump Sim Header */}
      <div className="px-4 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">Pump Sim</h1>
        <p className="text-gray-400 text-sm mt-1">
          Simulate token pump scenarios and trading data
        </p>
      </div>

      {/* Filters */}
      <CopyTradeFilters />

      {/* Table Header */}
      <PumpSimTableHeader
        onCurrencyToggle={handleCurrencyToggle}
        onSortClick={handleSortClick}
        onHeaderScroll={handleHeaderScroll}
        scrollLeft={scrollLeft}
      />

      {/* Table Data */}
      <PumpSimTable
        isSolMode={isSolMode}
        sortByBalance={sortByBalance}
        onDataScroll={handleDataScroll}
        scrollLeft={scrollLeft}
      />
    </div>
  );
};

export default PumpSim;
