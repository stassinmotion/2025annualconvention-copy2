
import { useFormContext } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RegisterFormData } from './RegisterForm';

const RegisterFormFields = () => {
  const form = useFormContext<RegisterFormData>();
  
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-racing-gray">First Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="First name" 
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
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-racing-gray">Last Name</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Last name" 
                  {...field} 
                  className="bg-white border-racing-silver/30"
                />
              </FormControl>
              <FormMessage className="text-racing-red text-xs" />
            </FormItem>
          )}
        />
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
      
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-racing-gray">Password</FormLabel>
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
            <FormLabel className="text-racing-gray">Confirm Password</FormLabel>
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
        name="isAdmin"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-racing-gray">
                Register as Administrator
              </FormLabel>
              <p className="text-sm text-racing-gray/70">
                This account will have admin privileges to manage the site.
              </p>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default RegisterFormFields;
