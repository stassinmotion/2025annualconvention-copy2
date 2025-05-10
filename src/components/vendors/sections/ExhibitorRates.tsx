import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RateType {
  type: string;
  earlyRate: string;
  regularRate: string;
  lateRate: string;
  onsiteRate: string;
}

const exhibitorRates: RateType[] = [
  {
    type: "Member/State Agency",
    earlyRate: "Check portal",
    regularRate: "$1,025",
    lateRate: "$1,125",
    onsiteRate: "$1,225"
  },
  {
    type: "Non-member",
    earlyRate: "Check portal",
    regularRate: "$1,075",
    lateRate: "$1,175",
    onsiteRate: "$1,275"
  }
];

const additionalBoothRates: RateType[] = [
  {
    type: "Member/State Agency",
    earlyRate: "Check portal",
    regularRate: "$625",
    lateRate: "$725",
    onsiteRate: "$825"
  },
  {
    type: "Non-member",
    earlyRate: "Check portal",
    regularRate: "$675",
    lateRate: "$775",
    onsiteRate: "$875"
  }
];

export default function ExhibitorRates() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-display text-racing-blue">Exhibit Booth Rates</h2>
        <Card className="p-4 bg-gradient-to-b from-gray-50 to-white">
          <p className="text-sm text-gray-600 mb-6">
            Each booth package includes registration for two attendees with one 10'w x 10'd exhibit booth, 
            with 8'h back drapes and 3' h side dividers; one booth sign; one 6' skirted display table and two chairs. 
            Pre-registration cutoff date- May 28.
          </p>
          
          <ScrollArea className="w-full">
            <div className="min-w-[600px]">
              <Table>
                <TableHeader className="bg-racing-blue/5 sticky top-0">
                  <TableRow>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Type</TableHead>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Early Rate (By Apr 23)</TableHead>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Regular Rate (Apr 24-May 6)</TableHead>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Late Rate (May 7-27)</TableHead>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Onsite Rate (May 28-Jun 12)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exhibitorRates.map((rate, index) => (
                    <TableRow key={index} className="hover:bg-gray-50/50">
                      <TableCell className="font-medium whitespace-nowrap">{rate.type}</TableCell>
                      <TableCell className="whitespace-nowrap">{rate.earlyRate}</TableCell>
                      <TableCell className="text-racing-red font-medium whitespace-nowrap">{rate.regularRate}</TableCell>
                      <TableCell className="whitespace-nowrap">{rate.lateRate}</TableCell>
                      <TableCell className="whitespace-nowrap">{rate.onsiteRate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-display text-racing-blue">Additional Booth Rates</h3>
        <Card className="p-4 bg-gradient-to-b from-gray-50 to-white">
          <p className="text-sm text-gray-600 mb-6">
            Rate only applicable with the purchase of 1 booth or add-on to premier, gold, or platinum sponsorship. 
            Includes one additional attendee pass per additional booth.
          </p>
          
          <ScrollArea className="w-full">
            <div className="min-w-[600px]">
              <Table>
                <TableHeader className="bg-racing-blue/5 sticky top-0">
                  <TableRow>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Type</TableHead>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Early Rate (By Apr 23)</TableHead>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Regular Rate (Apr 24-May 6)</TableHead>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Late Rate (May 7-27)</TableHead>
                    <TableHead className="text-racing-blue font-semibold whitespace-nowrap">Onsite Rate (May 28-Jun 12)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {additionalBoothRates.map((rate, index) => (
                    <TableRow key={index} className="hover:bg-gray-50/50">
                      <TableCell className="font-medium whitespace-nowrap">{rate.type}</TableCell>
                      <TableCell className="whitespace-nowrap">{rate.earlyRate}</TableCell>
                      <TableCell className="text-racing-red font-medium whitespace-nowrap">{rate.regularRate}</TableCell>
                      <TableCell className="whitespace-nowrap">{rate.lateRate}</TableCell>
                      <TableCell className="whitespace-nowrap">{rate.onsiteRate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}
