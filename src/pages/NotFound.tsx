
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Button from "../components/common/Button";
import AnimatedText from "../components/common/AnimatedText";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size animate-grid-background opacity-30"></div>
        
        <div className="text-center z-10 px-4">
          <h1 className="text-7xl md:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse-glow">
            <AnimatedText variant="glitch">404</AnimatedText>
          </h1>
          
          <p className="text-2xl md:text-4xl text-white mb-8">
            <AnimatedText variant="reveal">Page not found</AnimatedText>
          </p>
          
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back to the main system.
          </p>
          
          <Button 
            variant="primary" 
            size="lg" 
            href="/" 
            icon={<Home size={18} />}
          >
            Return Home
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
