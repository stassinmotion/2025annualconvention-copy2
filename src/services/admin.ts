
import { supabase } from '@/integrations/supabase/client';

export const checkAdminStatus = async () => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user?.email === 'ygamez@massup.org') {
      console.log("Checking admin status for ygamez@massup.org");
      const { data, error } = await supabase.rpc('set_user_as_admin', {
        user_email: 'ygamez@massup.org'
      });
      
      if (error) {
        console.error("Error setting admin status:", error);
      } else {
        console.log("Admin status set successfully");
      }
    }
  } catch (error) {
    console.error("Admin check error:", error);
  }
};
