
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { VendorFormData } from '../VendorForm';

interface BulkSpaceOptionProps {
  formData: VendorFormData;
  handleCheckboxChange: (name: string, checked: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const BulkSpaceOption = ({ 
  formData, 
  handleCheckboxChange,
  handleChange
}: BulkSpaceOptionProps) => {
  return (
    <div className="space-y-2 border p-4 rounded-md">
      <div className="flex items-start">
        <RadioGroupItem value="bulkSpace" id="bulkSpace" className="mt-1" />
        <div className="ml-3">
          <Label htmlFor="bulkSpace" className="font-medium">BULK SPACE</Label>
          <p className="text-sm text-gray-600 mt-1">
            Subject to availability. Bulk space will be charged at $1.65 per square foot with a minimum purchase of 300 square feet (10'x30' block). 
            Bulk space does not include booth furnishings. Exhibitors must purchase at least one exhibit booth to be eligible for bulk space purchase. 
            Members receive 10% off bulk space.
          </p>
        </div>
      </div>
      
      {formData.registrationType === 'bulkSpace' && (
        <div className="ml-8 mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox 
                  id="bulk-space-inside" 
                  checked={formData.bulkSpaceInside}
                  onCheckedChange={(checked) => {
                    handleCheckboxChange('bulkSpaceInside', checked === true);
                  }}
                />
                <Label htmlFor="bulk-space-inside" className="ml-2">Inside Bulk Space</Label>
              </div>
              
              {formData.bulkSpaceInside && (
                <div className="ml-6">
                  <Label htmlFor="bulkSpaceDimensionsInside" className="text-sm">Dimensions:</Label>
                  <Input 
                    id="bulkSpaceDimensionsInside" 
                    name="bulkSpaceDimensionsInside" 
                    value={formData.bulkSpaceDimensionsInside}
                    onChange={handleChange}
                    placeholder="e.g., 10'x30'"
                    className="mt-1"
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <Checkbox 
                  id="bulk-space-outside" 
                  checked={formData.bulkSpaceOutside}
                  onCheckedChange={(checked) => {
                    handleCheckboxChange('bulkSpaceOutside', checked === true);
                  }}
                />
                <Label htmlFor="bulk-space-outside" className="ml-2">Outside Bulk Space</Label>
              </div>
              
              {formData.bulkSpaceOutside && (
                <div className="ml-6">
                  <Label htmlFor="bulkSpaceDimensionsOutside" className="text-sm">Dimensions:</Label>
                  <Input 
                    id="bulkSpaceDimensionsOutside" 
                    name="bulkSpaceDimensionsOutside" 
                    value={formData.bulkSpaceDimensionsOutside}
                    onChange={handleChange}
                    placeholder="e.g., 10'x30'"
                    className="mt-1"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BulkSpaceOption;
