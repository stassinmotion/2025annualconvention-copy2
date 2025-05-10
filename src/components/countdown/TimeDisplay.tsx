
import React from 'react';
import { cn } from '@/lib/utils';
import TimeUnit from './TimeUnit';

interface TimeDisplayProps {
  timeRemaining: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  compact?: boolean;
}

const TimeDisplay = ({ timeRemaining, compact = false }: TimeDisplayProps) => {
  return (
    <div className={cn(
      "flex justify-center gap-3 md:gap-4",
      compact ? "mb-4" : "mb-6"
    )}>
      <TimeUnit value={timeRemaining.days} label="days" compact={compact} />
      <TimeUnit value={timeRemaining.hours} label="hrs" compact={compact} />
      <TimeUnit value={timeRemaining.minutes} label="min" compact={compact} />
      <TimeUnit value={timeRemaining.seconds} label="sec" compact={compact} />
    </div>
  );
};

export default TimeDisplay;
