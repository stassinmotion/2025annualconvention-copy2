
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { VendorFormData } from './VendorForm';

interface VendorContactInfoProps {
  formData: VendorFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const VendorContactInfo = ({ formData, handleChange }: VendorContactInfoProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="contactName">Contact Person</Label>
        <Input
          id="contactName"
          name="contactName"
          placeholder="Enter contact person's name"
          value={formData.contactName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          placeholder="Enter your street address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          name="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="state">State</Label>
        <Input
          id="state"
          name="state"
          placeholder="Enter your state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="zipCode">Zip Code</Label>
        <Input
          id="zipCode"
          name="zipCode"
          placeholder="Enter your zip code"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
};

export default VendorContactInfo;
