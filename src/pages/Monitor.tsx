
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';
import MonitorFilters from '../components/mobile/MonitorFilters';
import MonitorTimeFilters from '../components/mobile/MonitorTimeFilters';
import MonitorControls from '../components/mobile/MonitorControls';
import MonitorRecommendations from '../components/mobile/MonitorRecommendations';

const Monitor = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MobileHeader />
      <NavigationTabs />
      <MonitorFilters />
      <MonitorTimeFilters />
      <MonitorControls />
      <MonitorRecommendations />
    </div>
  );
};

export default Monitor;
