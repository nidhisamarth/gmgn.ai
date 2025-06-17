import React from "react";
import { X, Download } from "lucide-react";

interface SharePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SharePanel = ({ isOpen, onClose }: SharePanelProps) => {
  if (!isOpen) return null;

  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}`);
    // Add actual sharing logic here
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-96 bg-gray-900 rounded-lg overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Share</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Share Card */}
        <div className="p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden mb-4 relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("https://cdn.builder.io/api/v1/assets/c5a715529e9f4a06bce0f217170f8cc0/image-431f3f?format=webp&width=400")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content Overlay */}
            <div className="relative p-6">
              {/* Header with wallet info */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/c5a715529e9f4a06bce0f217170f8cc0/whatsapp-image-2025-06-16-at-23.22.17-1-82df88?format=webp&width=24"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-medium">A4Z7C...H6n</span>
              </div>

              {/* Main Stats */}
              <div className="mb-4">
                <div className="text-white text-lg font-medium mb-2">
                  30D Realized Profit
                </div>
                <div className="text-white text-5xl font-bold mb-4">$0</div>

                <div className="space-y-1 text-sm">
                  <div className="text-gray-300">
                    Unrealized Profits: <span className="text-white">$0</span>
                  </div>
                  <div className="text-gray-300">
                    Total Profit: <span className="text-white">$0</span>
                  </div>
                </div>
              </div>

              {/* Bottom Right Stats */}
              <div className="text-right">
                <div className="text-gray-300 text-sm">
                  30D TXs: <span className="text-white">0/0</span>
                </div>
              </div>

              {/* Character in corner */}
              <div className="absolute bottom-4 right-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-black text-lg">🐸</span>
                </div>
              </div>
            </div>
          </div>

          {/* GMGN Branding */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                  <span className="text-black text-sm font-bold">🔮</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">GMGN</div>
                  <div className="text-gray-400 text-sm">
                    Discover faster, trade faster with GMGN!
                  </div>
                </div>
              </div>
              <div className="text-right text-gray-400 text-sm">
                <div>❌ gmgnai</div>
                <div>🌐 gmgn.ai</div>
              </div>
            </div>
          </div>

          {/* Share Options */}
          <div className="grid grid-cols-4 gap-4">
            <button
              onClick={() => handleShare("twitter")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors"
            >
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <span className="text-white text-sm">Twitter</span>
            </button>

            <button
              onClick={() => handleShare("telegram")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <span className="text-white text-sm">Telegram</span>
            </button>

            <button
              onClick={() => handleShare("copy")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </div>
              <span className="text-white text-sm">Copy</span>
            </button>

            <button
              onClick={() => handleShare("download")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-sm">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePanel;
