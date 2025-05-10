
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Loader2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { requestPasswordReset } from '@/contexts/auth/authUtils';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' })
});

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      await requestPasswordReset(values.email);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-racing-blue/5 to-racing-red/5 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 checkered-flag-bg opacity-5"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 checkered-flag-bg opacity-5"></div>
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
          
          <h2 className="text-2xl font-display font-bold text-center mb-6">Reset Your Password</h2>
          
          {success ? (
            <div className="space-y-4">
              <Alert className="bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  We've sent a password reset link to your email. Please check your inbox and follow the instructions.
                </AlertDescription>
              </Alert>
              <div className="flex justify-center mt-4">
                <Link to="/login">
                  <Button variant="outline" className="mt-2">
                    Back to Login
                  </Button>
                </Link>
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
                  Enter your email address and we'll send you a link to reset your password.
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-racing-gray">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="you@example.com" 
                          {...field} 
                          className="bg-white border-racing-silver/30"
                        />
                      </FormControl>
                      <FormMessage className="text-racing-red text-xs" />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-racing-blue text-white py-3 px-4 rounded-md font-medium transition-colors"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Mail size={18} className="mr-2" />
                      Send Reset Link
                    </span>
                  )}
                </Button>
                
                <div className="text-center text-sm text-racing-gray mt-4">
                  Remember your password?{' '}
                  <Link to="/login" className="text-racing-blue hover:text-racing-red">
                    Back to login
                  </Link>
                </div>
              </form>
            </Form>
          )}
        </div>
        
        <div className="mt-4 text-center">
          <Link to="/" className="inline-flex items-center text-sm text-racing-gray hover:text-racing-blue">
            <ArrowLeft size={16} className="mr-1" />
            Back to home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
