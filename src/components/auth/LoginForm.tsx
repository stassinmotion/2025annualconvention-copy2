
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/contexts/auth';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
  rememberMe: z.boolean().default(false)
});

interface LoginFormProps {
  onSuccess?: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { login, error } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isLoggingIn) return;
    
    setIsLoggingIn(true);
    try {
      // Set the remember me option before login
      localStorage.setItem('supabase.auth.persistSession', values.rememberMe.toString());
      
      await login(values.email, values.password);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {error && (
          <Alert variant="destructive" className="bg-racing-red/10 text-racing-red border-racing-red/20">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
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
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-1">
                <FormLabel className="text-racing-gray">Password</FormLabel>
                <Link to="/forgot-password" className="text-xs text-racing-blue hover:text-racing-red">
                  Forgot password?
                </Link>
              </div>
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
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md py-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal">
                  Remember me on this device
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          disabled={isLoggingIn}
          className="w-full bg-racing-blue text-white py-3 px-4 rounded-md font-medium transition-colors"
        >
          {isLoggingIn ? (
            <span className="flex items-center justify-center">
              <Loader2 size={20} className="animate-spin mr-2" />
              Signing in...
            </span>
          ) : (
            'Sign in'
          )}
        </Button>
        
        <div className="text-center text-sm text-racing-gray mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-racing-blue hover:text-racing-red">
            Register now
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
