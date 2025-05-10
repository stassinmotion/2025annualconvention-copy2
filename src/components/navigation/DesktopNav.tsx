import { Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavLink from './NavLink';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState, useRef, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  title: string;
  path?: string;
  isDropdown?: boolean;
  dropdownItems?: {
    title: string;
    path: string;
  }[];
}

interface DesktopNavProps {
  navLinks: NavItem[];
  isActive: (path: string) => boolean;
  scrolled: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DesktopNav = ({ navLinks, isActive, scrolled, setIsOpen }: DesktopNavProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const [showRightIndicator, setShowRightIndicator] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftIndicator(scrollLeft > 10);
      setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Listen for scroll events to update indicators
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  // Check on window resize
  useEffect(() => {
    window.addEventListener('resize', checkScrollPosition);
    return () => {
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left scroll indicator */}
      {showLeftIndicator && (
        <button 
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full",
            scrolled ? "bg-white/80 text-racing-black" : "bg-black/30 text-white"
          )}
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
      )}
      
      {/* Scrollable navigation area */}
      <div
        ref={scrollContainerRef}
        className="flex md:items-center space-x-2 md:space-x-4 overflow-x-auto hide-scrollbar py-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {navLinks.map((link, index) => 
          link.isDropdown ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger className={cn(
                "nav-link flex items-center whitespace-nowrap font-semibold px-3 py-2 transition-all duration-200 relative hover:text-blue-400",
                scrolled ? "text-blue-100" : "text-white"
              )}>
                {link.title} <ChevronDown size={14} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-blue-950/90 backdrop-blur-xl border border-blue-700 shadow-xl rounded-xl overflow-hidden z-50 mt-2"
                align="end"
              >
                {link.dropdownItems?.map((item, idx) => (
                  <Link key={idx} to={item.path} onClick={() => setIsOpen(false)}>
                    <DropdownMenuItem 
                      className="px-4 py-2 text-blue-100 hover:bg-blue-800/60 hover:text-blue-400 cursor-pointer transition-all duration-150"
                    >
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink
              key={index}
              to={link.path || ''}
              isActive={isActive(link.path || '')}
              scrolled={scrolled}
              onClick={() => setIsOpen(false)}
              className="whitespace-nowrap"
            >
              {link.title}
            </NavLink>
          )
        )}
      </div>
      
      {/* Right scroll indicator */}
      {showRightIndicator && (
        <button 
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full",
            scrolled ? "bg-white/80 text-racing-black" : "bg-black/30 text-white"
          )}
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
};

export default DesktopNav;
