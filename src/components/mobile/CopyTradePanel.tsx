import React, { useState } from "react";
import { X, Copy, ChevronDown, HelpCircle, Settings } from "lucide-react";

interface CopyTradePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const CopyTradePanel = ({ isOpen, onClose }: CopyTradePanelProps) => {
  const [activeTab, setActiveTab] = useState("Max Buy Amount");
  const [lightningMode, setLightningMode] = useState(true);
  const [sellMethod, setSellMethod] = useState("Copy Sells");
  const [advancedOpen, setAdvancedOpen] = useState(true);
  const [slippageMode, setSlippageMode] = useState("Auto");
  const [antiMEV, setAntiMEV] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="flex-1 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="w-96 bg-gray-900 h-full overflow-y-auto animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">CopyTrade</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-gray-400 hover:text-white text-sm">
              🎓 Tutorial
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Lightning Mode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-sm">
                Lightning mode, rapid on-chain
              </span>
              <HelpCircle className="w-4 h-4 text-gray-400" />
            </div>
            <button
              onClick={() => setLightningMode(!lightningMode)}
              className={`relative w-10 h-6 rounded-full transition-colors ${
                lightningMode ? "bg-yellow-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  lightningMode ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Wallet Selection */}
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-600 rounded"></div>
                <span className="text-white text-sm">W1 Walle...</span>
                <span className="text-gray-400 text-sm">A4Z7...H6n</span>
                <Copy className="w-3 h-3 text-gray-400" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-600 rounded"></div>
                <span className="text-white text-sm">0</span>
              </div>
            </div>
          </div>

          {/* Copy From */}
          <div>
            <h3 className="text-white text-sm mb-2">Copy From</h3>
            <div className="bg-gray-800 rounded-lg p-3">
              <span className="text-white text-sm font-mono">
                A4Z7CXK9E45KwnmNa87EtTWQm1xQTuhD6UB1G2x77H6n
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="grid grid-cols-3 gap-1 bg-gray-800 rounded-lg p-1">
            {["Max Buy Amount", "Fixed Buy", "Fixed Ratio"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded text-xs font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
                <HelpCircle className="w-3 h-3 inline ml-1" />
              </button>
            ))}
          </div>

          {/* Amount Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-sm">Amount</span>
              <span className="text-gray-400 text-sm">SOL</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 mb-2">
              <div className="text-white">≈$0(0SOL)</div>
            </div>
            <div className="text-right text-gray-400 text-sm">Bal: 0SOL</div>
          </div>

          {/* Sell Method */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white text-sm">Sell Method</span>
              <HelpCircle className="w-4 h-4 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSellMethod("Copy Sells")}
                className={`p-3 rounded-lg border transition-colors ${
                  sellMethod === "Copy Sells"
                    ? "border-green-500 bg-green-500/10 text-green-400"
                    : "border-gray-600 text-gray-400"
                }`}
              >
                Copy Sells
              </button>
              <button
                onClick={() => setSellMethod("Not Sells")}
                className={`p-3 rounded-lg border transition-colors ${
                  sellMethod === "Not Sells"
                    ? "border-green-500 bg-green-500/10 text-green-400"
                    : "border-gray-600 text-gray-400"
                }`}
              >
                Not Sells
              </button>
            </div>
          </div>

          {/* Customize TP & SL */}
          <div>
            <button className="w-full text-left text-white text-sm border-b border-gray-700 pb-2">
              Customize TP & SL
            </button>
          </div>

          {/* Advanced Settings */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">Advanced Settings</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">1</span>
                <span className="text-green-400 text-sm">Open</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <button className="text-gray-400 hover:text-white text-sm flex items-center gap-1">
                🔄 Clear
              </button>
            </div>

            {advancedOpen && (
              <div className="space-y-4">
                {/* Auto Settings */}
                <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🤖 Auto</span>
                    <span className="text-sm">🔧 0.005</span>
                    <span className="text-sm">📴 OFF</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                {/* Slippage */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Slippage</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSlippageMode("Auto")}
                        className={`px-3 py-1 rounded text-xs ${
                          slippageMode === "Auto"
                            ? "bg-gray-700 text-white border border-gray-600"
                            : "text-gray-400"
                        }`}
                      >
                        Auto
                      </button>
                      <button
                        onClick={() => setSlippageMode("Custom")}
                        className={`px-3 py-1 rounded text-xs ${
                          slippageMode === "Custom"
                            ? "bg-gray-700 text-white border border-gray-600"
                            : "text-gray-400"
                        }`}
                      >
                        Custom %
                      </button>
                    </div>
                  </div>
                </div>

                {/* Priority Fee */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">
                      Priority Fee(SOL)
                    </span>
                    <span className="text-gray-400 text-sm">Auto 0.00203</span>
                  </div>
                  <input
                    type="text"
                    defaultValue="0.005"
                    className="w-24 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white text-sm ml-auto block"
                  />
                </div>

                {/* Anti-MEV RPC */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Anti-MEV RPC</span>
                  <button
                    onClick={() => setAntiMEV(!antiMEV)}
                    className={`relative w-10 h-6 rounded-full transition-colors ${
                      antiMEV ? "bg-blue-500" : "bg-gray-600"
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        antiMEV ? "translate-x-5" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Button */}
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors">
            Confirm
          </button>

          {/* Note */}
          <p className="text-gray-500 text-xs">
            Note: Ensure your account has enough balance for auto trading to run
            smoothly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CopyTradePanel;
