
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-6 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Rahul Ohri. All rights reserved.
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="mailto:rahulohri2007@gmail.com" 
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/rahul-ohri/" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://steamcommunity.com/profiles/76561198123903147/" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                Steam Profile
              </a>
              <a
                href="https://github.com/gamedev1991"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="/vibe-coding-projects"
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                Vibe Coding
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
