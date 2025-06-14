
import React from 'react';
import TrendingTokenItem from './TrendingTokenItem';

const TrendingTokenList = () => {
  const tokens = [
    {
      name: 'MUSKWIFQ',
      symbol: 'Q',
      timestamp: '19h',
      contract: 'AYZNq...ump',
      profileImage: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop&crop=face',
      liquidity: '306.1K',
      marketCap: '$1.8M',
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: 'BDAYTA',
      symbol: 'Q',
      timestamp: '46m',
      contract: 'AEDUX...ump',
      profileImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop&crop=face',
      liquidity: '157.9K',
      marketCap: '$153K',
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: 'Fur',
      symbol: 'Q',
      timestamp: '1h',
      contract: '4vBiG...G1y',
      profileImage: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=200&h=200&fit=crop&crop=face',
      liquidity: '78.8K',
      marketCap: '$215.3M',
      hasFireIcon: true,
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: 'VDNA',
      symbol: 'Q',
      timestamp: '1h',
      contract: 'BGYwa...Yet',
      profileImage: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=face',
      liquidity: '26.5K',
      marketCap: '$23.9M',
      hasFireIcon: true,
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: '$MILLIQ',
      symbol: 'Q',
      timestamp: '1h',
      contract: '668iT...xpX',
      profileImage: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=200&h=200&fit=crop&crop=face',
      liquidity: '58.2K',
      marketCap: '$117.5M',
      hasFireIcon: true,
      hasDropIcon: true,
      hasVerifiedIcon: true
    },
    {
      name: 'MEKABU',
      symbol: 'Q',
      timestamp: '38d',
      contract: 'x2AAj...ump',
      profileImage: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop&crop=face',
      liquidity: '108.2K',
      marketCap: '$978.9K',
      hasFireIcon: true,
      hasDropIcon: true,
      hasCheckIcon: true
    },
    {
      name: 'BDAYTA',
      symbol: 'Q',
      timestamp: '38m',
      contract: 'FynFY...UMP',
      profileImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop&crop=face',
      liquidity: '198.6K',
      marketCap: '$227.3K',
      hasDropIcon: true,
      hasVerifiedIcon: true
    }
  ];

  return (
    <div className="bg-black">
      {tokens.map((token, index) => (
        <TrendingTokenItem
          key={index}
          {...token}
        />
      ))}
    </div>
  );
};

export default TrendingTokenList;
