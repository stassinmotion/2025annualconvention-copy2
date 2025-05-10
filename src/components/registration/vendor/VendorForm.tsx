
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import VendorBasicInfo from './VendorBasicInfo';
import VendorContactInfo from './VendorContactInfo';
import VendorBoothOptions from './VendorBoothOptions';
import VendorCompanyInfo from './VendorCompanyInfo';
import { format } from 'date-fns';

export type VendorFormData = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  boothSize: string;
  description: string;
  sponsorshipLevel: string;
  registrationType: string;
  exhibitorPortal: string;
  additionalAttendees: number;
  bulkSpaceInside: boolean;
  bulkSpaceOutside: boolean;
  bulkSpaceDimensionsInside: string;
  bulkSpaceDimensionsOutside: string;
  membershipType: string;
  boothRate: string;
  additionalBoothRate: string;
  submissionDate: string;
};

const VendorForm = () => {
  const currentDate = format(new Date(), 'yyyy-MM-dd');
  
  const [formData, setFormData] = useState<VendorFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    boothSize: 'standard',
    description: '',
    sponsorshipLevel: '',
    registrationType: 'exhibitBooth',
    exhibitorPortal: '',
    additionalAttendees: 0,
    bulkSpaceInside: false,
    bulkSpaceOutside: false,
    bulkSpaceDimensionsInside: '',
    bulkSpaceDimensionsOutside: '',
    membershipType: 'member',
    boothRate: '',
    additionalBoothRate: '',
    submissionDate: currentDate
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("Registration submitted successfully!");
    // Form submission logic would go here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h3 className="text-xl font-medium">Vendor Registration Form</h3>
        <div className="text-right">
          <p className="text-sm text-gray-500">Submission Date:</p>
          <p className="font-medium">{currentDate}</p>
        </div>
      </div>
      
      <VendorBasicInfo 
        formData={formData} 
        handleChange={handleChange} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VendorContactInfo 
          formData={formData} 
          handleChange={handleChange} 
        />
      </div>
      
      <VendorCompanyInfo 
        formData={formData} 
        handleChange={handleChange} 
      />
      
      <VendorBoothOptions 
        formData={formData}
        handleSelectChange={handleSelectChange}
        handleCheckboxChange={handleCheckboxChange}
        handleChange={handleChange}
        handleNumberChange={handleNumberChange}
      />
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-end">
          <Button type="submit" className="bg-racing-red hover:bg-red-700">
            Submit Registration
          </Button>
        </div>
      </div>
    </form>
  );
};

export default VendorForm;
