
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
}

const Button = ({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  icon,
  href,
  download,
  target,
  rel,
}: ButtonProps) => {
  const baseStyles = "relative font-orbitron uppercase tracking-wider inline-flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none";
  
  const variantStyles = {
    primary: "bg-transparent text-cyan-400 border border-cyan-500 hover:bg-cyan-500/10 animate-pulse-glow",
    secondary: "bg-transparent text-purple-400 border border-purple-500 hover:bg-purple-500/10 animate-pulse-glow",
    outlined: "bg-transparent hover:bg-white/5 border border-white/20 text-white/90 hover:text-white",
    ghost: "bg-transparent hover:bg-white/5 text-white/90 hover:text-white",
  };
  
  const sizeStyles = {
    sm: "text-xs py-1.5 px-3",
    md: "text-sm py-2 px-4",
    lg: "text-base py-3 px-6",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  const Component = href ? 'a' : 'button';
  const hrefProps = href ? { href, ...(download && { download }), ...(target && { target }), ...(rel && { rel }) } : {};

  return (
    <Component
      onClick={onClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        className
      )}
      disabled={disabled && !href}
      type={Component === 'button' ? type : undefined}
      {...hrefProps}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute inset-0 rounded-md animate-shine opacity-20"></span>
        </span>
      )}
    </Component>
  );
};

export default Button;
