
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { CountyFormData } from './CountyForm';

interface CountyAccommodationsProps {
  formData: CountyFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (checked: boolean) => void;
}

const CountyAccommodations = ({ formData, handleChange, handleCheckboxChange }: CountyAccommodationsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="dietaryRestrictions">Dietary Restrictions (Optional)</Label>
        <Input
          id="dietaryRestrictions"
          name="dietaryRestrictions"
          placeholder="Please list any dietary restrictions"
          value={formData.dietaryRestrictions}
          onChange={handleChange}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox
          id="accommodations"
          checked={formData.accommodations}
          onCheckedChange={handleCheckboxChange}
        />
        <Label htmlFor="accommodations" className="cursor-pointer">
          I require special accommodations (we will contact you for details)
        </Label>
      </div>
    </>
  );
};

export default CountyAccommodations;
