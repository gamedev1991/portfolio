
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";
import VibeCodingProjects from './components/VibeCodingProjects';

const queryClient = new QueryClient();

// Create a wrapper component to use hooks that require router context
const AppRoutes = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if we have a stored redirect path from a direct blog URL access
    const redirectTo = sessionStorage.getItem('redirectTo');
    if (redirectTo) {
      // Navigate to the blog post
      navigate(redirectTo);
      // Clear the storage so it doesn't redirect again on refresh
      sessionStorage.removeItem('redirectTo');
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
      <Route path="/vibe-coding-projects" element={<VibeCodingProjects />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
