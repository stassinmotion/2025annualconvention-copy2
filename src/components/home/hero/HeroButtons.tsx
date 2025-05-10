
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink } from 'lucide-react';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

interface HeroButtonsProps {
  memberSuiteUrl: string;
}

const HeroButtons = ({ memberSuiteUrl }: HeroButtonsProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="flex flex-col sm:flex-row gap-4 md:mt-2"
    >
      <a href={memberSuiteUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
        <Button 
          variant="accent" 
          size="lg"
          className="w-full shadow-lg hover:shadow-xl hover:shadow-racing-red/20 transition-all duration-300 font-medium bg-gradient-to-r from-racing-red to-racing-red/90 [text-shadow:_0_0_10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
        >
          Register Now
          <ExternalLink size={16} />
        </Button>
      </a>
      
      <Link to="/agenda" className="w-full sm:w-auto">
        <Button 
          variant="outline" 
          size="lg"
          className="w-full group transition-all duration-300 backdrop-blur-sm bg-white/5 border-white/30 text-white hover:bg-white/10 [text-shadow:_0_0_8px_rgba(255,255,255,0.2)] flex items-center justify-center"
        >
          View Schedule
          <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </motion.div>
  );
};

export default HeroButtons;
