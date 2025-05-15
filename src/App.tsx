
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ComputerRepair from "./pages/services/ComputerRepair";
import PhoneRepair from "./pages/services/PhoneRepair";
import TVRepair from "./pages/services/TVRepair";
import NetworkSetup from "./pages/services/NetworkSetup";
import SmartHome from "./pages/services/SmartHome";
import DataRecovery from "./pages/services/DataRecovery";
import PrinterSetup from "./pages/services/PrinterSetup";
import GamingSetup from "./pages/services/GamingSetup";
import Membership from "./pages/Membership";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FAQs from "./pages/support/FAQs";
import Contact from "./pages/support/Contact";
import KnowledgeBase from "./pages/support/KnowledgeBase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/computer-repair" element={<ComputerRepair />} />
          <Route path="/services/phone-repair" element={<PhoneRepair />} />
          <Route path="/services/tv-repair" element={<TVRepair />} />
          <Route path="/services/network-setup" element={<NetworkSetup />} />
          <Route path="/services/smart-home" element={<SmartHome />} />
          <Route path="/services/data-recovery" element={<DataRecovery />} />
          <Route path="/services/printer-setup" element={<PrinterSetup />} />
          <Route path="/services/gaming-setup" element={<GamingSetup />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/about" element={<About />} />
          <Route path="/support/faqs" element={<FAQs />} />
          <Route path="/support/contact" element={<Contact />} />
          <Route path="/support/knowledge-base" element={<KnowledgeBase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
