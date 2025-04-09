import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";
import VibeCodingProjects from './components/VibeCodingProjects';

const queryClient = new QueryClient();

// Create a wrapper component to use hooks that require router context
const AppRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [contentLoaded, setContentLoaded] = useState(false);
  
  useEffect(() => {
    // Check if we have a stored redirect path from a direct blog URL access
    const redirectTo = sessionStorage.getItem('redirectTo');
    if (redirectTo) {
      // Navigate to the blog post
      navigate(redirectTo);
      // Clear the storage so it doesn't redirect again on refresh
      sessionStorage.removeItem('redirectTo');
    }
    
    // Check for direct_to_blog parameter
    const urlParams = new URLSearchParams(window.location.search);
    const directToBlog = urlParams.get('direct_to_blog');
    const directToBlogPost = urlParams.get('direct_to_blog_post');
    
    if (directToBlog === 'true' && location.pathname === '/') {
      // Remove the parameter from the URL without refreshing
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      
      // Navigate to blog page
      navigate('/blog');
    }
    
    // Handle direct access to individual blog posts
    if (directToBlogPost && location.pathname === '/') {
      // Remove the parameter from the URL without refreshing
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      
      // Navigate to the specific blog post
      navigate(`/blog/${directToBlogPost}`);
    }

    // Force a style refresh when directly accessing routes
    document.body.classList.add('route-loaded');
    
    // Add a small delay to ensure styles are applied before showing content
    const timer = setTimeout(() => {
      setContentLoaded(true);
      document.body.classList.add('content-loaded');
    }, 50);
    
    return () => {
      document.body.classList.remove('route-loaded');
      document.body.classList.remove('content-loaded');
      clearTimeout(timer);
    };
  }, [navigate, location.pathname]);

  return (
    <div className={`app-container ${contentLoaded ? 'content-loaded' : 'content-loading'}`}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/vibe-coding-projects" element={<VibeCodingProjects />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
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
