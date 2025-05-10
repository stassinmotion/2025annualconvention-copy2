
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CountdownHeaderProps {
  label: string;
  compact?: boolean;
}

const CountdownHeader = ({ label, compact = false }: CountdownHeaderProps) => {
  return (
    <div className={cn(
      "text-center",
      compact ? "mb-4" : "mb-6"
    )}>
      <motion.span 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "text-white/90 font-racing uppercase tracking-widest font-bold bg-gradient-to-r from-racing-silver via-white to-racing-silver bg-clip-text text-transparent animate-gradient-x [text-shadow:_0_0_20px_rgba(255,255,255,0.6)]",
          compact ? "text-lg md:text-xl" : "text-xl md:text-2xl lg:text-3xl"
        )}
      >
        {label}
      </motion.span>
    </div>
  );
};

export default CountdownHeader;
