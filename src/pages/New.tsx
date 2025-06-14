
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';
import TimeFilters from '../components/mobile/TimeFilters';
import DeveloperFilters from '../components/mobile/DeveloperFilters';
import TokenTableHeaders from '../components/mobile/TokenTableHeaders';
import NewTokenList from '../components/mobile/NewTokenList';

const New = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MobileHeader />
      <NavigationTabs />
      <TimeFilters />
      <DeveloperFilters />
      <TokenTableHeaders />
      <NewTokenList />
    </div>
  );
};

export default New;
