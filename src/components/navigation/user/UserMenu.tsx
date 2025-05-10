import { Link } from 'react-router-dom';
import { User, LogOut, LogIn, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RegisterButton from '../RegisterButton';

interface UserMenuProps {
  isAuthenticated: boolean;
  user: SupabaseUser | null;
  onLogout: () => void;
  scrolled: boolean;
  isMobile?: boolean;
}

const UserMenu = ({ 
  isAuthenticated, 
  user, 
  onLogout, 
  scrolled,
  isMobile = false
}: UserMenuProps) => {
  if (isMobile) {
    return null; // Mobile user menu is handled in MobileNav
  }

  return (
    <div className="flex items-center space-x-2">
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "flex items-center gap-2",
                scrolled ? "text-racing-black hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
            >
              <User size={18} />
              {user?.email?.split('@')[0]}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/dashboard" className="cursor-pointer">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/my-schedule" className="cursor-pointer flex items-center">
                <Calendar size={16} className="mr-2" />
                My Schedule
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout} className="cursor-pointer text-red-500 focus:text-red-500">
              <LogOut size={16} className="mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          {/*
          <Link to="/login">
            <Button variant="ghost" size="sm" className={cn(
              scrolled ? "text-racing-black hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}>
              <LogIn size={18} className="mr-2" />
              Sign in
            </Button>
          </Link>
          */}
          <RegisterButton />
        </>
      )}
    </div>
  );
};

export default UserMenu;
