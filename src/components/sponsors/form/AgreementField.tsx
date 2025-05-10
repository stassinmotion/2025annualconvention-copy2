
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
import { Checkbox } from "@/components/ui/checkbox";

interface AgreementFieldProps {
  form: UseFormReturn<any>;
}

const AgreementField: React.FC<AgreementFieldProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="agreeToTerms"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              I agree to the terms and conditions for MAS 2025 Convention sponsorships
            </FormLabel>
            <FormDescription>
              By checking this box, you confirm your interest in the selected sponsorship opportunity.
            </FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default AgreementField;
