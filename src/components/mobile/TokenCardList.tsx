
import React from 'react';
import TokenCard from './TokenCard';
import { TokenData } from '../../types/token';
import { useRealTimeData } from '../../hooks/useRealTimeData';

const TokenCardList = () => {
  const tokens = useRealTimeData();

  // Update token profile images with better placeholder images
  const tokensWithUpdatedImages = tokens.map((token, index) => {
    const profileImages = [
      'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=200&h=200&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=200&h=200&fit=crop&crop=face'
    ];
    
    return {
      ...token,
      profileImage: profileImages[index % profileImages.length]
    };
  });

  return (
    <div className="bg-black px-4 pb-4 space-y-3">
      {tokensWithUpdatedImages.map((token) => (
        <TokenCard key={token.id} token={token} />
      ))}
    </div>
  );
};

export default TokenCardList;
