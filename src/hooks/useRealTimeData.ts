
import { useState, useEffect } from 'react';
import { TokenData } from '../types/token';

const initialTokens: TokenData[] = [
  {
    id: '1',
    name: 'SATSU...',
    displayName: 'Satsuki',
    timestamp: '28s',
    contract: '4nGyN...pRi',
    profileImage: '/lovable-uploads/67520719-6b9f-429e-ac3d-5787cb090bfb.png',
    verified: true,
    verificationColor: 'green',
    socialIcons: ['instagram', 'search'],
    stats: {
      percentage1: 0.8,
      percentage2: 0.7,
      users: 3,
      views: 1,
      runs: 0
    },
    volume: '$911.8',
    marketCap: '$4.1K',
    lightning: true,
    communityCount: 3,
    txCount: 5
  },
  {
    id: '2',
    name: 'KUROS...',
    displayName: 'くろすけ',
    timestamp: '33s',
    contract: 'HsU32...om2',
    profileImage: '/lovable-uploads/67520719-6b9f-429e-ac3d-5787cb090bfb.png',
    verified: true,
    verificationColor: 'green',
    socialIcons: ['instagram', 'crown'],
    stats: {
      percentage1: 0,
      percentage2: 0,
      users: 3,
      views: 1,
      runs: 1
    },
    volume: '$295.4',
    marketCap: '$4.1K',
    lightning: true,
    communityCount: 3,
    txCount: 6,
    targetCount: 1
  },
  {
    id: '3',
    name: '79ht',
    displayName: "Trump's Birthday",
    timestamp: '40s',
    contract: '8he7g...JtK',
    profileImage: '/lovable-uploads/67520719-6b9f-429e-ac3d-5787cb090bfb.png',
    verified: true,
    verificationColor: 'blue',
    socialIcons: ['search'],
    stats: {
      percentage1: 96,
      percentage2: 96,
      users: 2,
      views: 96,
      runs: 0
    },
    volume: '$0',
    marketCap: '$0',
    lightning: true,
    communityCount: 2,
    txCount: 0
  },
  {
    id: '4',
    name: 'Aomin...',
    displayName: 'Stare Cat',
    timestamp: '44s',
    contract: 'GafML...gAc',
    profileImage: '/lovable-uploads/67520719-6b9f-429e-ac3d-5787cb090bfb.png',
    verified: true,
    verificationColor: 'green',
    socialIcons: ['x', 'instagram', 'search'],
    stats: {
      percentage1: 1,
      percentage2: 0.8,
      users: 4,
      views: 1,
      runs: 10
    },
    volume: '$621',
    marketCap: '$4.1K',
    lightning: true,
    communityCount: 4,
    txCount: 6
  }
];

export const useRealTimeData = () => {
  const [tokens, setTokens] = useState<TokenData[]>(initialTokens);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens(prevTokens => 
        prevTokens.map(token => {
          // Parse current timestamp
          const currentSeconds = parseInt(token.timestamp.replace('s', ''));
          const newSeconds = currentSeconds + 1;
          
          // Simulate some random updates
          const shouldUpdate = Math.random() > 0.7;
          
          return {
            ...token,
            timestamp: `${newSeconds}s`,
            txCount: shouldUpdate ? token.txCount + 1 : token.txCount,
            stats: {
              ...token.stats,
              percentage1: shouldUpdate ? 
                Math.max(0, token.stats.percentage1 + (Math.random() - 0.5) * 2) : 
                token.stats.percentage1
            }
          };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return tokens;
};
