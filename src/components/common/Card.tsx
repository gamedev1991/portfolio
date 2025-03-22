
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'hover' | 'neon' | 'terminal';
  onClick?: () => void;
}

const Card = ({ 
  children, 
  className,
  variant = 'default',
  onClick
}: CardProps) => {
  const baseStyles = "relative backdrop-blur-sm bg-black/30 rounded-md overflow-hidden transition-all duration-300 ease-in-out";
  
  const variantStyles = {
    default: "border border-white/10",
    hover: "border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]",
    neon: "neon-border before:opacity-50 hover:before:opacity-100",
    terminal: "border-2 border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.3)]",
  };

  return (
    <div 
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
