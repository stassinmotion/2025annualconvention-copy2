
import { User } from 'lucide-react';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface MobileUserProfileProps {
  user: SupabaseUser;
}

const MobileUserProfile = ({ user }: MobileUserProfileProps) => {
  return (
    <div className="py-3 px-4 border-b border-gray-200 mb-2 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-racing-blue/20 flex items-center justify-center">
          <User size={20} className="text-racing-blue" />
        </div>
        <div>
          <p className="font-medium text-racing-black">{user.email?.split('@')[0]}</p>
          <p className="text-xs text-racing-gray">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileUserProfile;
