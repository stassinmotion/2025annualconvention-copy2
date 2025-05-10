
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  targetDate: Date;
  compact?: boolean;
}

const ProgressIndicator = ({ targetDate, compact = false }: ProgressIndicatorProps) => {
  const calculateProgress = (): number => {
    const now = new Date();
    const totalDuration = 100 * 24 * 60 * 60 * 1000; // 100 days before event
    const startDate = new Date(targetDate.getTime() - totalDuration);
    
    if (now < startDate) return 0;
    if (now > targetDate) return 100;
    
    const elapsed = now.getTime() - startDate.getTime();
    return Math.min(Math.round((elapsed / totalDuration) * 100), 100);
  };
  
  const progress = calculateProgress();
  
  return (
    <div className="w-full max-w-md mx-auto space-y-1.5">
      <div className={`flex justify-between ${compact ? 'text-[0.6rem]' : 'text-[0.65rem]'} uppercase tracking-widest mb-1`}>
        <span className="text-racing-silver/80 [text-shadow:_0_0_8px_rgba(255,255,255,0.3)]">Start</span>
        <span className="font-racing text-racing-silver bg-gradient-to-r from-racing-silver via-white to-racing-silver bg-clip-text text-transparent [text-shadow:_0_0_10px_rgba(255,255,255,0.4)]">
          {progress}%
        </span>
        <span className="text-racing-silver/80 [text-shadow:_0_0_8px_rgba(255,255,255,0.3)]">Race Day</span>
      </div>
      <Progress 
        value={progress} 
        className="h-[2px] bg-white/5"
        style={{
          "--progress-background": "linear-gradient(90deg, rgba(232,233,235,0.3), rgba(255,255,255,0.8), rgba(232,233,235,0.3))",
        } as React.CSSProperties}
      />
    </div>
  );
};

export default ProgressIndicator;
