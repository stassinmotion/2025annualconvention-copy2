
import { supabase } from '@/integrations/supabase/client';
import { UserProfile } from './types';
import { toast } from '@/components/ui/use-toast';

// Get admin emails from environment or use default list
export const getAdminEmails = (): string[] => {
  // Check if ADMIN_EMAILS is defined as an environment variable
  const adminEmailsStr = import.meta.env.VITE_ADMIN_EMAILS;
  if (adminEmailsStr) {
    return adminEmailsStr.split(',').map(email => email.trim().toLowerCase());
  }
  
  // Fallback to hardcoded list
  return ['ygamez@massup.org', 'stassinmotion@gmail.com'];
};

// List of emails that should automatically be granted admin access
const AUTO_ADMIN_EMAILS = getAdminEmails();

export const fetchUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    console.log("Fetching profile for user:", userId);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    console.log("Profile data:", data);
    return data as UserProfile;
  } catch (error) {
    console.error('Error in fetchUserProfile:', error);
    return null;
  }
};

export const loginUser = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  
  if (error) {
    toast({
      title: "Login failed",
      description: error.message,
      variant: "destructive"
    });
    throw error;
  }
  
  if (data?.user) {
    // Fetch user profile to get role
    const profileData = await fetchUserProfile(data.user.id);

    // If user is admin, show admin toast
    if (profileData && profileData.role === 'admin') {
      toast({
        title: "Admin login successful",
        description: "Welcome to the admin dashboard!",
      });
    } else {
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
    }
  }
  
  return data;
};

export const signupUser = async (email: string, password: string, firstName: string, lastName: string, isAdmin: boolean = false) => {
  // Check if email should automatically be an admin
  const shouldBeAdmin = isAdmin || AUTO_ADMIN_EMAILS.includes(email.toLowerCase());
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        role: shouldBeAdmin ? 'admin' : 'attendee'
      }
    }
  });
  
  if (error) {
    toast({
      title: "Registration failed",
      description: error.message,
      variant: "destructive"
    });
    throw error;
  }
  
  if (data?.user) {
    if (shouldBeAdmin) {
      // Make an additional call to ensure the profile is marked as admin
      // This is needed because the trigger might not set the role correctly from metadata
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ role: 'admin' })
        .eq('id', data.user.id);
      
      if (profileError) {
        console.error('Error setting admin role:', profileError);
      }
      
      toast({
        title: "Admin registration successful",
        description: "Your admin account has been created. Please check your email for verification.",
      });
    } else {
      toast({
        title: "Registration successful",
        description: "Your account has been created. Please check your email for verification.",
      });
    }
  }
  
  return data;
};

export const logoutUser = async () => {
  try {
    console.log("Logging out user");
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    }
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    
    // Force a reload of the application to clear any cached state
    window.location.href = '/';
    
    return true;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

// Password reset functionality
export const requestPasswordReset = async (email: string) => {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      toast({
        title: "Password reset failed",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    }

    toast({
      title: "Password reset email sent",
      description: "Please check your email for the password reset link.",
    });

    return data;
  } catch (error) {
    console.error('Password reset error:', error);
    throw error;
  }
};

// Set new password after reset
export const updatePassword = async (newPassword: string) => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword
    });

    if (error) {
      toast({
        title: "Password update failed",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    }

    toast({
      title: "Password updated",
      description: "Your password has been updated successfully.",
    });

    return data;
  } catch (error) {
    console.error('Password update error:', error);
    throw error;
  }
};
