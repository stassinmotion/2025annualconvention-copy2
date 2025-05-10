
import { useState, useEffect } from 'react';
import { Clock, Gauge } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

interface TimeGaugeProps {
  time: string;
  progress: number;
  isHovered?: boolean;
}

export const TimeGauge = ({ time, progress, isHovered = false }: TimeGaugeProps) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  
  useEffect(() => {
    // When hovered, set to full progress, otherwise use the provided progress value
    const targetProgress = isHovered ? 100 : progress;
    
    // Smoothly transition to the new progress value
    const timer = setTimeout(() => {
      setCurrentProgress(targetProgress);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [progress, isHovered]);
  
  return (
    <div className="dashboard-gauge">
      <div className="gauge-container">
        <motion.div
          animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <Gauge size={28} className="text-racing-red gauge-icon" />
        </motion.div>
        <Progress value={currentProgress} className="gauge-progress h-2" />
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <Clock size={16} className="text-racing-red" />
        </motion.div>
        <span className="font-medium text-sm text-white">{time}</span>
      </div>
    </div>
  );
};
