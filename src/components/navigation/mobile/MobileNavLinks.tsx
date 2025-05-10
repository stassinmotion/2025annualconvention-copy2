
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MobileDropdownItems from './MobileDropdownItems';
import { motion } from 'framer-motion';

interface NavItem {
  title: string;
  path?: string;
  isDropdown?: boolean;
  dropdownItems?: {
    title: string;
    path: string;
  }[];
}

interface MobileNavLinksProps {
  navLinks: NavItem[];
  isActive: (path: string) => boolean;
  onLinkClick: () => void;
}

const MobileNavLinks = ({ navLinks, isActive, onLinkClick }: MobileNavLinksProps) => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="space-y-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navLinks.map((link, index) => 
        link.isDropdown ? (
          <motion.div 
            key={index} 
            className="space-y-1"
            variants={itemVariants}
          >
            <div className="py-2 px-4 font-medium text-lg bg-white text-racing-black rounded-lg">
              {link.title}
            </div>
            {link.dropdownItems && (
              <MobileDropdownItems 
                items={link.dropdownItems} 
                onItemClick={onLinkClick} 
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <Link
              to={link.path || ''}
              className={cn(
                "block py-2 px-4 text-lg font-medium transition-colors duration-200 bg-white rounded-lg flex items-center hover:scale-[1.02] active:scale-[0.98] transform",
                isActive(link.path || '') 
                  ? "text-racing-red" 
                  : "text-racing-black hover:bg-gray-100"
              )}
              onClick={onLinkClick}
            >
              {link.title}
            </Link>
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default MobileNavLinks;
