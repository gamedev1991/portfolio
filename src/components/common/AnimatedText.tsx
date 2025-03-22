
import { useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'typing' | 'reveal' | 'glow' | 'glitch';
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

const AnimatedText = ({
  children,
  className,
  variant = 'typing',
  delay = 0,
  speed = 30,
  onComplete
}: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const text = children?.toString() || '';

  useEffect(() => {
    if (variant === 'typing') {
      let i = 0;
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          if (i < text.length) {
            setDisplayText(text.substring(0, i + 1));
            i++;
          } else {
            clearInterval(interval);
            setIsComplete(true);
            onComplete && onComplete();
          }
        }, speed);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setDisplayText(text);
    }
  }, [text, variant, delay, speed, onComplete]);

  const baseStyles = "inline-block";

  const variantStyles = {
    typing: "border-r-2 border-cyan-400 animate-blink-caret overflow-hidden whitespace-nowrap",
    reveal: "animate-intro-reveal opacity-0",
    glow: "animate-text-glow",
    glitch: "cyber-glitch-effect",
  };

  if (variant === 'glitch') {
    return (
      <span 
        className={cn(
          baseStyles,
          variantStyles[variant],
          className
        )}
        data-text={text}
      >
        {text}
      </span>
    );
  }

  return (
    <span 
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
    >
      {variant === 'typing' ? displayText : children}
    </span>
  );
};

export default AnimatedText;
