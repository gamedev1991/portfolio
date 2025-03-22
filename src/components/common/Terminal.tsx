
import { useState, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  children?: ReactNode;
  className?: string;
  lines?: string[];
  typingSpeed?: number;
  startDelay?: number;
  prompt?: string;
  title?: string;
  autoType?: boolean;
}

const Terminal = ({
  children,
  className,
  lines = [],
  typingSpeed = 30,
  startDelay = 300,
  prompt = ">",
  title = "Terminal",
  autoType = true
}: TerminalProps) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Blink cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!autoType || lines.length === 0) return;
    
    // Start typing after delay
    const startTimeout = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (currentLine < lines.length) {
          if (currentChar < lines[currentLine].length) {
            setDisplayedLines(prev => {
              const newLines = [...prev];
              if (newLines[currentLine]) {
                newLines[currentLine] = lines[currentLine].substring(0, currentChar + 1);
              } else {
                newLines[currentLine] = lines[currentLine].substring(0, currentChar + 1);
              }
              return newLines;
            });
            setCurrentChar(prev => prev + 1);
          } else {
            setCurrentChar(0);
            setCurrentLine(prev => prev + 1);
          }
        } else {
          clearInterval(typeInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [autoType, currentChar, currentLine, lines, startDelay, typingSpeed]);

  return (
    <div className={cn(
      "bg-cyber-darker border-2 border-cyan-500/50 rounded-md overflow-hidden shadow-[0_0_10px_rgba(0,255,255,0.15)]",
      className
    )}>
      <div className="flex items-center px-4 py-2 bg-cyan-900/20 border-b border-cyan-500/30">
        <div className="flex space-x-2 mr-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs font-medium text-cyan-300">
          {title}
        </div>
      </div>
      <div className="p-4 font-mono text-sm text-cyan-100 terminal-text h-full">
        {autoType ? (
          <>
            {displayedLines.map((line, index) => (
              <div key={index} className="mb-1">
                <span className="text-cyan-400 mr-2">{prompt}</span>
                <span>{line}</span>
              </div>
            ))}
            {currentLine < lines.length && (
              <div>
                <span className="text-cyan-400 mr-2">{prompt}</span>
                <span>{displayedLines[currentLine] || ""}</span>
                {cursorVisible && <span className="bg-cyan-400 w-2.5 h-4 inline-block ml-0.5"></span>}
              </div>
            )}
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Terminal;
