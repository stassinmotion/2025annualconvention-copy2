
import { z } from "zod";

export const sponsorshipFormSchema = z.object({
  companyName: z.string().min(2, { message: "Company name is required" }),
  contactName: z.string().min(2, { message: "Contact name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Address is required" }),
  sponsorshipOption: z.string(),
  specialRequests: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type SponsorshipFormValues = z.infer<typeof sponsorshipFormSchema>;

export const defaultFormValues: SponsorshipFormValues = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  address: "",
  sponsorshipOption: "",
  specialRequests: "",
  agreeToTerms: false,
};
