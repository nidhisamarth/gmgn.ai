
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';
import HoldingSubNav from '../components/mobile/HoldingSubNav';
import HoldingPortfolioSummary from '../components/mobile/HoldingPortfolioSummary';
import HoldingFilters from '../components/mobile/HoldingFilters';
import HoldingTokenList from '../components/mobile/HoldingTokenList';

const Holding = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <MobileHeader />
      <NavigationTabs />
      <HoldingSubNav />
      <HoldingPortfolioSummary />
      <HoldingFilters />
      <HoldingTokenList />
    </div>
  );
};

export default Holding;
