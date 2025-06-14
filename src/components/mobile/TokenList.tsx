
import React from 'react';
import TokenListItem from './TokenListItem';

const TokenList = () => {
  const tokens = [
    {
      name: 'SATSU...',
      displayName: 'Satsuki',
      timestamp: '28s',
      contract: '4nGyN...pRi',
      profileImage: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop&crop=face',
      socialIcons: ['instagram', 'search'],
      stats: {
        percentage1: 0.8,
        percentage2: 0.7,
        views: 1
      },
      volume: '$911.8',
      marketCap: '$4.1K',
      communityCount: 3,
      txCount: 5
    },
    {
      name: 'KUROS...',
      displayName: 'くろすけ',
      timestamp: '33s',
      contract: 'HsU32...om2',
      profileImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop&crop=face',
      socialIcons: ['instagram', 'crown'],
      badgeNumber: 23,
      stats: {
        percentage1: 0,
        percentage2: 0,
        views: 1,
        runs: 1
      },
      volume: '$295.4',
      marketCap: '$4.1K',
      communityCount: 3,
      txCount: 6,
      targetCount: 1
    },
    {
      name: '79ht',
      displayName: "Trump's Birthday",
      timestamp: '40s',
      contract: '8he7g...JtK',
      profileImage: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=200&h=200&fit=crop&crop=face',
      hasBadge: true,
      badgeIcon: '🔗',
      socialIcons: ['search'],
      stats: {
        percentage1: 96,
        percentage2: 96,
        views: 96
      },
      volume: '$0',
      marketCap: '$0',
      communityCount: 2,
      txCount: 0
    },
    {
      name: 'Aomin...',
      displayName: 'Stare Cat',
      timestamp: '44s',
      contract: 'GafML...gAc',
      profileImage: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=face',
      socialIcons: ['x', 'instagram', 'search'],
      stats: {
        percentage1: 1,
        percentage2: 0.8,
        views: 1,
        runs: 10
      },
      volume: '$621',
      marketCap: '$4.1K',
      communityCount: 4,
      txCount: 6
    }
  ];

  return (
    <div className="bg-black divide-y divide-gray-800">
      {tokens.map((token, index) => (
        <TokenListItem
          key={index}
          {...token}
        />
      ))}
    </div>
  );
};

export default TokenList;
