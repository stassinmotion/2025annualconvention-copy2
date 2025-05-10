
import React from 'react';
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface SpecialRequestsFieldProps {
  form: UseFormReturn<any>;
}

const SpecialRequestsField: React.FC<SpecialRequestsFieldProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="specialRequests"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Special Requests (Optional)</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Any special requirements or questions about your sponsorship"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SpecialRequestsField;
