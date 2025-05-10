
import { cn } from '@/lib/utils';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { secondaryNavItems } from './NavData';
import MobileUserProfile from './mobile/MobileUserProfile';
import MobileNavLinks from './mobile/MobileNavLinks';
import MobileSecondaryNav from './mobile/MobileSecondaryNav';
import MobileAuthActions from './mobile/MobileAuthActions';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  title: string;
  path?: string;
  isDropdown?: boolean;
  dropdownItems?: {
    title: string;
    path: string;
  }[];
}

interface MobileNavProps {
  isOpen: boolean;
  navLinks: NavItem[];
  isActive: (path: string) => boolean;
  setIsOpen: (isOpen: boolean) => void;
  isAuthenticated?: boolean;
  user?: SupabaseUser | null;
  onLogout?: () => void;
}

const MobileNav = ({ 
  isOpen, 
  navLinks, 
  isActive, 
  setIsOpen,
  isAuthenticated = false,
  user,
  onLogout
}: MobileNavProps) => {
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 z-50 bg-white"
          style={{ top: "64px" }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <ScrollArea className="h-[calc(100vh-64px)]">
            <div className="flex flex-col p-4 space-y-4">
              {isAuthenticated && user && (
                <MobileUserProfile user={user} />
              )}
              
              <MobileNavLinks 
                navLinks={navLinks} 
                isActive={isActive} 
                onLinkClick={handleCloseMenu} 
              />

              <MobileSecondaryNav 
                items={secondaryNavItems} 
                onItemClick={handleCloseMenu} 
              />

              <MobileAuthActions 
                isAuthenticated={isAuthenticated} 
                onLogout={onLogout}
                onActionClick={handleCloseMenu}
              />
              
              {/* Add padding at the bottom to ensure content doesn't get cut off by any UI elements */}
              <div className="h-20"></div>
            </div>
          </ScrollArea>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
