import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { navLinks } from './navigation/NavData';
import Logo from './navigation/Logo';
import DesktopNav from './navigation/DesktopNav';
import MobileNav from './navigation/MobileNav';
import { useAuth } from '@/contexts/auth';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileMenuButton from './navigation/mobile/MobileMenuButton';
import ViewModeToggle from './navigation/ViewModeToggle';
import UserMenu from './navigation/user/UserMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [forceMobileView, setForceMobileView] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    await logout();
  };

  const toggleViewMode = () => {
    setForceMobileView(!forceMobileView);
    // Save preference to localStorage
    localStorage.setItem('forceMobileView', (!forceMobileView).toString());
  };

  // Check for saved view mode preference on component mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('forceMobileView');
    if (savedPreference !== null) {
      setForceMobileView(savedPreference === 'true');
    }
  }, []);

  // Determine if we should use mobile view based on actual device size or forced preference
  const shouldUseMobileView = isMobile || forceMobileView;

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-xl",
        scrolled
          ? "bg-blue-950/90 border-b-2 border-blue-600 shadow-lg py-2"
          : "bg-black/70 border-b border-blue-800 py-4 shadow-md"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo placement moved to the leftmost position */}
          <Logo scrolled={scrolled} onClick={() => setIsOpen(false)} />
          
          {/* Desktop Navigation - only show if not in mobile view mode */}
          {!shouldUseMobileView && (
            <div className="overflow-hidden relative flex-1 px-4">
              <DesktopNav 
                navLinks={navLinks} 
                isActive={isActive} 
                scrolled={scrolled} 
                setIsOpen={setIsOpen} 
              />
            </div>
          )}
          
          {/* User Menu and View Toggle */}
          <div className={cn("flex items-center space-x-2", shouldUseMobileView ? "" : "hidden md:flex")}>
            {/* View mode toggle */}
            <ViewModeToggle 
              forceMobileView={forceMobileView}
              toggleViewMode={toggleViewMode}
              scrolled={scrolled}
              className="hidden md:flex"
            />

            {/* User Menu */}
            <UserMenu 
              isAuthenticated={isAuthenticated}
              user={user}
              onLogout={handleLogout}
              scrolled={scrolled}
            />
          </div>
          
          {/* Mobile Menu Button - show on small screens or if mobile view is forced */}
          {shouldUseMobileView && (
            <MobileMenuButton 
              isOpen={isOpen}
              toggleMenu={toggleMenu}
              scrolled={scrolled}
            />
          )}

          {/* View mode toggle for small screens */}
          <div className="md:hidden">
            <ViewModeToggle 
              forceMobileView={forceMobileView}
              toggleViewMode={toggleViewMode}
              scrolled={scrolled}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isOpen} 
        navLinks={navLinks} 
        isActive={isActive} 
        setIsOpen={setIsOpen} 
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
      />
    </nav>
  );
};

export default Navbar;
