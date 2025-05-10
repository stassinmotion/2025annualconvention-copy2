
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CountyPersonalInfo from './CountyPersonalInfo';
import CountyProfessionalInfo from './CountyProfessionalInfo';
import CountyAccommodations from './CountyAccommodations';

export interface CountyFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  county: string;
  title: string;
  accommodations: boolean;
  dietaryRestrictions: string;
}

const CountyForm = () => {
  const [formData, setFormData] = useState<CountyFormData>({
    firstName: '',
    lastName: '',
    email: '',
    county: '',
    title: '',
    phone: '',
    accommodations: false,
    dietaryRestrictions: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, accommodations: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CountyPersonalInfo formData={formData} handleChange={handleChange} />
        <CountyProfessionalInfo formData={formData} handleChange={handleChange} />
      </div>
      
      <CountyAccommodations 
        formData={formData} 
        handleChange={handleChange}
        handleCheckboxChange={handleCheckboxChange}
      />
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="text-sm text-gray-500">
            Registration Fee: $350 per attendee
          </p>
          <Button type="submit" className="bg-racing-red hover:bg-red-700">
            Complete Registration
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CountyForm;
