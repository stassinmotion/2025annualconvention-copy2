
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { VendorFormData } from '../VendorForm';
import BoothRateSelector from './BoothRateSelector';
import ExhibitorPortalOption from './ExhibitorPortalOption';

interface ExhibitBoothOptionProps {
  formData: VendorFormData;
  handleSelectChange: (name: string, value: string) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

const ExhibitBoothOption = ({ 
  formData, 
  handleSelectChange, 
  handleCheckboxChange 
}: ExhibitBoothOptionProps) => {
  return (
    <div className="space-y-2 border p-4 rounded-md">
      <div className="flex items-start">
        <RadioGroupItem value="exhibitBooth" id="exhibitBooth" className="mt-1" />
        <div className="ml-3">
          <Label htmlFor="exhibitBooth" className="font-medium">EXHIBIT BOOTH</Label>
          <p className="text-sm text-gray-600 mt-1">
            Includes two attendees; one per company compd MAS County Officials Directory; one 10'w x 10'd exhibit booth, 
            with 8' h back drapes and 3' h side dividers; one booth sign; one 6' skirted display table and two chairs. 
            Cutoff date- May 31, 2024.
          </p>
          <p className="text-sm text-gray-600 mt-1">
            You will request your booth preference from online floorplan when opened. 
            We will notify you once it has been opened. You will be able to view available booths.
          </p>
        </div>
      </div>
      
      {formData.registrationType === 'exhibitBooth' && (
        <div className="ml-8 mt-4 space-y-6">
          <div>
            <h4 className="font-medium mb-2">Membership Type</h4>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="member" 
                  id="member" 
                  onClick={() => handleSelectChange('membershipType', 'member')} 
                />
                <Label htmlFor="member">MAS Affiliate Partner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="state" 
                  id="state" 
                  onClick={() => handleSelectChange('membershipType', 'state')} 
                />
                <Label htmlFor="state">State Agency</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="nonmember" 
                  id="nonmember" 
                  onClick={() => handleSelectChange('membershipType', 'nonmember')} 
                />
                <Label htmlFor="nonmember">Non-member</Label>
              </div>
            </div>
          </div>
          
          <BoothRateSelector 
            formData={formData} 
            handleSelectChange={handleSelectChange} 
            title="Booth Rate (includes 2 compd attendees)"
            rateType="boothRate"
            description="Early bird rate only available to MAS Affiliate Partners."
          />
          
          <ExhibitorPortalOption
            formData={formData}
            handleSelectChange={handleSelectChange}
          />
          
          <Separator />
          
          <BoothRateSelector 
            formData={formData} 
            handleSelectChange={handleSelectChange} 
            title="Additional Booth Rate (includes 1 compd attendee)"
            rateType="additionalBoothRate"
            description=""
          />
        </div>
      )}
    </div>
  );
};

export default ExhibitBoothOption;
