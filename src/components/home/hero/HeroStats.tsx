import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Flag } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

interface HeroStatsProps {
  eventDate: Date;
  isMobile: boolean;
}

const HeroStats = ({ eventDate, isMobile }: HeroStatsProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="flex flex-col space-y-6"
    >
      {/* Countdown Timer */}
      <CountdownTimer 
        targetDate={eventDate} 
        label="RACE DAY COUNTDOWN" 
        compact={isMobile}
      />
      
      {/* Stats Cards */}
      <div className="flex flex-col sm:flex-row gap-4 h-full">
        <motion.div
          variants={scaleIn}
          className="flex-1 p-5 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users size={16} className="text-racing-silver mr-2" />
              <span className="text-sm font-medium text-racing-silver">Expected Attendees</span>
            </div>
            <span className="text-xl font-racing text-white">600+</span>
          </div>
          
          <div className="w-full h-[1px] bg-white/10 my-3"></div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-racing-silver">Early Bird Deadline</span>
            <span className="text-lg font-racing text-racing-red">April 23</span>
          </div>
        </motion.div>
        
        <motion.div
          variants={scaleIn}
          className="flex-1 p-5 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex flex-col justify-center items-center"
        >
          <div className="uppercase tracking-wider text-xs font-semibold text-white/90 mb-1 flex items-center">
            <Flag size={14} className="mr-1.5 text-racing-red" />
            RACING THEMED EVENT
          </div>
          <div className="bg-black/50 backdrop-blur-lg py-2.5 px-5 rounded-lg border border-white/10 mt-2">
            <span className="text-xl md:text-2xl font-racing font-bold text-white tracking-wider [text-shadow:_0_0_10px_rgba(255,255,255,0.3)]">
              2025
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroStats;
