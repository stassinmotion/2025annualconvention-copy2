
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CountyFormData } from './CountyForm';

interface CountyProfessionalInfoProps {
  formData: CountyFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const CountyProfessionalInfo = ({ formData, handleChange }: CountyProfessionalInfoProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="county">County</Label>
        <Input
          id="county"
          name="county"
          placeholder="Enter your county"
          value={formData.county}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="title">Title/Position</Label>
        <Input
          id="title"
          name="title"
          placeholder="Enter your title or position"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
};

export default CountyProfessionalInfo;
