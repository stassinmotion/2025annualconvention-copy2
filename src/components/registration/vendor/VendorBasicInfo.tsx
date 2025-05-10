
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { VendorFormData } from './VendorForm';

interface VendorBasicInfoProps {
  formData: VendorFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const VendorBasicInfo = ({ formData, handleChange }: VendorBasicInfoProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="companyName">Company/Organization Name</Label>
      <Input
        id="companyName"
        name="companyName"
        placeholder="Enter your company name"
        value={formData.companyName}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default VendorBasicInfo;
