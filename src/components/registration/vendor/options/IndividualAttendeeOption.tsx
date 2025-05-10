
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { VendorFormData } from '../VendorForm';

interface IndividualAttendeeOptionProps {
  formData: VendorFormData;
  handleSelectChange: (name: string, value: string) => void;
}

const IndividualAttendeeOption = ({ 
  formData, 
  handleSelectChange 
}: IndividualAttendeeOptionProps) => {
  return (
    <div className="space-y-2 border p-4 rounded-md">
      <div className="flex items-start">
        <RadioGroupItem value="individualAttendee" id="individualAttendee" className="mt-1" />
        <div className="ml-3">
          <Label htmlFor="individualAttendee" className="font-medium">INDIVIDUAL ATTENDEE</Label>
          <p className="text-sm text-gray-600 mt-1">
            I wish to attend the MAS 95th Annual Convention. My company will not exhibit. 
            Registration cost is per person. Additional attendee rates not applicable.
          </p>
        </div>
      </div>
      
      {formData.registrationType === 'individualAttendee' && (
        <div className="ml-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-3 rounded-md space-y-2">
              <h5 className="font-medium">Early Rate (By April 28)</h5>
              {formData.membershipType === 'member' ? (
                <div className="flex items-center">
                  <Checkbox 
                    id="individual-early-member" 
                    checked={formData.boothRate === 'individual-early-member'}
                    onCheckedChange={(checked) => {
                      if (checked) handleSelectChange('boothRate', 'individual-early-member');
                    }}
                  />
                  <Label htmlFor="individual-early-member" className="ml-2">$625</Label>
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
                      id="individual-regular-member" 
                      checked={formData.boothRate === 'individual-regular-member'}
                      onCheckedChange={(checked) => {
                        if (checked) handleSelectChange('boothRate', 'individual-regular-member');
                      }}
                    />
                    <Label htmlFor="individual-regular-member" className="ml-2">$650</Label>
                  </div>
                )}
                
                {formData.membershipType === 'state' && (
                  <div className="flex items-center">
                    <Checkbox 
                      id="individual-regular-state" 
                      checked={formData.boothRate === 'individual-regular-state'}
                      onCheckedChange={(checked) => {
                        if (checked) handleSelectChange('boothRate', 'individual-regular-state');
                      }}
                    />
                    <Label htmlFor="individual-regular-state" className="ml-2">$650</Label>
                  </div>
                )}
                
                {formData.membershipType === 'nonmember' && (
                  <div className="flex items-center">
                    <Checkbox 
                      id="individual-regular-nonmember" 
                      checked={formData.boothRate === 'individual-regular-nonmember'}
                      onCheckedChange={(checked) => {
                        if (checked) handleSelectChange('boothRate', 'individual-regular-nonmember');
                      }}
                    />
                    <Label htmlFor="individual-regular-nonmember" className="ml-2">$700</Label>
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
                      id="individual-late-member" 
                      checked={formData.boothRate === 'individual-late-member'}
                      onCheckedChange={(checked) => {
                        if (checked) handleSelectChange('boothRate', 'individual-late-member');
                      }}
                    />
                    <Label htmlFor="individual-late-member" className="ml-2">$675</Label>
                  </div>
                )}
                
                {formData.membershipType === 'state' && (
                  <div className="flex items-center">
                    <Checkbox 
                      id="individual-late-state" 
                      checked={formData.boothRate === 'individual-late-state'}
                      onCheckedChange={(checked) => {
                        if (checked) handleSelectChange('boothRate', 'individual-late-state');
                      }}
                    />
                    <Label htmlFor="individual-late-state" className="ml-2">$675</Label>
                  </div>
                )}
                
                {formData.membershipType === 'nonmember' && (
                  <div className="flex items-center">
                    <Checkbox 
                      id="individual-late-nonmember" 
                      checked={formData.boothRate === 'individual-late-nonmember'}
                      onCheckedChange={(checked) => {
                        if (checked) handleSelectChange('boothRate', 'individual-late-nonmember');
                      }}
                    />
                    <Label htmlFor="individual-late-nonmember" className="ml-2">$750</Label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualAttendeeOption;
