
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BuyAmountContextType {
  buyAmount: number;
  setBuyAmount: (amount: number) => void;
  calculatePrice: (amount: number) => string;
}

const BuyAmountContext = createContext<BuyAmountContextType | undefined>(undefined);

export const useBuyAmount = () => {
  const context = useContext(BuyAmountContext);
  if (context === undefined) {
    throw new Error('useBuyAmount must be used within a BuyAmountProvider');
  }
  return context;
};

interface BuyAmountProviderProps {
  children: ReactNode;
}

export const BuyAmountProvider: React.FC<BuyAmountProviderProps> = ({ children }) => {
  const [buyAmount, setBuyAmount] = useState(8);

  const calculatePrice = (amount: number) => {
    const basePrice = 0.0012; // Example base price per token
    return (amount * basePrice).toFixed(4);
  };

  return (
    <BuyAmountContext.Provider value={{ buyAmount, setBuyAmount, calculatePrice }}>
      {children}
    </BuyAmountContext.Provider>
  );
};
