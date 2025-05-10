
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
  scrolled: boolean;
}

const MobileMenuButton = ({ isOpen, toggleMenu, scrolled }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={toggleMenu}
      className={cn(
        "md:hidden focus:outline-none p-2 rounded-lg",
        scrolled 
          ? "text-racing-black bg-gray-100 hover:bg-gray-200" 
          : "text-white bg-white/10 hover:bg-white/20"
      )}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileMenuButton;
