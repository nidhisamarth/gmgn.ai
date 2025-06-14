
import React, { useState } from 'react';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface TrendSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrendSettingsPanel = ({ isOpen, onClose }: TrendSettingsPanelProps) => {
  const [selectedPreset, setSelectedPreset] = useState('P1');
  const [slippageMode, setSlippageMode] = useState('auto');
  const [customSlippage, setCustomSlippage] = useState('');
  const [priorityFeeMode, setPriorityFeeMode] = useState('auto');
  const [customPriorityFee, setCustomPriorityFee] = useState('0.005');
  const [antiMevEnabled, setAntiMevEnabled] = useState(true);

  console.log('TrendSettingsPanel render - isOpen:', isOpen);
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log('Backdrop clicked - closing trend settings panel');
      onClose();
    }
  };

  const handleCloseClick = () => {
    console.log('Close button clicked');
    onClose();
  };

  const handleConfirm = () => {
    console.log('Confirm clicked - applying trend settings');
    onClose();
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-lg font-semibold">Quick trend Settings</h2>
          <button
            onClick={handleCloseClick}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Buy/Sell Settings Tabs */}
        <Tabs defaultValue="buy" className="mb-6">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger 
              value="buy" 
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-gray-300"
            >
              BuySettings
            </TabsTrigger>
            <TabsTrigger 
              value="sell"
              className="data-[state=active]:bg-gray-600 data-[state=active]:text-white text-gray-500"
            >
              SellSettings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy" className="mt-4">
            {/* Presets */}
            <div className="mb-6">
              <h3 className="text-white text-sm font-medium mb-3">Presets</h3>
              <div className="flex gap-2">
                {['P1', 'P2', 'P3'].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setSelectedPreset(preset)}
                    className={`flex-1 py-2 px-4 rounded border text-sm font-medium transition-colors ${
                      selectedPreset === preset
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Slippage Limit */}
            <div className="mb-6">
              <h3 className="text-white text-sm font-medium mb-3">Slippage limit</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setSlippageMode('auto')}
                  className={`px-4 py-2 rounded border text-sm transition-colors ${
                    slippageMode === 'auto'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Auto 20.0%
                </button>
                <div className="flex-1 flex items-center gap-2">
                  <Input
                    value={customSlippage}
                    onChange={(e) => {
                      setCustomSlippage(e.target.value);
                      setSlippageMode('custom');
                    }}
                    placeholder="Custom"
                    className="bg-gray-800 border-gray-700 text-white text-sm"
                  />
                  <span className="text-gray-400 text-sm">%</span>
                </div>
              </div>
            </div>

            {/* Priority Fee */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-white text-sm font-medium">Priority Fee (Max: 2 SOL)</h3>
                <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">i</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPriorityFeeMode('auto')}
                  className={`px-4 py-2 rounded border text-sm transition-colors ${
                    priorityFeeMode === 'auto'
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  Auto 0.00133
                </button>
                <div className="flex-1">
                  <Input
                    value={customPriorityFee}
                    onChange={(e) => {
                      setCustomPriorityFee(e.target.value);
                      setPriorityFeeMode('custom');
                    }}
                    className="bg-gray-800 border-gray-700 text-white text-sm w-full"
                  />
                </div>
              </div>
            </div>

            {/* Anti-MEV RPC */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <span className="text-white text-sm font-medium">Anti-MEV RPC</span>
                <Switch
                  checked={antiMevEnabled}
                  onCheckedChange={setAntiMevEnabled}
                  className="data-[state=checked]:bg-white"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sell" className="mt-4">
            <div className="text-gray-400 text-center py-8">
              Sell settings configuration coming soon...
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleCancel}
            variant="outline"
            className="flex-1 bg-gray-600 border-gray-600 text-white hover:bg-gray-700"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            className="flex-1 bg-white text-black hover:bg-gray-200"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrendSettingsPanel;
