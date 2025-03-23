
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
            <div className="flex space-x-6">
              <a 
                href="mailto:example@email.com" 
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                example@email.com
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://play.google.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                Google Play
              </a>
              <a 
                href="/blog" 
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
