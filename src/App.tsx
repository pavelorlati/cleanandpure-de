import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RevealController } from "@/hooks/useReveal";
import Index from "./pages/Index.tsx";

const UeberUns = lazy(() => import("./pages/UeberUns.tsx"));
const Leistungen = lazy(() => import("./pages/Leistungen.tsx"));
const Referenzen = lazy(() => import("./pages/Referenzen.tsx"));
const Jobs = lazy(() => import("./pages/Jobs.tsx"));
const Kontakt = lazy(() => import("./pages/Kontakt.tsx"));
const Impressum = lazy(() => import("./pages/Impressum.tsx"));
const Datenschutz = lazy(() => import("./pages/Datenschutz.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RevealController />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/referenzen" element={<Referenzen />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
