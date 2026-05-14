
import { useState, useEffect } from 'react';
import AnimatedText from './common/AnimatedText';
import Button from './common/Button';
import { ArrowDown, Download, Gamepad2 } from 'lucide-react';

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            setTimeout(() => setShowContent(true), 300);
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Grid background with animation */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size animate-grid-background opacity-30"></div>
      
      {/* Glowing circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyber-blue/10 filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-cyber-purple/10 filter blur-[100px] animate-pulse"></div>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center space-y-4 z-10">
          <div className="text-xl md:text-2xl font-orbitron text-cyan-400 mb-4">
            <AnimatedText variant="typing">Initializing Portfolio...</AnimatedText>
          </div>
          
          <div className="w-64 md:w-80 h-2 bg-cyber-darker rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-cyber-purple to-cyber-pink transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="text-sm text-white/60 terminal-text">
            {progress < 30 && "Loading assets..."}
            {progress >= 30 && progress < 60 && "Initializing systems..."}
            {progress >= 60 && progress < 90 && "Establishing connection..."}
            {progress >= 90 && progress < 100 && "Preparing interface..."}
            {progress >= 100 && "Ready to launch..."}
          </div>
        </div>
      ) : (
        <div className={`container mx-auto px-4 z-10 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block border border-cyan-500/30 bg-cyber-darker/50 rounded-md px-3 py-1 mb-4">
              <div className="flex items-center space-x-2">
                <Gamepad2 size={14} className="text-cyan-400" />
                <span className="text-xs font-medium text-white/80">Product Manager & Game Developer</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
              <span className="block">
                <AnimatedText 
                  variant="reveal" 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-white"
                  delay={300}
                >
                  Rahul Ohri
                </AnimatedText>
              </span>
              <span className="block mt-2 text-xl md:text-2xl lg:text-3xl opacity-90">
                <AnimatedText 
                  variant="reveal" 
                  delay={600}
                >
                  Live Ops, Monetisation & Growth — PM Who Has Shipped on iOS and Android
                </AnimatedText>
              </span>
            </h1>
            
            <p className="text-white/70 md:text-lg mb-8 max-w-xl mx-auto">
              <AnimatedText variant="reveal" delay={900}>
                Product Manager with a dev background. I've shipped F2P titles, run live ops seasons, and made monetisation calls that moved real numbers.
              </AnimatedText>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/RahulOhri - ProductManager.pdf"
                download="RahulOhri - ProductManager.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Download size={16} />}
                className="w-full sm:w-auto"
              >
                Resume
              </Button>

              <Button
                variant="outlined"
                size="lg"
                href="#contact"
                className="w-full sm:w-auto"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="mt-16 animate-float">
              <a 
                href="#about" 
                className="inline-flex flex-col items-center text-white/50 hover:text-cyan-400 transition-colors"
              >
                <span className="text-sm mb-2">Scroll Down</span>
                <ArrowDown size={20} className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
