import React, { useState } from "react";
import { X, Info, Copy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreateTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTradeModal = ({ isOpen, onClose }: CreateTradeModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [lightningMode, setLightningMode] = useState(false);
  const [selectedWallet] = useState("W1 Wallet");
  const [walletAddress, setWalletAddress] = useState("");
  const [buyMethod, setBuyMethod] = useState<
    "maxbuy" | "fixedbuy" | "fixedratio"
  >("fixedratio");
  const [fixedRatio, setFixedRatio] = useState("");
  const [maxBuyAmount, setMaxBuyAmount] = useState("");
  const [sellMethod, setSellMethod] = useState<"copy" | "not">("copy");

  // Advanced settings - Step 2
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

  // Final settings - Step 3
  const [tokenBlacklist, setTokenBlacklist] = useState<string[]>([]);
  const [newTokenCA, setNewTokenCA] = useState("");
  const [autoMode, setAutoMode] = useState("AUTO");
  const [slippageMode, setSlippageMode] = useState<"auto" | "custom">("auto");
  const [priorityFee, setPriorityFee] = useState("0.005");
  const [antiMEV, setAntiMEV] = useState(true);

  if (!isOpen) return null;

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform],
    );
  };

  const addTokenToBlacklist = () => {
    if (newTokenCA.trim()) {
      setTokenBlacklist((prev) => [...prev, newTokenCA.trim()]);
      setNewTokenCA("");
    }
  };

  const removeTokenFromBlacklist = (index: number) => {
    setTokenBlacklist((prev) => prev.filter((_, i) => i !== index));
  };

  const renderStep1 = () => (
    <div className="flex-1 overflow-y-auto">
      {/* Lightning Mode */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={lightningMode}
                onChange={(e) => setLightningMode(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
            <span className="text-yellow-400 text-sm font-medium">
              Lightning mode, rapid on-chain
            </span>
          </div>
          <button className="text-gray-400 hover:text-gray-300">
            <Info size={16} />
          </button>
        </div>
      </div>

      {/* Wallet Selection */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">💼</span>
            </div>
            <span className="text-white text-sm">{selectedWallet}...</span>
            <span className="text-gray-400 text-sm">A4Z7...H6n</span>
            <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-bold">0</span>
          </div>
        </div>
      </div>

      {/* Copy From */}
      <div className="p-4 border-b border-gray-700">
        <label className="block text-white text-sm font-medium mb-3">
          Copy From
        </label>
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="Wallet Address"
          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Buy Method Tabs */}
      <div className="p-4 border-b border-gray-700">
        <div className="grid grid-cols-3 gap-2 mb-4">
          <button
            onClick={() => setBuyMethod("maxbuy")}
            className={`px-3 py-2 rounded text-sm transition-colors ${
              buyMethod === "maxbuy"
                ? "bg-gray-700 text-white border border-gray-500"
                : "bg-gray-800 text-gray-300 border border-gray-600"
            }`}
          >
            Max Buy Amount ⓘ
          </button>
          <button
            onClick={() => setBuyMethod("fixedbuy")}
            className={`px-3 py-2 rounded text-sm transition-colors ${
              buyMethod === "fixedbuy"
                ? "bg-gray-700 text-white border border-gray-500"
                : "bg-gray-800 text-gray-300 border border-gray-600"
            }`}
          >
            Fixed Buy ⓘ
          </button>
          <button
            onClick={() => setBuyMethod("fixedratio")}
            className={`px-3 py-2 rounded text-sm transition-colors ${
              buyMethod === "fixedratio"
                ? "bg-gray-700 text-white border border-gray-500"
                : "bg-gray-800 text-gray-300 border border-gray-600"
            }`}
          >
            Fixed Ratio ⓘ
          </button>
        </div>

        {/* Input Fields */}
        <div className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={fixedRatio}
              onChange={(e) => setFixedRatio(e.target.value)}
              placeholder="Fixed Ratio"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-8"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              %
            </span>
          </div>

          <div className="relative">
            <input
              type="text"
              value={maxBuyAmount}
              onChange={(e) => setMaxBuyAmount(e.target.value)}
              placeholder="Max Buy Amount"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-12"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              SOL
            </span>
          </div>

          <div className="text-gray-400 text-sm">
            ≤$0(0SOL) <span className="ml-auto">Bal: 0SOL</span>
          </div>
        </div>
      </div>

      {/* Sell Method */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-white text-sm font-medium">Sell Method</span>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setSellMethod("copy")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              sellMethod === "copy"
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            Copy Sells
          </button>
          <button
            onClick={() => setSellMethod("not")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              sellMethod === "not"
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            Not Sells
          </button>
        </div>
      </div>

      {/* Customize TP & SL */}
      <div className="p-4">
        <Button
          onClick={() => setCurrentStep(2)}
          className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white py-3"
        >
          Customize TP & SL
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex-1 overflow-y-auto">
      {/* Market Cap */}
      <div className="p-4 border-b border-gray-700">
        <label className="block text-white text-sm font-medium mb-3">
          Market Cap
        </label>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <input
              type="text"
              value={marketCapMin}
              onChange={(e) => setMarketCapMin(e.target.value)}
              placeholder="Min"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-8"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              K
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              value={marketCapMax}
              onChange={(e) => setMarketCapMax(e.target.value)}
              placeholder="Max"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-8"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              K
            </span>
          </div>
        </div>
      </div>

      {/* Liq */}
      <div className="p-4 border-b border-gray-700">
        <label className="block text-white text-sm font-medium mb-3">Liq</label>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <input
              type="text"
              value={liqMin}
              onChange={(e) => setLiqMin(e.target.value)}
              placeholder="Min"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-8"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              K
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              value={liqMax}
              onChange={(e) => setLiqMax(e.target.value)}
              placeholder="Max"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-8"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              K
            </span>
          </div>
        </div>
      </div>

      {/* Copy Buy Amount */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-white text-sm font-medium">
            Copy Buy Amount
          </span>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <input
              type="text"
              value={copyBuyMin}
              onChange={(e) => setCopyBuyMin(e.target.value)}
              placeholder="Min"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-12"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              SOL
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              value={copyBuyMax}
              onChange={(e) => setCopyBuyMax(e.target.value)}
              placeholder="Max"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-12"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              SOL
            </span>
          </div>
        </div>
      </div>

      {/* Age */}
      <div className="p-4 border-b border-gray-700">
        <label className="block text-white text-sm font-medium mb-3">Age</label>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <input
              type="text"
              value={ageMin}
              onChange={(e) => setAgeMin(e.target.value)}
              placeholder="Min"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-8"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              m
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              value={ageMax}
              onChange={(e) => setAgeMax(e.target.value)}
              placeholder="Max"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-8"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
              m
            </span>
          </div>
        </div>
      </div>

      {/* Min Burnt */}
      <div className="p-4 border-b border-gray-700">
        <label className="block text-white text-sm font-medium mb-3">
          Min Burnt
        </label>
        <div className="relative">
          <input
            type="text"
            value={minBurnt}
            onChange={(e) => setMinBurnt(e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-8"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
            %
          </span>
        </div>
      </div>

      {/* Increase Times */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-white text-sm font-medium">Increase Times</span>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          value={increaseTimes}
          onChange={(e) => setIncreaseTimes(e.target.value)}
          className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Platform */}
      <div className="p-4 border-b border-gray-700">
        <label className="block text-white text-sm font-medium mb-3">
          Platform
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handlePlatformToggle("pump")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              selectedPlatforms.includes("pump")
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${selectedPlatforms.includes("pump") ? "bg-green-400" : "bg-gray-400"}`}
              />
              Pump
            </div>
          </button>
          <button
            onClick={() => handlePlatformToggle("raydium")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              selectedPlatforms.includes("raydium")
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${selectedPlatforms.includes("raydium") ? "bg-blue-400" : "bg-gray-400"}`}
              />
              Raydium
            </div>
          </button>
          <button
            onClick={() => handlePlatformToggle("moonshot")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              selectedPlatforms.includes("moonshot")
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${selectedPlatforms.includes("moonshot") ? "bg-yellow-400" : "bg-gray-400"}`}
              />
              Moonshot
            </div>
          </button>
          <button
            onClick={() => handlePlatformToggle("others")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              selectedPlatforms.includes("others")
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            Others
          </button>
        </div>
      </div>

      {/* Next Button */}
      <div className="p-4">
        <Button
          onClick={() => setCurrentStep(3)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
        >
          Next
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="flex-1 overflow-y-auto">
      {/* Platform (continued from step 2) */}
      <div className="p-4 border-b border-gray-700">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => handlePlatformToggle("pump")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              selectedPlatforms.includes("pump")
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${selectedPlatforms.includes("pump") ? "bg-green-400" : "bg-gray-400"}`}
              />
              Pump
            </div>
          </button>
          <button
            onClick={() => handlePlatformToggle("raydium")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              selectedPlatforms.includes("raydium")
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${selectedPlatforms.includes("raydium") ? "bg-blue-400" : "bg-gray-400"}`}
              />
              Raydium
            </div>
          </button>
          <button
            onClick={() => handlePlatformToggle("moonshot")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              selectedPlatforms.includes("moonshot")
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${selectedPlatforms.includes("moonshot") ? "bg-yellow-400" : "bg-gray-400"}`}
              />
              Moonshot
            </div>
          </button>
          <button
            onClick={() => handlePlatformToggle("others")}
            className={`px-4 py-3 rounded-lg text-sm transition-colors border ${
              selectedPlatforms.includes("others")
                ? "bg-green-600/20 text-green-400 border-green-500"
                : "bg-gray-800 text-gray-300 border-gray-600"
            }`}
          >
            Others
          </button>
        </div>
      </div>

      {/* Token Blacklist */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-white text-sm font-medium">
            Token Blacklist
          </span>
          <Info className="w-4 h-4 text-gray-400" />
        </div>

        {/* Token List */}
        {tokenBlacklist.map((token, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mb-2 bg-gray-800 rounded-lg p-3"
          >
            <span className="text-gray-400 text-sm">{index + 1}.</span>
            <span className="text-white text-sm flex-1">{token}</span>
            <button
              onClick={() => removeTokenFromBlacklist(index)}
              className="text-gray-400 hover:text-red-400"
            >
              🗑️
            </button>
          </div>
        ))}

        {/* Add Token Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newTokenCA}
            onChange={(e) => setNewTokenCA(e.target.value)}
            placeholder="Please enter Token CA"
            className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <Button
            onClick={addTokenToBlacklist}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6"
          >
            + Add
          </Button>
        </div>
      </div>

      {/* Auto Mode Toggle */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <span className="text-white text-sm">🤖</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAutoMode("AUTO")}
              className={`px-3 py-1 rounded text-sm ${
                autoMode === "AUTO"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              Auto
            </button>
            <button
              onClick={() => setAutoMode("0.0005")}
              className={`px-3 py-1 rounded text-sm ${
                autoMode === "0.0005"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              0.0005
            </button>
            <span className="text-white">🔄</span>
            <button
              onClick={() => setAutoMode("OFF")}
              className={`px-3 py-1 rounded text-sm ${
                autoMode === "OFF"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              OFF
            </button>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
        </div>
      </div>

      {/* Slippage */}
      <div className="p-4 border-b border-gray-700">
        <label className="block text-white text-sm font-medium mb-3">
          Slippage
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => setSlippageMode("auto")}
            className={`px-4 py-2 rounded text-sm ${
              slippageMode === "auto"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Auto
          </button>
          <button
            onClick={() => setSlippageMode("custom")}
            className={`px-4 py-2 rounded text-sm ${
              slippageMode === "custom"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Custom
          </button>
          <span className="text-gray-400 text-sm ml-2">%</span>
        </div>
      </div>

      {/* Priority Fee */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-white text-sm font-medium">
            Priority Fee(SOL)
          </span>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Auto 0.00519</span>
          <span className="text-white text-sm">{priorityFee}</span>
        </div>
      </div>

      {/* Anti-MEV RPC */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-white text-sm">Anti-MEV RPC</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={antiMEV}
              onChange={(e) => setAntiMEV(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/* Note */}
      <div className="p-4 border-b border-gray-700">
        <p className="text-gray-400 text-sm">
          Note: Ensure your account has enough balance for auto trading to run
          smoothly.
        </p>
      </div>

      {/* Confirm Button */}
      <div className="p-4">
        <Button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium"
        >
          Confirm
        </Button>
      </div>
    </div>
  );

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

        {/* Dynamic Content based on current step */}
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        {/* Help Button */}
        <button className="fixed bottom-6 right-6 w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white">
          ?
        </button>
      </div>
    </div>
  );
};

export default CreateTradeModal;
