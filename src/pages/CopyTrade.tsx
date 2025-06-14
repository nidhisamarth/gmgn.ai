
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';
import CopyTradeNotification from '../components/mobile/CopyTradeNotification';
import CopyTradeHeader from '../components/mobile/CopyTradeHeader';
import CopyTradeFilters from '../components/mobile/CopyTradeFilters';
import CopyTradeTableHeader from '../components/mobile/CopyTradeTableHeader';
import CopyTradeWalletList from '../components/mobile/CopyTradeWalletList';

const CopyTrade = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MobileHeader />
      <NavigationTabs />
      <CopyTradeNotification />
      <CopyTradeHeader />
      <CopyTradeFilters />
      <CopyTradeTableHeader />
      <CopyTradeWalletList />
    </div>
  );
};

export default CopyTrade;
