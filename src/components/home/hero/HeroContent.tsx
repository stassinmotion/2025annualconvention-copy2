import { motion } from 'framer-motion';
import HeroHeader from './HeroHeader';
import HeroButtons from './HeroButtons';

interface HeroContentProps {
  memberSuiteUrl: string;
  moveButtonsInside?: boolean;
  noCardStyle?: boolean;
}

const HeroContent = ({ memberSuiteUrl, moveButtonsInside, noCardStyle }: HeroContentProps) => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
      }}
      className={`flex flex-col h-full flex-1 justify-between items-center ${noCardStyle ? 'text-center' : ''}`}
      style={{ minHeight: '100%' }}
    >
      <HeroHeader noCardStyle={noCardStyle} />
      {moveButtonsInside ? (
        <div className="mt-10">
          <HeroButtons memberSuiteUrl={memberSuiteUrl} />
        </div>
      ) : (
        <HeroButtons memberSuiteUrl={memberSuiteUrl} />
      )}
    </motion.div>
  );
};

export default HeroContent;
