import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BuyAmountProvider } from "@/contexts/BuyAmountContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

import Index from "./pages/Index";
import New from "./pages/New";
import Trending from "./pages/Trending";
import CopyTrade from "./pages/CopyTrade";
import PumpSim from "./pages/PumpSim";
import Monitor from "./pages/Monitor";
import Follow from "./pages/Follow";
import Holding from "./pages/Holding";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use basename consistently to match Vite base configuration
const basename = "/gmgn.ai";

// Component to handle root route redirection based on auth status
const RootRedirect = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return <Navigate to={user ? "/dashboard" : "/auth"} replace />;
};

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
                <Route path="/auth" element={<Auth />} />
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
                  path="/pumpsim"
                  element={
                    <ProtectedRoute>
                      <PumpSim />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<RootRedirect />} />
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
