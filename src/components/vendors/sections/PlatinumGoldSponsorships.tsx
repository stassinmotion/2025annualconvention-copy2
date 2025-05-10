
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface SponsorshipOption {
  type: string;
  cost: string;
  available: string;
  benefits: string;
}

const sponsorshipOptions: SponsorshipOption[] = [
  {
    type: "Platinum Sponsor",
    cost: "$1,650",
    available: "Unlimited",
    benefits: "2 attendees, listing in brochure and follow-up magazine."
  },
  {
    type: "Conference Bags (Platinum Add-on Only)",
    cost: "Donate",
    available: "1",
    benefits: "Donate 600 branded bags (shipped to MAS). 1 attendee pass, program ad, and Platinum Sponsor recognition."
  },
  {
    type: "Gold Sponsor",
    cost: "$950",
    available: "Unlimited",
    benefits: "1 attendee, listing in brochure and follow-up magazine."
  },
  {
    type: "Branded Pens (Gold Add-on Only)",
    cost: "Donate",
    available: "2",
    benefits: "Donate 600 branded pens (shipped to MAS). 1 attendee pass, program ad, and Gold Sponsor recognition."
  }
];

export default function PlatinumGoldSponsorships() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Platinum/Gold Sponsorships</h2>
      <p className="text-sm text-gray-600">
        Specific benefits vary by package. Up to 5 additional attendees may be registered per company.
      </p>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Other Sponsorships</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Available</TableHead>
            <TableHead>Benefits</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sponsorshipOptions.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.type}</TableCell>
              <TableCell>{item.cost}</TableCell>
              <TableCell>{item.available}</TableCell>
              <TableCell>{item.benefits}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
