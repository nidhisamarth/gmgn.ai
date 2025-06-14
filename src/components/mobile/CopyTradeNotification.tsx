
import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

const CopyTradeNotification = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-600/20 border-l-4 border-yellow-500 px-4 py-3 mx-4 mt-4 rounded-r">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-yellow-200 text-sm">
            SnipeX & X Tracker are unavailable for upgrades. Will resume soon.
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-yellow-300 hover:text-yellow-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CopyTradeNotification;
