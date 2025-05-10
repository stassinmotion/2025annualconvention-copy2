
import { Label } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VendorFormData } from './VendorForm';
import ExhibitBoothOption from './options/ExhibitBoothOption';
import BulkSpaceOption from './options/BulkSpaceOption';
import IndividualAttendeeOption from './options/IndividualAttendeeOption';
import AdditionalAttendeesOption from './options/AdditionalAttendeesOption';

interface VendorBoothOptionsProps {
  formData: VendorFormData;
  handleSelectChange: (name: string, value: string) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VendorBoothOptions = ({ 
  formData, 
  handleSelectChange, 
  handleCheckboxChange,
  handleChange,
  handleNumberChange
}: VendorBoothOptionsProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Registration Type</h3>
        <p className="text-sm text-gray-500">
          Please select your registration type (i.e. exhibitor, individual attendee, sponsors, etc.)
        </p>
        
        <RadioGroup 
          defaultValue="exhibitBooth" 
          className="space-y-4"
          onValueChange={(value) => handleSelectChange('registrationType', value)}
        >
          <ExhibitBoothOption 
            formData={formData} 
            handleSelectChange={handleSelectChange}
            handleCheckboxChange={handleCheckboxChange}
          />
          
          <BulkSpaceOption 
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
            handleChange={handleChange}
          />
          
          <IndividualAttendeeOption 
            formData={formData}
            handleSelectChange={handleSelectChange}
          />
          
          <AdditionalAttendeesOption 
            formData={formData}
            handleNumberChange={handleNumberChange}
          />
        </RadioGroup>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="sponsorshipLevel">Sponsorship Opportunities (Optional)</Label>
        <Select onValueChange={(value) => handleSelectChange('sponsorshipLevel', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select sponsorship level (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Sponsorship</SelectItem>
            <SelectItem value="platinum">Platinum Sponsor ($10,000)</SelectItem>
            <SelectItem value="gold">Gold Sponsor ($5,000)</SelectItem>
            <SelectItem value="silver">Silver Sponsor ($2,500)</SelectItem>
            <SelectItem value="bronze">Bronze Sponsor ($1,000)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default VendorBoothOptions;
