
import React from 'react';
import NewTokenItem from './NewTokenItem';

const NewTokenList = () => {
  const tokens = [
    {
      name: '$StephQ',
      displayName: '$StephQ',
      timestamp: '8s',
      contract: 'FKzJr...ump',
      profileImage: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=200&h=200&fit=crop&crop=face',
      verified: true,
      price: 'SOL 0.015/0.015',
      percentage: '0%',
      hasLightning: true
    },
    {
      name: 'STEPSIQ',
      displayName: 'STEPSIQ',
      timestamp: '11s',
      contract: '2R4N3...ump',
      profileImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop&crop=face',
      verified: true,
      price: 'SOL 0/0',
      percentage: '',
      hasLightning: true
    },
    {
      name: 'Farter',
      displayName: 'Farter',
      timestamp: '13s',
      contract: 'DJry4...ump',
      profileImage: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?w=200&h=200&fit=crop&crop=face',
      verified: true,
      price: 'SOL 0/0',
      percentage: '',
      hasLightning: true
    },
    {
      name: 'Satsuk',
      displayName: 'Satsuk',
      timestamp: '16s',
      contract: 'HRRkR...ump',
      profileImage: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=face',
      verified: true,
      warningIcon: true,
      price: 'SOL 0.015/0.015',
      percentage: '0%',
      hasLightning: true
    }
  ];

  return (
    <div className="bg-black">
      {tokens.map((token, index) => (
        <NewTokenItem
          key={index}
          {...token}
        />
      ))}
    </div>
  );
};

export default NewTokenList;
