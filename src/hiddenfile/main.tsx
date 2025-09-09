import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";

import { Toaster } from "sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <App />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
