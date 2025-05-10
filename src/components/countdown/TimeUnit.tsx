import React from 'react';
import { motion } from 'framer-motion';

interface TimeUnitProps {
  value: number;
  label: string;
  compact?: boolean;
}

const TimeUnit = ({ value, label, compact = false }: TimeUnitProps) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className={`
          relative backdrop-blur-xl 
          bg-gradient-to-br from-racing-silver/20 via-white/30 to-racing-silver/20 
          border border-white/20 rounded-lg 
          ${compact ? 'px-2 py-1.5' : 'px-4 py-3'} 
          animate-float
        `}
        whileHover={{ 
          scale: 1.02,
          transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 20 
          }
        }}
      >
        {/* Metallic shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine rounded-lg"></div>
        
        {/* Pulsing light glow effect */}
        <div
          className="absolute inset-0 z-0 pointer-events-none animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.25) 0%, rgba(226,26,44,0.12) 60%, transparent 100%)'
          }}
        />
        
        <span className={`
          block font-racing text-transparent bg-gradient-to-r from-racing-silver via-white to-racing-silver 
          bg-clip-text animate-gradient-x [text-shadow:_0_0_15px_rgba(255,255,255,0.5)]
          ${compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl lg:text-5xl'}
        `}>
          {value.toString().padStart(2, '0')}
        </span>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-racing-silver/30 via-white/50 to-racing-silver/30" />
      </motion.div>
      <span className={`
        uppercase tracking-widest text-racing-silver font-medium [text-shadow:_0_0_8px_rgba(255,255,255,0.3)]
        ${compact ? 'text-[0.6rem] mt-1' : 'text-[0.65rem] mt-2'}
      `}>
        {label}
      </span>
    </div>
  );
};

export default TimeUnit;
