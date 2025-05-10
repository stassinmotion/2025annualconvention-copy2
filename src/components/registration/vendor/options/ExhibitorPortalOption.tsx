
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { VendorFormData } from '../VendorForm';

interface ExhibitorPortalOptionProps {
  formData: VendorFormData;
  handleSelectChange: (name: string, value: string) => void;
}

const ExhibitorPortalOption = ({ 
  formData, 
  handleSelectChange 
}: ExhibitorPortalOptionProps) => {
  return (
    <div>
      <h4 className="font-medium mb-2">Exhibitor Portal</h4>
      <p className="text-sm text-gray-500 mb-2">
        NEW Exhibitor Portal Includes Lead Capture! Upload your company info including contact info, 
        logo, video, collateral docs, fellow booth staff, manage your lead captures & schedule meetings with attendees.
      </p>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <Checkbox 
            id="portal-member" 
            checked={formData.exhibitorPortal === 'member'}
            onCheckedChange={(checked) => {
              if (checked) handleSelectChange('exhibitorPortal', 'member');
            }}
          />
          <Label htmlFor="portal-member" className="ml-2">Member Rate - $75</Label>
        </div>
        
        <div className="flex items-center">
          <Checkbox 
            id="portal-nonmember" 
            checked={formData.exhibitorPortal === 'nonmember'}
            onCheckedChange={(checked) => {
              if (checked) handleSelectChange('exhibitorPortal', 'nonmember');
            }}
          />
          <Label htmlFor="portal-nonmember" className="ml-2">Nonmember rate - $90</Label>
        </div>
      </div>
    </div>
  );
};

export default ExhibitorPortalOption;
