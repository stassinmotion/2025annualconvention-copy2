
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import CountdownHeader from './countdown/CountdownHeader';
import TimeDisplay from './countdown/TimeDisplay';
import ProgressIndicator from './countdown/ProgressIndicator';
import CountdownExpiredMessage from './countdown/CountdownExpiredMessage';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  label?: string;
  compact?: boolean;
}

const CountdownTimer = ({
  targetDate,
  className,
  label = "START YOUR ENGINES",
  compact = false
}: CountdownTimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const [isFinalCountdown, setIsFinalCountdown] = useState(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(difference % (1000 * 60) / 1000);
      
      setIsFinalCountdown(difference < 60 * 60 * 1000);
      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds
      });
    };
    
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return <CountdownExpiredMessage className={className} />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={cn(
        "relative overflow-hidden rounded-xl backdrop-blur-xl bg-black/50 border border-white/15", 
        "shadow-[0_8px_32px_rgba(0,0,0,0.15)] animate-shimmer", 
        isFinalCountdown ? "animate-pulse" : "",
        className
      )}
    >
      {/* Enhanced metallic gradient background */}
      <div className="absolute -inset-1 bg-[linear-gradient(110deg,#E8E9EB,#FFFFFF,#E8E9EB)] blur-xl opacity-10 -z-10"></div>
      
      {/* Moving shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine -z-5"></div>
      
      <div className={cn(
        "relative z-10",
        compact ? "p-4 md:p-5" : "p-6 md:p-8"
      )}>
        <CountdownHeader label={label} compact={compact} />
        <TimeDisplay timeRemaining={timeRemaining} compact={compact} />
        {!compact && <ProgressIndicator targetDate={targetDate} />}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
