
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import New from "./pages/New";
import Trending from "./pages/Trending";
import CopyTrade from "./pages/CopyTrade";
import Monitor from "./pages/Monitor";
import Follow from "./pages/Follow";
import Holding from "./pages/Holding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new" element={<New />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/copytrade" element={<CopyTrade />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/holding" element={<Holding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
