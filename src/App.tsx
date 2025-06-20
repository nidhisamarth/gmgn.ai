import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BuyAmountProvider } from "@/contexts/BuyAmountContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import Index from "./pages/Index";
import New from "./pages/New";
import Trending from "./pages/Trending";
import CopyTrade from "./pages/CopyTrade";
import Monitor from "./pages/Monitor";
import Follow from "./pages/Follow";
import Holding from "./pages/Holding";
import Auth from "./pages/Auth";
import EmailConfirm from "./pages/EmailConfirm";
import MyWallet from "./pages/MyWallet";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use basename consistently to match Vite base configuration
const basename = "/gmgn.ai/";

const App = () => (
  <div className="dark bg-black min-h-screen">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <BuyAmountProvider>
            <BrowserRouter basename={basename}>
              <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/confirm" element={<EmailConfirm />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Index />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/new"
                  element={
                    <ProtectedRoute>
                      <New />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/trending"
                  element={
                    <ProtectedRoute>
                      <Trending />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/copytrade"
                  element={
                    <ProtectedRoute>
                      <CopyTrade />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/monitor"
                  element={
                    <ProtectedRoute>
                      <Monitor />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/follow"
                  element={
                    <ProtectedRoute>
                      <Follow />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/holding"
                  element={
                    <ProtectedRoute>
                      <Holding />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/my-wallet"
                  element={
                    <ProtectedRoute>
                      <MyWallet />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </BuyAmountProvider>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;
