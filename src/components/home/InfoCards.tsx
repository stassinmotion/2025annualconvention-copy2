
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const InfoCards = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="container mx-auto px-4 md:px-6 pb-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="flex items-start space-x-4">
              <Calendar className="w-8 h-8 text-racing-blue" />
              <div>
                <h3 className="font-display font-medium text-lg mb-1">4 Days</h3>
                <p className="text-sm text-racing-gray">Of intensive learning and networking</p>
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-racing-red" />
              <div>
                <h3 className="font-display font-medium text-lg mb-1">Premier Venue</h3>
                <p className="text-sm text-racing-gray">Mississippi Coast Convention Center</p>
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-racing-blue" />
              <div>
                <h3 className="font-display font-medium text-lg mb-1">500+ Attendees</h3>
                <p className="text-sm text-racing-gray">From counties across Mississippi</p>
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-racing-red" />
              <div>
                <h3 className="font-display font-medium text-lg mb-1">Top Speakers</h3>
                <p className="text-sm text-racing-gray">Industry experts and thought leaders</p>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoCards;
