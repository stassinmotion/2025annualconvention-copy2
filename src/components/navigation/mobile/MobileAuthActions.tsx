import { Link } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileAuthActionsProps {
  isAuthenticated: boolean;
  onLogout?: () => void;
  onActionClick: () => void;
}

const MobileAuthActions = ({ 
  isAuthenticated, 
  onLogout, 
  onActionClick 
}: MobileAuthActionsProps) => {
  if (!isAuthenticated) {
    return (
      <div className="pt-4 mt-4 border-t border-gray-200">
        {/*
        <Link
          to="/login"
          className="block py-2 px-4 text-racing-black hover:bg-gray-100 rounded-lg flex items-center"
          onClick={onActionClick}
        >
          <LogIn size={18} className="mr-3 text-racing-red" />
          Sign in
        </Link>
        */}
        <Link
          to="/register"
          className="block py-2 px-4 text-racing-black hover:bg-gray-100 rounded-lg flex items-center"
          onClick={onActionClick}
        >
          <LogIn size={18} className="mr-3 text-racing-red" />
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-4 mt-4 border-t border-gray-200">
      <Button
        variant="ghost"
        className="w-full py-2 px-4 text-red-500 hover:bg-gray-100 rounded-lg flex items-center justify-start"
        onClick={() => {
          if (onLogout) onLogout();
          onActionClick();
        }}
      >
        <LogOut size={18} className="mr-3 text-red-500" />
        Logout
      </Button>
    </div>
  );
};

export default MobileAuthActions;
