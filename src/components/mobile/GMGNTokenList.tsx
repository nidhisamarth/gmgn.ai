
import React from 'react';
import GMGNTokenCard from './GMGNTokenCard';

const GMGNTokenList = () => {
  const tokens = [
    {
      name: 'Peanut the Squirrel',
      symbol: 'PNUT',
      price: '$1.4424',
      change: '+18.22%',
      changePercent: '+18.22%',
      volume: '$2.8B',
      marketCap: '$1.4B',
      age: '4d',
      icon: '🐿️',
      isPositive: true
    },
    {
      name: 'dogwifhat',
      symbol: 'WIF',
      price: '$3.4438',
      change: '-3.08%',
      changePercent: '-3.08%',
      volume: '$890.0M',
      marketCap: '$3.4B',
      age: '289d',
      icon: '🐕',
      isPositive: false
    },
    {
      name: 'Popcat',
      symbol: 'POPCAT',
      price: '$1.6307',
      change: '+8.36%',
      changePercent: '+8.36%',
      volume: '$156.0M',
      marketCap: '$1.6B',
      age: '152d',
      icon: '🐱',
      isPositive: true
    }
  ];

  return (
    <div className="pb-20">
      {tokens.map((token, index) => (
        <GMGNTokenCard
          key={index}
          {...token}
        />
      ))}
    </div>
  );
};

export default GMGNTokenList;
