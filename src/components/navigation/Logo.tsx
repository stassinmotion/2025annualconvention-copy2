
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LogoProps {
  scrolled: boolean;
  onClick: () => void;
}

const Logo = ({
  scrolled,
  onClick
}: LogoProps) => {
  return (
    <Link to="/" className="flex items-center" onClick={onClick}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "h-12 w-auto relative",
          scrolled ? "drop-shadow-md" : "drop-shadow-lg"
        )}
      >
        <img 
          alt="96th Annual Convention Logo" 
          className="h-full w-auto transition-all duration-300" 
          src="https://files.constantcontact.com/d78fca3d801/421281ba-1221-4224-8fbb-112263b138f7.png?rdr=true" 
        />
      </motion.div>
    </Link>
  );
};

export default Logo;

