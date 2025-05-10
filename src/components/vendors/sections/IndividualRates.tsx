
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface RateType {
  type: string;
  earlyRate: string;
  regularRate: string;
  lateRate: string;
  onsiteRate: string;
}

const individualRates: RateType[] = [
  {
    type: "Member/State Agency",
    earlyRate: "Check portal",
    regularRate: "$650",
    lateRate: "$675",
    onsiteRate: "$775"
  },
  {
    type: "Non-member",
    earlyRate: "Check portal",
    regularRate: "$700",
    lateRate: "$750",
    onsiteRate: "$850"
  }
];

const additionalAttendeeRates: RateType[] = [
  {
    type: "Member/State Agency",
    earlyRate: "Check portal",
    regularRate: "$350",
    lateRate: "$375",
    onsiteRate: "$475"
  },
  {
    type: "Non-member",
    earlyRate: "Check portal",
    regularRate: "$375",
    lateRate: "$425",
    onsiteRate: "$525"
  }
];

export default function IndividualRates() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Individual Attendee Registration</h2>
        <p className="text-sm text-gray-600">
          For attendees who wish to attend but not sponsor or purchase booth. Rate is based on per registrant 
          and date registration form is received.
        </p>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Early Rate (By Apr 23)</TableHead>
              <TableHead>Regular Rate (Apr 24-May 6)</TableHead>
              <TableHead>Late Rate (May 7-27)</TableHead>
              <TableHead>Onsite Rate (May 28-Jun 12)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {individualRates.map((rate, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{rate.type}</TableCell>
                <TableCell>{rate.earlyRate}</TableCell>
                <TableCell>{rate.regularRate}</TableCell>
                <TableCell>{rate.lateRate}</TableCell>
                <TableCell>{rate.onsiteRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Additional Attendees</h3>
        <p className="text-sm text-gray-600">
          Only sponsors and exhibitors may add additional attendees at the additional attendee rate.
        </p>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Early Rate (By Apr 23)</TableHead>
              <TableHead>Regular Rate (Apr 24-May 6)</TableHead>
              <TableHead>Late Rate (May 7-27)</TableHead>
              <TableHead>Onsite Rate (May 28-Jun 12)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {additionalAttendeeRates.map((rate, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{rate.type}</TableCell>
                <TableCell>{rate.earlyRate}</TableCell>
                <TableCell>{rate.regularRate}</TableCell>
                <TableCell>{rate.lateRate}</TableCell>
                <TableCell>{rate.onsiteRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
