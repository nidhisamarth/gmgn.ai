
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';
import TrendingFilters from '../components/mobile/TrendingFilters';
import TrendingDeveloperFilters from '../components/mobile/TrendingDeveloperFilters';
import TrendingTokenHeaders from '../components/mobile/TrendingTokenHeaders';
import TrendingTokenList from '../components/mobile/TrendingTokenList';

const Trending = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MobileHeader />
      <NavigationTabs />
      <TrendingFilters />
      <TrendingDeveloperFilters />
      <TrendingTokenHeaders />
      <TrendingTokenList />
    </div>
  );
};

export default Trending;
