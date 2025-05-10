
import React from 'react';
import { cn } from '@/lib/utils';

interface CountdownExpiredMessageProps {
  className?: string;
}

const CountdownExpiredMessage = ({ className }: CountdownExpiredMessageProps) => {
  return (
    <div className={cn("text-center py-4", className)}>
      <p className="text-racing-silver font-medium animate-pulse [text-shadow:_0_0_10px_rgba(255,255,255,0.4)]">
        The event has started!
      </p>
    </div>
  );
};

export default CountdownExpiredMessage;
