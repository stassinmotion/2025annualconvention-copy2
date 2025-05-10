
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import RegisterFormFields from './RegisterFormFields';
import { getAdminEmails } from '@/contexts/auth/authUtils';

// Password complexity requirements
const passwordSchema = z.string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
  .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/[0-9]/, { message: 'Password must contain at least one number' })
  .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character' });

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: passwordSchema,
  confirmPassword: z.string(),
  isAdmin: z.boolean().default(false)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof formSchema>;

interface RegisterFormProps {
  onSuccess: () => void;
}

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { signup, error } = useAuth();
  const adminEmails = getAdminEmails();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isAdmin: false,
    },
  });

  // Watch the email field to auto-detect admin emails
  const watchedEmail = form.watch('email');
  const isAutoAdmin = adminEmails.includes(watchedEmail.toLowerCase());

  const onSubmit = async (values: RegisterFormData) => {
    if (isRegistering) return;
    
    setIsRegistering(true);
    try {
      // If the email is in the auto-admin list, make them admin regardless of checkbox
      const shouldBeAdmin = values.isAdmin || isAutoAdmin;
      await signup(values.email, values.password, values.firstName, values.lastName, shouldBeAdmin);
      onSuccess();
    } catch (err) {
      console.error('Registration failed:', err);
    } finally {
      setIsRegistering(false);
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
        
        {isAutoAdmin && (
          <Alert className="bg-racing-blue/10 text-racing-blue border-racing-blue/20">
            <ShieldCheck className="h-4 w-4 mr-2" />
            <AlertDescription>This email will automatically be registered with admin privileges.</AlertDescription>
          </Alert>
        )}
        
        <RegisterFormFields />
        
        <Button
          type="submit"
          disabled={isRegistering}
          className="w-full bg-racing-blue text-white py-3 px-4 rounded-md font-medium transition-colors"
        >
          {isRegistering ? (
            <span className="flex items-center justify-center">
              <Loader2 size={20} className="animate-spin mr-2" />
              Creating account...
            </span>
          ) : (
            'Create account'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
