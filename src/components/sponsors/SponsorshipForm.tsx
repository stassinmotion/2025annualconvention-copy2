
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Import refactored components
import SponsorshipFormHeader from './form/SponsorshipFormHeader';
import CompanyFields from './form/CompanyFields';
import AddressField from './form/AddressField';
import SponsorshipOptionField from './form/SponsorshipOptionField';
import SpecialRequestsField from './form/SpecialRequestsField';
import AgreementField from './form/AgreementField';
import FormActions from './form/FormActions';
import { sponsorshipFormSchema, SponsorshipFormValues, defaultFormValues } from './form/SponsorshipFormSchema';

interface SponsorshipFormProps {
  sponsorType: string;
  option: string | null;
  onClose: () => void;
}

const SponsorshipForm: React.FC<SponsorshipFormProps> = ({ sponsorType, option, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<SponsorshipFormValues>({
    resolver: zodResolver(sponsorshipFormSchema),
    defaultValues: {
      ...defaultFormValues,
      sponsorshipOption: option || "",
    },
  });

  const onSubmit = async (values: SponsorshipFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await supabase.functions.invoke("send-sponsorship-request", {
        body: {
          ...values,
          sponsorType: sponsorType,
        },
      });

      if (response.error) {
        throw new Error(response.error.message || "Failed to send request");
      }
      
      toast({
        title: "Sponsorship Request Submitted",
        description: "Your request has been sent successfully. Our team will contact you soon.",
        variant: "default",
      });
      
      onClose();
    } catch (error) {
      console.error("Error submitting sponsorship request:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SponsorshipFormHeader sponsorType={sponsorType} option={option} />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CompanyFields form={form} />
          <AddressField form={form} />
          
          {!option && <SponsorshipOptionField form={form} />}
          
          <SpecialRequestsField form={form} />
          <AgreementField form={form} />
          <FormActions onClose={onClose} isSubmitting={isSubmitting} />
        </form>
      </Form>
    </>
  );
};

export default SponsorshipForm;
