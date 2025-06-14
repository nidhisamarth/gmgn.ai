
import React from 'react';

interface SocialIconProps {
  type: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'instagram':
        return (
          <div className="w-4 h-4 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 rounded flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="8" height="8" rx="2" stroke="white" strokeWidth="0.8" fill="none" />
              <circle cx="5" cy="5" r="2" stroke="white" strokeWidth="0.8" fill="none" />
              <circle cx="7.5" cy="2.5" r="0.5" fill="white" />
            </svg>
          </div>
        );
      case 'x':
        return (
          <div className="w-4 h-4 bg-black rounded flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2l6 6M8 2l-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        );
      case 'search':
        return (
          <div className="w-4 h-4 bg-gray-600 rounded flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="2.5" stroke="#d1d5db" strokeWidth="0.8" fill="none" />
              <path d="6.5 6.5l1.5 1.5" stroke="#d1d5db" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
          </div>
        );
      case 'crown':
        return (
          <div className="w-4 h-4 bg-yellow-500 rounded flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6h8l-1-3-1.5 1.5L5 3 3.5 4.5 2 3l-1 3z" fill="white" />
              <rect x="1" y="6" width="8" height="1" fill="white" />
            </svg>
          </div>
        );
      case 'website':
        return (
          <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="0.8" fill="none" />
              <path d="M1 5h8M5 1a4 4 0 004 4 4 4 0 00-4 4 4 4 0 00-4-4 4 4 0 004-4z" stroke="white" strokeWidth="0.8" fill="none" />
            </svg>
          </div>
        );
      case 'telegram':
        return (
          <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4.5l7-2.5-2 7-1.5-2.5L3 5l-2-.5z" fill="white" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-4 h-4 bg-gray-600 rounded flex items-center justify-center">
            <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="1" fill="#d1d5db" />
            </svg>
          </div>
        );
    }
  };

  return getIcon();
};

export default SocialIcon;
