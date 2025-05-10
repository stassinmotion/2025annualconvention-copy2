import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { updatePassword } from '@/contexts/auth/authUtils';
import { supabase } from '@/integrations/supabase/client';

// Password complexity requirements
const passwordSchema = z.string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
  .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/[0-9]/, { message: 'Password must contain at least one number' })
  .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character' });

const formSchema = z.object({
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const ResetPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validResetLink, setValidResetLink] = useState(false);
  const [checkingLink, setCheckingLink] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is in a valid password reset session
    const checkResetSession = async () => {
      try {
        const { data, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          throw sessionError;
        }
        
        if (data?.session) {
          setValidResetLink(true);
        } else {
          setError("Invalid or expired password reset link. Please request a new password reset.");
          setValidResetLink(false);
        }
      } catch (err) {
        console.error("Error checking reset session:", err);
        setError("Error verifying your password reset session. Please try again or request a new reset link.");
        setValidResetLink(false);
      } finally {
        setCheckingLink(false);
      }
    };
    
    checkResetSession();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      await updatePassword(values.password);
      setSuccess(true);
      
      // Redirect to login after successful password reset
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (checkingLink) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-racing-blue/5 to-racing-red/5 px-4">
        <div className="flex flex-col items-center">
          <Loader2 size={40} className="animate-spin text-racing-blue mb-4" />
          <p className="text-racing-gray">Verifying your password reset link...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-racing-blue/5 to-racing-red/5 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-racing-red"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-racing-blue"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 p-8">
          <div className="flex justify-center mb-6">
            <div className="font-display font-bold text-xl">
              <span className="text-racing-black">MAS</span>
              <span className="text-racing-red">2025</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-display font-bold text-center mb-6">Create New Password</h2>
          
          {!validResetLink ? (
            <Alert variant="destructive" className="bg-racing-red/10 text-racing-red border-racing-red/20">
              <AlertDescription>{error}</AlertDescription>
              <div className="mt-4">
                <Button 
                  onClick={() => navigate('/forgot-password')} 
                  className="w-full bg-racing-blue text-white"
                >
                  Request New Reset Link
                </Button>
              </div>
            </Alert>
          ) : success ? (
            <div className="space-y-4">
              <Alert className="bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  Your password has been reset successfully. You will be redirected to the login page in a moment.
                </AlertDescription>
              </Alert>
              <div className="flex justify-center mt-4">
                <Button 
                  onClick={() => navigate('/login')} 
                  className="bg-racing-blue text-white"
                >
                  Go to Login
                </Button>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {error && (
                  <Alert variant="destructive" className="bg-racing-red/10 text-racing-red border-racing-red/20">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="text-center text-racing-gray mb-4">
                  Enter your new password below. Make sure it's secure.
                </div>
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-racing-gray">New Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          className="bg-white border-racing-silver/30"
                        />
                      </FormControl>
                      <FormMessage className="text-racing-red text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-racing-gray">Confirm New Password</FormLabel>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="••••••••" 
                          {...field} 
                          className="bg-white border-racing-silver/30"
                        />
                      </FormControl>
                      <FormMessage className="text-racing-red text-xs" />
                    </FormItem>
                  )}
                />
                
                <div className="text-xs text-racing-gray space-y-1 mt-1">
                  <p>Password must:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Be at least 8 characters long</li>
                    <li>Include at least one uppercase letter</li>
                    <li>Include at least one lowercase letter</li>
                    <li>Include at least one number</li>
                    <li>Include at least one special character</li>
                  </ul>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-racing-blue text-white py-3 px-4 rounded-md font-medium transition-colors"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Resetting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Lock size={18} className="mr-2" />
                      Reset Password
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
