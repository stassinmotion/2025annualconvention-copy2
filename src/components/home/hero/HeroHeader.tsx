import { MapPin, Clock, Flag } from 'lucide-react';
import { motion } from 'framer-motion';
import DecoderText from '@/components/DecoderText';

interface HeroHeaderProps {
  noCardStyle?: boolean;
}

const HeroHeader = ({ noCardStyle }: HeroHeaderProps = {}) => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, delay: 0.3 } }
  };

  return (
    <div className={noCardStyle ? "" : "bg-black/70 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8"}>
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={`text-xs sm:text-sm tracking-widest text-white/90 uppercase font-semibold mb-2 ${noCardStyle ? 'text-center' : ''}`}
      >
        MISSISSIPPI ASSOCIATION OF SUPERVISORS
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <div className="w-full flex justify-center">
          <span
            style={{
              fontFamily: 'Audio Wide, sans-serif',
              fontWeight: 700,
              fontSize: '4rem',
              color: '#E21A2C',
              textShadow: '0 2px 16px rgba(0,0,0,0.18)',
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              textTransform: 'uppercase',
            }}
          >
            <DecoderText text="96th Annual Convention" duration={1600} />
          </span>
        </div>
      </motion.div>
      
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-8 mt-6 font-sans"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <div className="flex items-center justify-center">
          <MapPin size={18} className="text-racing-silver mr-2" />
          <span className="text-base sm:text-lg text-racing-silver">Biloxi, Mississippi</span>
        </div>
        <div className="flex items-center justify-center">
          <Clock size={18} className="text-racing-red mr-2" />
          <span className="text-base sm:text-lg font-bold text-white">JUNE 9 - 12, 2025</span>
        </div>
        <div className="flex items-center justify-center">
          <Flag size={18} className="text-racing-silver mr-2" />
          <span className="text-base text-racing-silver">START YOUR ENGINES</span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroHeader;
