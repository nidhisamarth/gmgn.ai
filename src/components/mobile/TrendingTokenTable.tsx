
import React from 'react';
import TrendingTokenRow from './TrendingTokenRow';

const TrendingTokenTable = () => {
  const tokens = [
    {
      name: 'DOGEFA',
      symbol: 'Q',
      timestamp: '5h',
      contract: 'CRKUJ...ump',
      profileImage: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=40&h=40&fit=crop&crop=face',
      liquidity: '275K',
      marketCap: '$1.4M',
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: 'USDP',
      symbol: 'Q',
      timestamp: '35m',
      contract: 'EFSHa...ump',
      profileImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=40&h=40&fit=crop&crop=face',
      liquidity: '211.9K',
      marketCap: '$264.4K',
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: 'IRAN',
      symbol: 'Q',
      timestamp: '50m',
      contract: '7Zktd...ump',
      profileImage: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=40&h=40&fit=crop&crop=face',
      liquidity: '52.1K',
      marketCap: '$238.4K',
      hasFireIcon: true,
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: 'Jail m',
      symbol: 'Q',
      timestamp: '116d',
      contract: 'Cb3jP...qAJ',
      profileImage: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=40&h=40&fit=crop&crop=face',
      liquidity: '34.5K',
      marketCap: '$115.6K',
      hasFireIcon: true,
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: '😂',
      symbol: 'Q',
      timestamp: '57m',
      contract: '7adZJ...ump',
      profileImage: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=40&h=40&fit=crop&crop=face',
      liquidity: '190.6K',
      marketCap: '$256.2K',
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: 'yeti',
      symbol: 'Q',
      timestamp: '235d',
      contract: '75UzQ...jBW',
      profileImage: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=40&h=40&fit=crop&crop=face',
      liquidity: '5.4K',
      marketCap: '$2.7K',
      hasFireIcon: true,
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: 'popfro',
      symbol: 'Q',
      timestamp: '3h',
      contract: 'CiB3i...ump',
      profileImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=40&h=40&fit=crop&crop=face',
      liquidity: '39.3K',
      marketCap: '$125.3K',
      hasFireIcon: true,
      hasDropIcon: true,
      hasVerifiedIcon: true
    }
  ];

  return (
    <div className="bg-black">
      {tokens.map((token, index) => (
        <TrendingTokenRow
          key={`${token.name}-${index}`}
          token={token}
        />
      ))}
    </div>
  );
};

export default TrendingTokenTable;
