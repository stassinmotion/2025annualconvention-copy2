
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { VendorFormData } from '../VendorForm';

interface AdditionalAttendeesOptionProps {
  formData: VendorFormData;
  handleNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdditionalAttendeesOption = ({ 
  formData, 
  handleNumberChange 
}: AdditionalAttendeesOptionProps) => {
  return (
    <div className="space-y-2 border p-4 rounded-md">
      <div className="flex items-start">
        <RadioGroupItem value="additionalAttendees" id="additionalAttendees" className="mt-1" />
        <div className="ml-3">
          <Label htmlFor="additionalAttendees" className="font-medium">ADDITIONAL ATTENDEES</Label>
          <p className="text-sm text-gray-600 mt-1">
            My company wishes to register additional attendees. 
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Rates: Members Early Rate (by April 28) - $325 | Member/State Agency Regular Rate (by May 13) - $350 | 
            Member/State Agency Late Rate - $375 | Nonmember Regular Rate (by May 13) - $375 | 
            Nonmember Late Rate (May 14 – May 31) - $425. Not applicable after 5/31.
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Onsite Rate: (June 1 – June 13) Member/State Agency Rate: $475 | Non-member Rate: $525
          </p>
        </div>
      </div>
      
      {formData.registrationType === 'additionalAttendees' && (
        <div className="ml-8 mt-4 space-y-2">
          <Label htmlFor="additionalAttendees" className="text-sm">Number of additional attendees:</Label>
          <Input 
            id="additionalAttendees" 
            name="additionalAttendees" 
            type="number"
            min="0"
            value={formData.additionalAttendees}
            onChange={handleNumberChange}
            className="w-24"
          />
        </div>
      )}
    </div>
  );
};

export default AdditionalAttendeesOption;
