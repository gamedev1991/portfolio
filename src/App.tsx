import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load non-critical components for better performance
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const VibeCodingProjects = lazy(() => import('./components/VibeCodingProjects'));

// Create a persistent query client with caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 30 * 60 * 1000, // 30 minutes
    },
  },
});

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/vibe-coding-projects" element={<VibeCodingProjects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
