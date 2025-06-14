import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Trash } from 'lucide-react';

interface TPSLEntry {
  id: string;
  type: 'TP' | 'SL';
  percentage: string;
  sellPercentage: string;
}

interface TPSLCustomizationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const TPSLCustomizationPanel = ({ isOpen, onClose }: TPSLCustomizationPanelProps) => {
  const [entries, setEntries] = useState<TPSLEntry[]>([
    { id: '1', type: 'TP', percentage: '100', sellPercentage: '50' },
    { id: '2', type: 'TP', percentage: '300', sellPercentage: '50' },
    { id: '3', type: 'SL', percentage: '-50', sellPercentage: '100' }
  ]);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);

  console.log('TPSLCustomizationPanel render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Backdrop clicked - closing TP/SL panel');
      onClose();
    }
  };

  const handleCloseClick = () => {
    console.log('Close button clicked');
    onClose();
  };

  const handleDeleteEntry = (id: string) => {
    console.log('Deleting entry:', id);
    setShowDeletePrompt(true);
    setEntries(entries.filter(entry => entry.id !== id));
    
    // Hide the prompt after 3 seconds
    setTimeout(() => {
      setShowDeletePrompt(false);
    }, 3000);
  };

  const handleAddEntry = () => {
    const newEntry: TPSLEntry = {
      id: Date.now().toString(),
      type: 'TP',
      percentage: '',
      sellPercentage: ''
    };
    console.log('Adding new entry');
    setEntries([...entries, newEntry]);
  };

  const handleEntryChange = (id: string, field: keyof TPSLEntry, value: string) => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  const handleTypeToggle = (id: string) => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, type: entry.type === 'TP' ? 'SL' : 'TP' } : entry
    ));
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-xl font-medium">Customize TP & SL</h2>
          <button
            onClick={handleCloseClick}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Entries */}
        <div className="space-y-6 mb-6">
          {entries.map((entry) => (
            <div key={entry.id} className="flex items-center gap-4">
              {/* Type Button - clickable to toggle */}
              <button
                onClick={() => handleTypeToggle(entry.id)}
                className="text-gray-400 text-sm font-medium w-12 hover:text-white transition-colors"
              >
                {entry.type} %
              </button>
              
              {/* First Input */}
              <div className="flex items-center gap-2">
                <Input
                  value={entry.percentage}
                  onChange={(e) => handleEntryChange(entry.id, 'percentage', e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white text-center w-20 h-10"
                  placeholder=""
                />
                <span className="text-gray-400 text-sm">%</span>
              </div>
              
              {/* Sell Label */}
              <div className="text-gray-400 text-sm font-medium">
                Sell %
              </div>
              
              {/* Second Input */}
              <div className="flex items-center gap-2">
                <Input
                  value={entry.sellPercentage}
                  onChange={(e) => handleEntryChange(entry.id, 'sellPercentage', e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white text-center w-20 h-10"
                  placeholder=""
                />
                <span className="text-gray-400 text-sm">%</span>
              </div>
              
              {/* Delete Button */}
              <button
                onClick={() => handleDeleteEntry(entry.id)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Yellow Prompt Message - only shown when delete is clicked */}
        {showDeletePrompt && (
          <div className="mb-6 bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-3">
            <p className="text-yellow-400 text-sm font-medium text-center">
              100% SL required to exit fully
            </p>
          </div>
        )}

        {/* Add Button */}
        <Button
          onClick={handleAddEntry}
          variant="outline"
          className="w-full bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <span className="mr-2">+</span>
          Add
        </Button>
      </div>
    </div>
  );
};

export default TPSLCustomizationPanel;
