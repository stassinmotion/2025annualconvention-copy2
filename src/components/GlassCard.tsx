
import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  accentColor?: 'red' | 'blue' | 'amber' | 'green';
  showStripe?: boolean;
  hoverEffect?: boolean;
}

const GlassCard = ({ 
  children, 
  className, 
  accentColor = 'red', 
  showStripe = true,
  hoverEffect = false,
  ...props 
}: GlassCardProps) => {
  // Define accent color classes
  const accentColorClass = {
    'red': 'bg-racing-red',
    'blue': 'bg-racing-blue',
    'amber': 'bg-amber-500',
    'green': 'bg-green-500'
  };

  // Define hover effect classes
  const hoverClasses = hoverEffect 
    ? 'transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]' 
    : '';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "bg-white/90 backdrop-blur-sm border border-gray-100 shadow-md rounded-xl p-6 relative overflow-hidden",
        hoverClasses,
        className
      )}
      {...props}
    >
      {/* Accent stripe */}
      {showStripe && (
        <div className={cn("absolute top-0 left-0 w-1.5 h-full", accentColorClass[accentColor])}></div>
      )}
      
      {/* Content with left padding when stripe is shown */}
      <div className={cn(showStripe ? "pl-2" : "")}>
        {children}
      </div>

      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 rounded-full bg-gradient-to-br from-gray-100 to-transparent opacity-20"></div>
    </motion.div>
  );
};

export default GlassCard;
