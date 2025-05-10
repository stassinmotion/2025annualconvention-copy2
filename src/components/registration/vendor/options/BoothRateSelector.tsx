
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { VendorFormData } from '../VendorForm';

interface BoothRateSelectorProps {
  formData: VendorFormData;
  handleSelectChange: (name: string, value: string) => void;
  title: string;
  rateType: 'boothRate' | 'additionalBoothRate';
  description?: string;
}

const BoothRateSelector = ({ 
  formData, 
  handleSelectChange,
  title,
  rateType,
  description
}: BoothRateSelectorProps) => {
  const prefix = rateType === 'additionalBoothRate' ? 'additional-' : '';
  
  return (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      {description && <p className="text-sm text-gray-500 mb-2">{description}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-3 rounded-md space-y-2">
          <h5 className="font-medium">Early Rate (By April 28)</h5>
          {formData.membershipType === 'member' ? (
            <div className="flex items-center">
              <Checkbox 
                id={`${prefix}early-member`} 
                checked={formData[rateType] === 'early-member'}
                onCheckedChange={(checked) => {
                  if (checked) handleSelectChange(rateType, 'early-member');
                }}
              />
              <Label htmlFor={`${prefix}early-member`} className="ml-2">
                {rateType === 'boothRate' ? '$975' : '$575'}
              </Label>
            </div>
          ) : (
            <p className="text-gray-400">N/A</p>
          )}
        </div>
        
        <div className="border p-3 rounded-md space-y-2">
          <h5 className="font-medium">Regular Rate (by May 13)</h5>
          <div className="space-y-2">
            {formData.membershipType === 'member' && (
              <div className="flex items-center">
                <Checkbox 
                  id={`${prefix}regular-member`} 
                  checked={formData[rateType] === 'regular-member'}
                  onCheckedChange={(checked) => {
                    if (checked) handleSelectChange(rateType, 'regular-member');
                  }}
                />
                <Label htmlFor={`${prefix}regular-member`} className="ml-2">
                  {rateType === 'boothRate' ? '$1025' : '$625'}
                </Label>
              </div>
            )}
            
            {formData.membershipType === 'state' && (
              <div className="flex items-center">
                <Checkbox 
                  id={`${prefix}regular-state`} 
                  checked={formData[rateType] === 'regular-state'}
                  onCheckedChange={(checked) => {
                    if (checked) handleSelectChange(rateType, 'regular-state');
                  }}
                />
                <Label htmlFor={`${prefix}regular-state`} className="ml-2">
                  {rateType === 'boothRate' ? '$1025' : '$625'}
                </Label>
              </div>
            )}
            
            {formData.membershipType === 'nonmember' && (
              <div className="flex items-center">
                <Checkbox 
                  id={`${prefix}regular-nonmember`} 
                  checked={formData[rateType] === 'regular-nonmember'}
                  onCheckedChange={(checked) => {
                    if (checked) handleSelectChange(rateType, 'regular-nonmember');
                  }}
                />
                <Label htmlFor={`${prefix}regular-nonmember`} className="ml-2">
                  {rateType === 'boothRate' ? '$1075' : '$675'}
                </Label>
              </div>
            )}
          </div>
        </div>
        
        <div className="border p-3 rounded-md space-y-2">
          <h5 className="font-medium">Late Rate (May 14-31)</h5>
          <div className="space-y-2">
            {formData.membershipType === 'member' && (
              <div className="flex items-center">
                <Checkbox 
                  id={`${prefix}late-member`} 
                  checked={formData[rateType] === 'late-member'}
                  onCheckedChange={(checked) => {
                    if (checked) handleSelectChange(rateType, 'late-member');
                  }}
                />
                <Label htmlFor={`${prefix}late-member`} className="ml-2">
                  {rateType === 'boothRate' ? '$1125' : '$725'}
                </Label>
              </div>
            )}
            
            {formData.membershipType === 'state' && (
              <div className="flex items-center">
                <Checkbox 
                  id={`${prefix}late-state`} 
                  checked={formData[rateType] === 'late-state'}
                  onCheckedChange={(checked) => {
                    if (checked) handleSelectChange(rateType, 'late-state');
                  }}
                />
                <Label htmlFor={`${prefix}late-state`} className="ml-2">
                  {rateType === 'boothRate' ? '$1125' : '$725'}
                </Label>
              </div>
            )}
            
            {formData.membershipType === 'nonmember' && (
              <div className="flex items-center">
                <Checkbox 
                  id={`${prefix}late-nonmember`} 
                  checked={formData[rateType] === 'late-nonmember'}
                  onCheckedChange={(checked) => {
                    if (checked) handleSelectChange(rateType, 'late-nonmember');
                  }}
                />
                <Label htmlFor={`${prefix}late-nonmember`} className="ml-2">
                  {rateType === 'boothRate' ? '$1175' : '$775'}
                </Label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothRateSelector;
