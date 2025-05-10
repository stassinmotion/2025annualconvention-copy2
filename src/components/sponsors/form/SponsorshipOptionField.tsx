
import React from 'react';
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SponsorshipOptionFieldProps {
  form: UseFormReturn<any>;
}

const SponsorshipOptionField: React.FC<SponsorshipOptionFieldProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="sponsorshipOption"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Sponsorship Option</FormLabel>
          <FormControl>
            <Input placeholder="Specify your desired sponsorship option" {...field} />
          </FormControl>
          <FormDescription>
            Please indicate your preferred sponsorship option if not already selected.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SponsorshipOptionField;
