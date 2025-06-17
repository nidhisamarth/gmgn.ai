import React, { useState } from "react";
import { X, ChevronDown, Info, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CopyTradeModal = ({ isOpen, onClose }: CopyTradeModalProps) => {
  const [buyMethod, setBuyMethod] = useState<
    "maxbuy" | "fixedbuy" | "fixedratio"
  >("fixedratio");
  const [sellMethod, setSellMethod] = useState<"copysells" | "notsells">(
    "copysells",
  );
  const [fixedRatio, setFixedRatio] = useState("");
  const [maxBuyAmount, setMaxBuyAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(true);
  const [slippageMode, setSlippageMode] = useState<"auto" | "custom">("auto");
  const [priorityFee, setPriorityFee] = useState("0.005");
  const [antiMEV, setAntiMEV] = useState(true);
  const [showMaxBuyInfo, setShowMaxBuyInfo] = useState(false);
  const [showFixedBuyInfo, setShowFixedBuyInfo] = useState(false);
  const [showFixedRatioInfo, setShowFixedRatioInfo] = useState(false);

  // Advanced settings states for Fixed Ratio mode
  const [marketCapMin, setMarketCapMin] = useState("");
  const [marketCapMax, setMarketCapMax] = useState("");
  const [liqMin, setLiqMin] = useState("");
  const [liqMax, setLiqMax] = useState("");
  const [copyBuyMin, setCopyBuyMin] = useState("");
  const [copyBuyMax, setCopyBuyMax] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [minBurnt, setMinBurnt] = useState("");
  const [increaseTimes, setIncreaseTimes] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    "pump",
    "moonshot",
  ]);
  const [tokenBlacklist, setTokenBlacklist] = useState<string[]>([]);
  const [newTokenCA, setNewTokenCA] = useState("");
  const [showCopyBuyInfo, setShowCopyBuyInfo] = useState(false);
  const [showIncreaseTimesInfo, setShowIncreaseTimesInfo] = useState(false);

  // TP & SL states
  const [showTPSLModal, setShowTPSLModal] = useState(false);
  const [tpslMode, setTpslMode] = useState<"single" | "batches">("single");
  const [takeProfitRatio, setTakeProfitRatio] = useState("");
  const [stopLossRatio, setStopLossRatio] = useState("");
  const [trailingStopLoss, setTrailingStopLoss] = useState(false);
  const [showTPSLInfo, setShowTPSLInfo] = useState(false);

  // Lightning mode info state
  const [showLightningInfo, setShowLightningInfo] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900">
      <div className="h-full flex flex-col text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
          <h1 className="text-xl font-semibold text-white">CopyTrade</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-gray-300 text-sm">
              🎓 Tutorial
            </button>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Lightning Mode */}
          <div className="p-4 border-b border-gray-700 relative">
            {/* Lightning Mode Info Popup */}
            {showLightningInfo && (
              <>
                <div
                  className="fixed inset-0 z-10 bg-black/20"
                  onClick={() => setShowLightningInfo(false)}
                />
                <div className="absolute top-16 left-0 right-0 z-20 bg-gray-800 border border-gray-600 rounded-lg p-4 mx-2 shadow-lg">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    In lightning mode, the system will copy trades at a faster
                    speed (2 seconds faster). However, this mode is not
                    completely stable, may experience rollbacks or repeated
                    submissions or sold txs faster than buys.
                  </p>
                </div>
              </>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-medium">
                  Lightning mode,{" "}
                </span>
                <span className="text-pink-400 font-medium">
                  rapid on-chain
                </span>
                <span
                  onClick={() => setShowLightningInfo(!showLightningInfo)}
                  className="cursor-pointer"
                >
                  <Info size={16} className="text-gray-400" />
                </span>
              </div>
              <div className="bg-yellow-500 rounded-full p-2 flex items-center justify-center">
                <span className="text-black text-sm font-bold">⚡</span>
              </div>
            </div>
          </div>

          {/* Wallet Selector */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <span className="text-lg">📁</span>
                <span className="text-white font-medium">W1 Wallet...</span>
                <span className="text-gray-400 text-sm">A4Z7...H6n</span>
                <Copy size={16} className="text-gray-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-lg">≡</span>
                <span className="text-white font-bold text-lg">0</span>
              </div>
            </div>
          </div>

          {/* Copy From */}
          <div className="p-4">
            <h2 className="text-white text-lg font-medium mb-4">Copy From</h2>
            <input
              type="text"
              placeholder="Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Trading Configuration */}
          <div className="p-4">
            {/* Buy Method Toggle */}
            <div className="relative">
              {/* Max Buy Amount Info Popup */}
              {showMaxBuyInfo && (
                <>
                  <div
                    className="fixed inset-0 z-10 bg-black/20"
                    onClick={() => setShowMaxBuyInfo(false)}
                  />
                  <div className="absolute top-16 left-0 right-0 z-20 bg-gray-800 border border-gray-600 rounded-lg p-4 mx-2 shadow-lg">
                    <h3 className="text-white font-medium mb-2">
                      Max Buy Amount
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      If the target's buy amount exceeds the max, copy buy at
                      the max. Otherwise, follow the target's buy amount.
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      The max buy is 1 SOL. When target address buys 0.5 SOL,
                      the user buy 0.5 SOL. If the target address buys 2 SOL,
                      the user buy 1 SOL
                    </p>
                  </div>
                </>
              )}

              {/* Fixed Buy Info Popup */}
              {showFixedBuyInfo && (
                <>
                  <div
                    className="fixed inset-0 z-10 bg-black/20"
                    onClick={() => setShowFixedBuyInfo(false)}
                  />
                  <div className="absolute top-16 left-0 right-0 z-20 bg-gray-800 border border-gray-600 rounded-lg p-4 mx-2 shadow-lg">
                    <h3 className="text-white font-medium mb-2">
                      Fixed Buy Amount
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      No matter how much the target address buys, copy buy order
                      will be made according to the fixed amount.
                    </p>
                  </div>
                </>
              )}

              {/* Fixed Ratio Info Popup */}
              {showFixedRatioInfo && (
                <>
                  <div
                    className="fixed inset-0 z-10 bg-black/20"
                    onClick={() => setShowFixedRatioInfo(false)}
                  />
                  <div
                    className="absolute top-16 left-0 right-0 z-20 bg-gray-800 border border-gray-600 rounded-lg p-4 mx-2 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-white font-medium mb-2">Fixed Ratio</h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      Buy at a fixed ratio. 120% means 1.2 times the copied
                      order. It won't exceed your set Max Buy Amount.
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      E.g. Enter 200%. Max Buy Amount is 0.5 SOL. If copied
                      wallet buys 0.1 SOL, you buy 0.2 SOL. If it buys 0.3 SOL,
                      you buy 0.5 SOL.
                    </p>
                  </div>
                </>
              )}

              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setBuyMethod("maxbuy")}
                  className={`flex-1 py-2 px-3 text-sm rounded ${
                    buyMethod === "maxbuy"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    Max Buy Amount
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowMaxBuyInfo(!showMaxBuyInfo);
                      }}
                      className="relative cursor-pointer"
                    >
                      <Info size={14} />
                    </span>
                  </div>
                </button>
                <button
                  onClick={() => setBuyMethod("fixedbuy")}
                  className={`flex-1 py-2 px-3 text-sm rounded ${
                    buyMethod === "fixedbuy"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    Fixed Buy
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowFixedBuyInfo(!showFixedBuyInfo);
                      }}
                      className="relative cursor-pointer"
                    >
                      <Info size={14} />
                    </span>
                  </div>
                </button>
                <button
                  onClick={() => setBuyMethod("fixedratio")}
                  className={`flex-1 py-2 px-3 text-sm rounded ${
                    buyMethod === "fixedratio"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1">
                    Fixed Ratio
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowFixedRatioInfo(!showFixedRatioInfo);
                      }}
                      className="relative cursor-pointer"
                    >
                      <Info size={14} />
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Fixed Ratio Input */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Fixed Ratio"
                value={fixedRatio}
                onChange={(e) => setFixedRatio(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 pr-8"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                %
              </span>
            </div>

            {/* Max Buy Amount Input */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Max Buy Amount"
                value={maxBuyAmount}
                onChange={(e) => setMaxBuyAmount(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 pr-12"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                SOL
              </span>
            </div>

            {/* Balance Display */}
            <div className="flex justify-between text-sm text-gray-400 mb-6">
              <span>≈$0(0SOL)</span>
              <span>Bal: 0SOL</span>
            </div>

            {/* Sell Method */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white font-medium">Sell Method</span>
                <Info size={16} className="text-gray-400" />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSellMethod("copysells")}
                  className={`flex-1 py-3 px-4 text-sm rounded-lg border-2 transition-colors ${
                    sellMethod === "copysells"
                      ? "border-green-500 text-white bg-green-500/10"
                      : "border-gray-600 text-gray-400 bg-gray-800"
                  }`}
                >
                  Copy Sells
                </button>
                <button
                  onClick={() => setSellMethod("notsells")}
                  className={`flex-1 py-3 px-4 text-sm rounded-lg border-2 transition-colors ${
                    sellMethod === "notsells"
                      ? "border-green-500 text-white bg-green-500/10"
                      : "border-gray-600 text-gray-400 bg-gray-800"
                  }`}
                >
                  Not Sells
                </button>
              </div>
            </div>

            {/* Customize TP & SL */}
            <button
              onClick={() => setShowTPSLModal(true)}
              className="w-full py-3 px-4 text-gray-400 border border-gray-600 rounded-lg mb-6 hover:bg-gray-800 transition-colors"
            >
              Customize TP & SL
            </button>

            {/* Advanced Settings */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">
                    Advanced Settings
                  </span>
                  <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded">
                    1
                  </span>
                  <button
                    onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                    className="flex items-center gap-1 text-gray-400"
                  >
                    <span className="text-sm">
                      {isAdvancedOpen ? "Close" : "Open"}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${isAdvancedOpen ? "" : "rotate-180"}`}
                    />
                  </button>
                </div>
                <button className="text-gray-400 text-sm">🔄 Clear</button>
              </div>

              {isAdvancedOpen && buyMethod === "fixedratio" && (
                <div className="space-y-4">
                  {/* Copy Buy Amount Info Popup */}
                  {showCopyBuyInfo && (
                    <>
                      <div
                        className="fixed inset-0 z-10 bg-black/20"
                        onClick={() => setShowCopyBuyInfo(false)}
                      />
                      <div className="absolute top-0 left-0 right-0 z-20 bg-gray-800 border border-gray-600 rounded-lg p-4 mx-2 shadow-lg">
                        <h3 className="text-white font-medium mb-2">
                          Copy Buy Amount
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Set minimum and maximum amounts for copy trades to
                          filter which trades to follow.
                        </p>
                      </div>
                    </>
                  )}

                  {/* Increase Times Info Popup */}
                  {showIncreaseTimesInfo && (
                    <>
                      <div
                        className="fixed inset-0 z-10 bg-black/20"
                        onClick={() => setShowIncreaseTimesInfo(false)}
                      />
                      <div className="absolute top-0 left-0 right-0 z-20 bg-gray-800 border border-gray-600 rounded-lg p-4 mx-2 shadow-lg">
                        <h3 className="text-white font-medium mb-2">
                          Increase Times
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Filter tokens based on their price increase
                          performance over time.
                        </p>
                      </div>
                    </>
                  )}

                  {/* Market Cap */}
                  <div className="space-y-2">
                    <span className="text-white text-sm">Market Cap</span>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Min"
                          value={marketCapMin}
                          onChange={(e) => setMarketCapMin(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          K
                        </span>
                      </div>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Max"
                          value={marketCapMax}
                          onChange={(e) => setMarketCapMax(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          K
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Liquidity */}
                  <div className="space-y-2">
                    <span className="text-white text-sm">Liq</span>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Min"
                          value={liqMin}
                          onChange={(e) => setLiqMin(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          K
                        </span>
                      </div>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Max"
                          value={liqMax}
                          onChange={(e) => setLiqMax(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          K
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Copy Buy Amount */}
                  <div className="space-y-2 relative">
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm">
                        Copy Buy Amount
                      </span>
                      <span
                        onClick={() => setShowCopyBuyInfo(!showCopyBuyInfo)}
                        className="cursor-pointer"
                      >
                        <Info size={14} className="text-gray-400" />
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Min"
                          value={copyBuyMin}
                          onChange={(e) => setCopyBuyMin(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-10"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          SOL
                        </span>
                      </div>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Max"
                          value={copyBuyMax}
                          onChange={(e) => setCopyBuyMax(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-10"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          SOL
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Age */}
                  <div className="space-y-2">
                    <span className="text-white text-sm">Age</span>
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Min"
                          value={ageMin}
                          onChange={(e) => setAgeMin(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          m
                        </span>
                      </div>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Max"
                          value={ageMax}
                          onChange={(e) => setAgeMax(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          m
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Min Burnt */}
                  <div className="space-y-2">
                    <span className="text-white text-sm">Min Burnt</span>
                    <div className="relative">
                      <input
                        type="text"
                        value={minBurnt}
                        onChange={(e) => setMinBurnt(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                      />
                      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                        %
                      </span>
                    </div>
                  </div>

                  {/* Increase Times */}
                  <div className="space-y-2 relative">
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm">Increase Times</span>
                      <span
                        onClick={() =>
                          setShowIncreaseTimesInfo(!showIncreaseTimesInfo)
                        }
                        className="cursor-pointer"
                      >
                        <Info size={14} className="text-gray-400" />
                      </span>
                    </div>
                    <input
                      type="text"
                      value={increaseTimes}
                      onChange={(e) => setIncreaseTimes(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm"
                    />
                  </div>

                  {/* Platform */}
                  <div className="space-y-2">
                    <span className="text-white text-sm">Platform</span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          if (selectedPlatforms.includes("pump")) {
                            setSelectedPlatforms(
                              selectedPlatforms.filter((p) => p !== "pump"),
                            );
                          } else {
                            setSelectedPlatforms([
                              ...selectedPlatforms,
                              "pump",
                            ]);
                          }
                        }}
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-colors ${
                          selectedPlatforms.includes("pump")
                            ? "border-green-500 text-white bg-green-500/10"
                            : "border-gray-600 text-gray-400 bg-gray-800"
                        }`}
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm">Pump</span>
                      </button>
                      <button
                        onClick={() => {
                          if (selectedPlatforms.includes("raydium")) {
                            setSelectedPlatforms(
                              selectedPlatforms.filter((p) => p !== "raydium"),
                            );
                          } else {
                            setSelectedPlatforms([
                              ...selectedPlatforms,
                              "raydium",
                            ]);
                          }
                        }}
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-colors ${
                          selectedPlatforms.includes("raydium")
                            ? "border-green-500 text-white bg-green-500/10"
                            : "border-gray-600 text-gray-400 bg-gray-800"
                        }`}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-sm">Raydium</span>
                      </button>
                      <button
                        onClick={() => {
                          if (selectedPlatforms.includes("moonshot")) {
                            setSelectedPlatforms(
                              selectedPlatforms.filter((p) => p !== "moonshot"),
                            );
                          } else {
                            setSelectedPlatforms([
                              ...selectedPlatforms,
                              "moonshot",
                            ]);
                          }
                        }}
                        className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-colors ${
                          selectedPlatforms.includes("moonshot")
                            ? "border-green-500 text-white bg-green-500/10"
                            : "border-gray-600 text-gray-400 bg-gray-800"
                        }`}
                      >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="text-sm">Moonshot</span>
                      </button>
                      <button
                        onClick={() => {
                          if (selectedPlatforms.includes("others")) {
                            setSelectedPlatforms(
                              selectedPlatforms.filter((p) => p !== "others"),
                            );
                          } else {
                            setSelectedPlatforms([
                              ...selectedPlatforms,
                              "others",
                            ]);
                          }
                        }}
                        className={`flex items-center justify-center py-3 px-4 rounded-lg border-2 transition-colors ${
                          selectedPlatforms.includes("others")
                            ? "border-green-500 text-white bg-green-500/10"
                            : "border-gray-600 text-gray-400 bg-gray-800"
                        }`}
                      >
                        <span className="text-sm">Others</span>
                      </button>
                    </div>
                  </div>

                  {/* Token Blacklist */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm">
                        Token Blacklist
                      </span>
                      <Info size={14} className="text-gray-400" />
                    </div>
                    {tokenBlacklist.map((token, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-white text-sm">{index + 1}.</span>
                        <input
                          type="text"
                          value={token}
                          readOnly
                          className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm"
                        />
                        <button
                          onClick={() =>
                            setTokenBlacklist(
                              tokenBlacklist.filter((_, i) => i !== index),
                            )
                          }
                          className="text-gray-400 hover:text-white"
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm">
                        {tokenBlacklist.length + 1}.
                      </span>
                      <input
                        type="text"
                        placeholder="Please enter Token CA"
                        value={newTokenCA}
                        onChange={(e) => setNewTokenCA(e.target.value)}
                        className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm"
                      />
                      <button
                        onClick={() =>
                          setTokenBlacklist(
                            tokenBlacklist.filter(
                              (_, i) => i !== tokenBlacklist.length,
                            ),
                          )
                        }
                        className="text-gray-400 hover:text-white"
                      >
                        🗑️
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        if (newTokenCA.trim()) {
                          setTokenBlacklist([
                            ...tokenBlacklist,
                            newTokenCA.trim(),
                          ]);
                          setNewTokenCA("");
                        }
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2 text-white border border-gray-600 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-lg">+</span>
                      <span className="text-sm">Add</span>
                    </button>
                  </div>

                  {/* Auto Settings */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🔁 Auto</span>
                      <span className="text-sm">🏃 0.005</span>
                      <span className="text-sm">📊 OFF</span>
                    </div>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>

                  {/* Slippage */}
                  <div className="space-y-2">
                    <span className="text-gray-400 text-sm">Slippage</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSlippageMode("auto")}
                        className={`px-4 py-2 rounded-lg border text-sm ${
                          slippageMode === "auto"
                            ? "border-white text-white bg-gray-700"
                            : "border-gray-600 text-gray-400"
                        }`}
                      >
                        Auto
                      </button>
                      <div className="flex items-center">
                        <button
                          onClick={() => setSlippageMode("custom")}
                          className={`px-4 py-2 rounded-lg border text-sm ${
                            slippageMode === "custom"
                              ? "border-white text-white bg-gray-700"
                              : "border-gray-600 text-gray-400"
                          }`}
                        >
                          Custom
                        </button>
                        <span className="text-gray-400 ml-2">%</span>
                      </div>
                    </div>
                  </div>

                  {/* Priority Fee */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">
                        Priority Fee(SOL)
                      </span>
                      <Info size={14} className="text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        Auto 0.00319
                      </span>
                      <input
                        type="text"
                        value={priorityFee}
                        onChange={(e) => setPriorityFee(e.target.value)}
                        className="bg-gray-800 border border-gray-600 rounded px-3 py-1 text-white text-sm w-20"
                      />
                    </div>
                  </div>

                  {/* Anti-MEV RPC */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Anti-MEV RPC</span>
                    <button
                      onClick={() => setAntiMEV(!antiMEV)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        antiMEV ? "bg-white" : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full transition-transform ${
                          antiMEV
                            ? "translate-x-6 bg-black"
                            : "translate-x-1 bg-white"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}

              {isAdvancedOpen && buyMethod !== "fixedratio" && (
                <div className="space-y-4">
                  {/* Auto Settings */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🔁 Auto</span>
                      <span className="text-sm">🏃 0.005</span>
                      <span className="text-sm">📊 OFF</span>
                    </div>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>

                  {/* Slippage */}
                  <div className="space-y-2">
                    <span className="text-gray-400 text-sm">Slippage</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSlippageMode("auto")}
                        className={`px-4 py-2 rounded-lg border text-sm ${
                          slippageMode === "auto"
                            ? "border-white text-white bg-gray-700"
                            : "border-gray-600 text-gray-400"
                        }`}
                      >
                        Auto
                      </button>
                      <div className="flex items-center">
                        <button
                          onClick={() => setSlippageMode("custom")}
                          className={`px-4 py-2 rounded-lg border text-sm ${
                            slippageMode === "custom"
                              ? "border-white text-white bg-gray-700"
                              : "border-gray-600 text-gray-400"
                          }`}
                        >
                          Custom
                        </button>
                        <span className="text-gray-400 ml-2">%</span>
                      </div>
                    </div>
                  </div>

                  {/* Priority Fee */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">
                        Priority Fee(SOL)
                      </span>
                      <Info size={14} className="text-gray-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        Auto 0.00292
                      </span>
                      <input
                        type="text"
                        value={priorityFee}
                        onChange={(e) => setPriorityFee(e.target.value)}
                        className="bg-gray-800 border border-gray-600 rounded px-3 py-1 text-white text-sm w-20"
                      />
                    </div>
                  </div>

                  {/* Anti-MEV RPC */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Anti-MEV RPC</span>
                    <button
                      onClick={() => setAntiMEV(!antiMEV)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        antiMEV ? "bg-white" : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full transition-transform ${
                          antiMEV
                            ? "translate-x-6 bg-black"
                            : "translate-x-1 bg-white"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Button */}
            <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-lg font-medium mb-4">
              Confirm
            </Button>

            {/* Note */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Note: Ensure your account has enough balance for auto trading to
              run smoothly.
            </p>
          </div>
        </div>
      </div>

      {/* TP & SL Modal Overlay */}
      {showTPSLModal && (
        <div className="fixed inset-0 z-60 bg-gray-900">
          <div className="h-full flex flex-col text-white">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* TP&SL Info Popup */}
              {showTPSLInfo && (
                <>
                  <div
                    className="fixed inset-0 z-10 bg-black/20"
                    onClick={() => setShowTPSLInfo(false)}
                  />
                  <div className="absolute top-20 left-0 right-0 z-20 bg-gray-800 border border-gray-600 rounded-lg p-4 mx-2 shadow-lg">
                    <h3 className="text-white font-medium mb-2">
                      TP&SL in batches
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Execute take profit and stop loss orders in multiple
                      batches instead of a single transaction for better risk
                      management.
                    </p>
                  </div>
                </>
              )}

              {/* Header Button */}
              <button
                onClick={() => setShowTPSLModal(false)}
                className="w-full py-3 px-4 text-white border-2 border-green-500 bg-green-500/10 rounded-lg mb-4 font-medium"
              >
                Customize TP & SL
              </button>

              {/* Mode Toggle */}
              <div className="flex mb-6">
                <button
                  onClick={() => setTpslMode("single")}
                  className={`flex-1 py-3 px-4 text-sm font-medium rounded-l-lg ${
                    tpslMode === "single"
                      ? "bg-gray-600 text-white"
                      : "bg-gray-800 text-gray-400 border border-gray-600"
                  }`}
                >
                  Single
                </button>
                <button
                  onClick={() => setTpslMode("batches")}
                  className={`flex-1 py-3 px-4 text-sm font-medium rounded-r-lg flex items-center justify-center gap-2 ${
                    tpslMode === "batches"
                      ? "bg-gray-600 text-white"
                      : "bg-gray-800 text-gray-400 border border-gray-600"
                  }`}
                >
                  TP&SL in batches
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTPSLInfo(!showTPSLInfo);
                    }}
                    className="cursor-pointer"
                  >
                    <Info size={14} />
                  </span>
                </button>
              </div>

              {/* Take Profit Section */}
              <div className="mb-6">
                <h3 className="text-white text-lg font-medium mb-4">TP</h3>
                <div className="relative mb-3">
                  <input
                    type="text"
                    placeholder="Please enter the Take Profit ratio"
                    value={takeProfitRatio}
                    onChange={(e) => setTakeProfitRatio(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 pr-8"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    %
                  </span>
                </div>
                <p className="text-gray-400 text-sm">Estimated Profit --</p>
              </div>

              {/* Stop Loss Section */}
              <div className="mb-6">
                <h3 className="text-white text-lg font-medium mb-4">SL</h3>
                <div className="relative mb-3">
                  <input
                    type="text"
                    placeholder="Please enter the Stop Loss ratio"
                    value={stopLossRatio}
                    onChange={(e) => setStopLossRatio(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 pr-8"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    %
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">Estimated Loss --</p>

                {/* Trailing Stop Loss */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm">
                      Trailing Stop Loss
                    </span>
                    <Info size={14} className="text-gray-400" />
                  </div>
                  <button
                    onClick={() => setTrailingStopLoss(!trailingStopLoss)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      trailingStopLoss ? "bg-white" : "bg-gray-600"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full transition-transform ${
                        trailingStopLoss
                          ? "translate-x-6 bg-black"
                          : "translate-x-1 bg-white"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Advanced Settings - Reuse existing component */}
              {buyMethod === "fixedratio" && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">
                        Advanced Settings
                      </span>
                      <span className="text-green-400 text-sm">Close</span>
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>
                    <button className="text-gray-400 text-sm">🔄 Clear</button>
                  </div>

                  <div className="space-y-4">
                    {/* Copy Buy Amount Info Popup */}
                    {showCopyBuyInfo && (
                      <>
                        <div
                          className="fixed inset-0 z-10 bg-black/20"
                          onClick={() => setShowCopyBuyInfo(false)}
                        />
                        <div className="absolute top-0 left-0 right-0 z-20 bg-gray-800 border border-gray-600 rounded-lg p-4 mx-2 shadow-lg">
                          <h3 className="text-white font-medium mb-2">
                            Copy Buy Amount
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Set minimum and maximum amounts for copy trades to
                            filter which trades to follow.
                          </p>
                        </div>
                      </>
                    )}

                    {/* Increase Times Info Popup */}
                    {showIncreaseTimesInfo && (
                      <>
                        <div
                          className="fixed inset-0 z-10 bg-black/20"
                          onClick={() => setShowIncreaseTimesInfo(false)}
                        />
                        <div className="absolute top-0 left-0 right-0 z-20 bg-gray-800 border border-gray-600 rounded-lg p-4 mx-2 shadow-lg">
                          <h3 className="text-white font-medium mb-2">
                            Increase Times
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Filter tokens based on their price increase
                            performance over time.
                          </p>
                        </div>
                      </>
                    )}

                    {/* Market Cap */}
                    <div className="space-y-2">
                      <span className="text-white text-sm">Market Cap</span>
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            placeholder="Min"
                            value={marketCapMin}
                            onChange={(e) => setMarketCapMin(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                            K
                          </span>
                        </div>
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            placeholder="Max"
                            value={marketCapMax}
                            onChange={(e) => setMarketCapMax(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                            K
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Liquidity */}
                    <div className="space-y-2">
                      <span className="text-white text-sm">Liq</span>
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            placeholder="Min"
                            value={liqMin}
                            onChange={(e) => setLiqMin(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                            K
                          </span>
                        </div>
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            placeholder="Max"
                            value={liqMax}
                            onChange={(e) => setLiqMax(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                            K
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Copy Buy Amount */}
                    <div className="space-y-2 relative">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm">
                          Copy Buy Amount
                        </span>
                        <span
                          onClick={() => setShowCopyBuyInfo(!showCopyBuyInfo)}
                          className="cursor-pointer"
                        >
                          <Info size={14} className="text-gray-400" />
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            placeholder="Min"
                            value={copyBuyMin}
                            onChange={(e) => setCopyBuyMin(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-10"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                            SOL
                          </span>
                        </div>
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            placeholder="Max"
                            value={copyBuyMax}
                            onChange={(e) => setCopyBuyMax(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-10"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                            SOL
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Age */}
                    <div className="space-y-2">
                      <span className="text-white text-sm">Age</span>
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            placeholder="Min"
                            value={ageMin}
                            onChange={(e) => setAgeMin(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                            m
                          </span>
                        </div>
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            placeholder="Max"
                            value={ageMax}
                            onChange={(e) => setAgeMax(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                            m
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Min Burnt */}
                    <div className="space-y-2">
                      <span className="text-white text-sm">Min Burnt</span>
                      <div className="relative">
                        <input
                          type="text"
                          value={minBurnt}
                          onChange={(e) => setMinBurnt(e.target.value)}
                          className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm pr-6"
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          %
                        </span>
                      </div>
                    </div>

                    {/* Increase Times */}
                    <div className="space-y-2 relative">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm">
                          Increase Times
                        </span>
                        <span
                          onClick={() =>
                            setShowIncreaseTimesInfo(!showIncreaseTimesInfo)
                          }
                          className="cursor-pointer"
                        >
                          <Info size={14} className="text-gray-400" />
                        </span>
                      </div>
                      <input
                        type="text"
                        value={increaseTimes}
                        onChange={(e) => setIncreaseTimes(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm"
                      />
                    </div>

                    {/* Platform */}
                    <div className="space-y-2">
                      <span className="text-white text-sm">Platform</span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            if (selectedPlatforms.includes("pump")) {
                              setSelectedPlatforms(
                                selectedPlatforms.filter((p) => p !== "pump"),
                              );
                            } else {
                              setSelectedPlatforms([
                                ...selectedPlatforms,
                                "pump",
                              ]);
                            }
                          }}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-colors ${
                            selectedPlatforms.includes("pump")
                              ? "border-green-500 text-white bg-green-500/10"
                              : "border-gray-600 text-gray-400 bg-gray-800"
                          }`}
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-sm">Pump</span>
                        </button>
                        <button
                          onClick={() => {
                            if (selectedPlatforms.includes("raydium")) {
                              setSelectedPlatforms(
                                selectedPlatforms.filter(
                                  (p) => p !== "raydium",
                                ),
                              );
                            } else {
                              setSelectedPlatforms([
                                ...selectedPlatforms,
                                "raydium",
                              ]);
                            }
                          }}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-colors ${
                            selectedPlatforms.includes("raydium")
                              ? "border-green-500 text-white bg-green-500/10"
                              : "border-gray-600 text-gray-400 bg-gray-800"
                          }`}
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-sm">Raydium</span>
                        </button>
                        <button
                          onClick={() => {
                            if (selectedPlatforms.includes("moonshot")) {
                              setSelectedPlatforms(
                                selectedPlatforms.filter(
                                  (p) => p !== "moonshot",
                                ),
                              );
                            } else {
                              setSelectedPlatforms([
                                ...selectedPlatforms,
                                "moonshot",
                              ]);
                            }
                          }}
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-colors ${
                            selectedPlatforms.includes("moonshot")
                              ? "border-green-500 text-white bg-green-500/10"
                              : "border-gray-600 text-gray-400 bg-gray-800"
                          }`}
                        >
                          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                          <span className="text-sm">Moonshot</span>
                        </button>
                        <button
                          onClick={() => {
                            if (selectedPlatforms.includes("others")) {
                              setSelectedPlatforms(
                                selectedPlatforms.filter((p) => p !== "others"),
                              );
                            } else {
                              setSelectedPlatforms([
                                ...selectedPlatforms,
                                "others",
                              ]);
                            }
                          }}
                          className={`flex items-center justify-center py-3 px-4 rounded-lg border-2 transition-colors ${
                            selectedPlatforms.includes("others")
                              ? "border-green-500 text-white bg-green-500/10"
                              : "border-gray-600 text-gray-400 bg-gray-800"
                          }`}
                        >
                          <span className="text-sm">Others</span>
                        </button>
                      </div>
                    </div>

                    {/* Token Blacklist */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm">
                          Token Blacklist
                        </span>
                        <Info size={14} className="text-gray-400" />
                      </div>
                      {tokenBlacklist.map((token, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-white text-sm">
                            {index + 1}.
                          </span>
                          <input
                            type="text"
                            value={token}
                            readOnly
                            className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-sm"
                          />
                          <button
                            onClick={() =>
                              setTokenBlacklist(
                                tokenBlacklist.filter((_, i) => i !== index),
                              )
                            }
                            className="text-gray-400 hover:text-white"
                          >
                            🗑️
                          </button>
                        </div>
                      ))}
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm">
                          {tokenBlacklist.length + 1}.
                        </span>
                        <input
                          type="text"
                          placeholder="Please enter Token CA"
                          value={newTokenCA}
                          onChange={(e) => setNewTokenCA(e.target.value)}
                          className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 text-sm"
                        />
                        <button
                          onClick={() =>
                            setTokenBlacklist(
                              tokenBlacklist.filter(
                                (_, i) => i !== tokenBlacklist.length,
                              ),
                            )
                          }
                          className="text-gray-400 hover:text-white"
                        >
                          🗑️
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          if (newTokenCA.trim()) {
                            setTokenBlacklist([
                              ...tokenBlacklist,
                              newTokenCA.trim(),
                            ]);
                            setNewTokenCA("");
                          }
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2 text-white border border-gray-600 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        <span className="text-lg">+</span>
                        <span className="text-sm">Add</span>
                      </button>
                    </div>

                    {/* Auto Settings */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🔁 Auto</span>
                        <span className="text-sm">🏃 0.005</span>
                        <span className="text-sm">📊 OFF</span>
                      </div>
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>

                    {/* Slippage */}
                    <div className="space-y-2">
                      <span className="text-gray-400 text-sm">Slippage</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSlippageMode("auto")}
                          className={`px-4 py-2 rounded-lg border text-sm ${
                            slippageMode === "auto"
                              ? "border-white text-white bg-gray-700"
                              : "border-gray-600 text-gray-400"
                          }`}
                        >
                          Auto
                        </button>
                        <div className="flex items-center">
                          <button
                            onClick={() => setSlippageMode("custom")}
                            className={`px-4 py-2 rounded-lg border text-sm ${
                              slippageMode === "custom"
                                ? "border-white text-white bg-gray-700"
                                : "border-gray-600 text-gray-400"
                            }`}
                          >
                            Custom
                          </button>
                          <span className="text-gray-400 ml-2">%</span>
                        </div>
                      </div>
                    </div>

                    {/* Priority Fee */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">
                          Priority Fee(SOL)
                        </span>
                        <Info size={14} className="text-gray-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">
                          Auto 0.00515
                        </span>
                        <input
                          type="text"
                          value={priorityFee}
                          onChange={(e) => setPriorityFee(e.target.value)}
                          className="bg-gray-800 border border-gray-600 rounded px-3 py-1 text-white text-sm w-20"
                        />
                      </div>
                    </div>

                    {/* Anti-MEV RPC */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        Anti-MEV RPC
                      </span>
                      <button
                        onClick={() => setAntiMEV(!antiMEV)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          antiMEV ? "bg-white" : "bg-gray-600"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full transition-transform ${
                            antiMEV
                              ? "translate-x-6 bg-black"
                              : "translate-x-1 bg-white"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirm Button */}
              <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-lg font-medium mb-4">
                Confirm
              </Button>

              {/* Note */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Note: Ensure your account has enough balance for auto trading to
                run smoothly.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CopyTradeModal;
