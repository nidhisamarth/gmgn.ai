
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';
import FollowSubNav from '../components/mobile/FollowSubNav';
import FollowSearchBar from '../components/mobile/FollowSearchBar';
import FollowAlerts from '../components/mobile/FollowAlerts';
import FollowGroups from '../components/mobile/FollowGroups';
import FollowTable from '../components/mobile/FollowTable';

const Follow = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <MobileHeader />
      <NavigationTabs />
      <FollowSubNav />
      <FollowSearchBar />
      <FollowAlerts />
      <FollowGroups />
      <FollowTable />
    </div>
  );
};

export default Follow;
