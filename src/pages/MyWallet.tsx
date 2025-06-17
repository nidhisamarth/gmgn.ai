import React, { useState } from "react";
import { ChevronDown, RefreshCw, Share, Copy, UserPlus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileHeader from "@/components/mobile/MobileHeader";
import NavigationTabs from "@/components/mobile/NavigationTabs";
import CopyTradePanel from "@/components/mobile/CopyTradePanel";
import SharePanel from "@/components/mobile/SharePanel";

const MyWallet = () => {
  const navigate = useNavigate();
  const [activeTimeFilter, setActiveTimeFilter] = useState("7d");
  const [activeBottomTab, setActiveBottomTab] = useState("Deployed Tokens");
  const [copyTradePanelOpen, setCopyTradePanelOpen] = useState(false);
  const [sharePanelOpen, setSharePanelOpen] = useState(false);

  const timeFilters = ["1d", "7d", "30d", "All"];
  const bottomTabs = ["Recent PnL", "Holdings", "Activity", "Deployed Tokens"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Header */}
      <MobileHeader />

      {/* Navigation Tabs */}
      <NavigationTabs />

      {/* Warning Banner */}
      <div className="bg-yellow-900/50 border-l-4 border-yellow-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">⚠️</span>
          <span className="text-sm text-yellow-200">
            Solana 1.X Tracker are unavailable for upgrades. Will resume soon.
          </span>
        </div>
        <button className="text-gray-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Profile Section */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/assets/c5a715529e9f4a06bce0f217170f8cc0/whatsapp-image-2025-06-16-at-23.22.17-1-82df88?format=webp&width=64"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl font-semibold text-white">
                  AZZFC-H6n
                </span>
                <button className="bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <span>❌</span>
                  <span>Add Twitter</span>
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>
                  A4Z7CXr48wPHeKe7KAbSLy34S8dGMOAqQMNFd5uQqr34yKvnGfni
                </span>
                <Copy className="w-3 h-3 cursor-pointer hover:text-white" />
                <div className="w-3 h-3 bg-gray-600 rounded"></div>
                <div className="w-3 h-3 bg-gray-600 rounded"></div>
                <span className="text-white">●</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                vbLtosbMrNiVTBzYpHaGMOAqQMNFd5uQqt34yKvnGfni@gmail.com ⚠️ ⚠️
              </div>
              <div className="text-xs text-blue-400 mt-1">
                ⏱️ Updated 3m ago
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCopyTradePanelOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              📋 Copy trade
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
              👥 Following
            </button>
            <button
              onClick={() => setSharePanelOpen(true)}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm"
            >
              Share
            </button>
          </div>
        </div>

        {/* Time Filter */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-2">
            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveTimeFilter(filter)}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  activeTimeFilter === filter
                    ? "bg-gray-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* 7D Realized PnL */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm text-gray-400 mb-3">7D Realized PnL</h3>
            <div className="text-3xl font-bold text-white mb-2">0%</div>
            <div className="text-sm text-gray-500 mb-1">$0</div>
            <div className="text-xs text-gray-500">Realized</div>
            <div className="text-xs text-gray-500">Unrealized Profits</div>
          </div>

          {/* Win Rate */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm text-gray-400 mb-3">Win Rate</h3>
            <div className="text-3xl font-bold text-white mb-2">0%</div>
            <div className="text-sm text-gray-500 mb-1">$0 / 1</div>
          </div>

          {/* Analysis */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm text-gray-400 mb-3">Analysis</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">7D PnL</span>
                <span className="text-white">$0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">7D TXs</span>
                <span className="text-white">0/0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">7D Avg Duration</span>
                <span className="text-white">--</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">7D Total Cost</span>
                <span className="text-white">$0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">7D Token Avg Cost</span>
                <span className="text-white">$0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  7D Token Avg Realized Profits
                </span>
                <span className="text-white">$0</span>
              </div>
            </div>
          </div>

          {/* Distribution */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-sm text-gray-400 mb-3">Distribution (%)</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-500">0% (&lt;$0k)</span>
                </div>
                <span className="text-white">0</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-500">$0k - $0.5k</span>
                </div>
                <span className="text-white">0</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-500">$0.5k - $5k</span>
                </div>
                <span className="text-white">0</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-500">$5k - $25k</span>
                </div>
                <span className="text-white">0</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-500">&gt;$25k</span>
                </div>
                <span className="text-white">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phishing Check */}
        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <h3 className="text-sm text-gray-400 mb-4 flex items-center gap-2">
            🛡️ Phishing check
          </h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-400">Resolved: 0 (0%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-yellow-400">
                  Sold bought: 0 (0%)
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-400">Own buy: 0 (0%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-blue-400">
                  Migrated within buy: 0 (0%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tabs */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex gap-8 mb-6">
            {bottomTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveBottomTab(tab)}
                className={`text-sm pb-2 border-b-2 transition-colors ${
                  activeBottomTab === tab
                    ? "text-white border-white"
                    : "text-gray-400 border-transparent hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-6 px-6 py-4 bg-gray-800 text-sm text-gray-400 font-medium border-b border-gray-700">
              <div className="flex items-center gap-2">
                <span>Type</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <span>Token</span>
              <span>Total</span>
              <span>USD</span>
              <span>Amount</span>
              <span>Price In</span>
              <span>Profit</span>
              <span>Age</span>
            </div>

            {/* Empty State - matches the gray dotted placeholder in the image */}
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-gray-600 text-4xl mb-4">• • • • • •</div>
            </div>
          </div>
        </div>
      </div>

      {/* CopyTrade Panel */}
      <CopyTradePanel
        isOpen={copyTradePanelOpen}
        onClose={() => setCopyTradePanelOpen(false)}
      />

      {/* Share Panel */}
      <SharePanel
        isOpen={sharePanelOpen}
        onClose={() => setSharePanelOpen(false)}
      />
    </div>
  );
};

export default MyWallet;
