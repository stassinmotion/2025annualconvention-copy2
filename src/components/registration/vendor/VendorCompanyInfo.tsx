
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { VendorFormData } from './VendorForm';

interface VendorCompanyInfoProps {
  formData: VendorFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const VendorCompanyInfo = ({ formData, handleChange }: VendorCompanyInfoProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="description">Company Description</Label>
      <Textarea
        id="description"
        name="description"
        placeholder="Brief description of your company/products (max 200 words)"
        className="min-h-[100px]"
        value={formData.description}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default VendorCompanyInfo;
