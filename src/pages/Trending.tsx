
import React from 'react';
import TrendingHeader from '../components/mobile/TrendingHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';
import TrendingFiltersSection from '../components/mobile/TrendingFiltersSection';
import TrendingControlsSection from '../components/mobile/TrendingControlsSection';
import TrendingTableHeaders from '../components/mobile/TrendingTableHeaders';
import TrendingTokenTable from '../components/mobile/TrendingTokenTable';

const Trending = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <TrendingHeader />
      <NavigationTabs />
      <TrendingFiltersSection />
      <TrendingControlsSection />
      <TrendingTableHeaders />
      <TrendingTokenTable />
    </div>
  );
};

export default Trending;
