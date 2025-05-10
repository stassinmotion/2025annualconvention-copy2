import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  scrolled: boolean;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ to, isActive, children, scrolled, className, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "nav-link font-semibold px-3 py-2 transition-all duration-200 relative",
        scrolled ? "text-blue-100 hover:text-blue-400" : "text-white hover:text-blue-400",
        isActive && "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-2/3 after:h-0.5 after:bg-blue-500 after:rounded-full after:content-['']",
        isActive && (scrolled ? "text-blue-400" : "text-blue-400"),
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
