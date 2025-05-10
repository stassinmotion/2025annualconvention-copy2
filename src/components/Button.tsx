import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center font-medium transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2",
          // Variant styles
          variant === 'primary' && "bg-racing-blue text-white hover:bg-blue-600 focus:ring-blue-500",
          variant === 'accent' && "bg-racing-red text-white hover:bg-red-600 focus:ring-red-500",
          variant === 'outline' && "bg-transparent border-2 border-racing-blue text-racing-blue hover:bg-racing-blue/10 focus:ring-blue-500",
          variant === 'ghost' && "bg-transparent text-racing-blue hover:bg-racing-blue/10 focus:ring-blue-500",
          // Size styles
          size === 'sm' && "text-xs px-3 py-1.5 rounded",
          size === 'md' && "text-sm px-4 py-2 rounded-md",
          size === 'lg' && "text-base px-6 py-3 rounded-lg",
          // Disabled state
          (disabled || isLoading) && "opacity-70 cursor-not-allowed",
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        aria-busy={isLoading || undefined}
        aria-disabled={disabled || isLoading || undefined}
        type={props.type || 'button'}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
