
import React from 'react';

const MonitorRecommendations = () => {
  return (
    <div className="px-4 py-8">
      {/* Recommendation message with frog */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-20 h-20 flex-shrink-0">
          <img 
            src="/lovable-uploads/3446d744-cd08-43f6-beba-f962a9fb2d58.png" 
            alt="Frog mascot" 
            className="w-20 h-20 object-contain transform scale-x-[-1]"
          />
        </div>
        <div className="text-white">
          <p className="text-base">
            If there are no following data, we recommend you to follow some SOL addresses first.
          </p>
        </div>
      </div>

      {/* KOL Recommendations section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-medium">KOL Recommendations</h2>
        <button className="text-gray-400 text-sm hover:text-white transition-colors">
          Switch to next
        </button>
      </div>

      {/* Show more button */}
      <div className="text-center mt-8">
        <button className="text-gray-400 text-sm hover:text-white transition-colors">
          show more
        </button>
      </div>
    </div>
  );
};

export default MonitorRecommendations;
