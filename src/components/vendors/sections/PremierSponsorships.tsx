
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface SponsorshipBenefit {
  sponsor: string;
  cost: string;
  available: number;
  benefits: string;
}

const premierSponsorships: SponsorshipBenefit[] = [
  {
    sponsor: "Luncheon",
    cost: "$8,500",
    available: 2,
    benefits: "8 attendees, 1 exhibit booth, 1 10' x 30' bulk space, and program ad."
  },
  {
    sponsor: "Breakfast",
    cost: "$7,750",
    available: 1,
    benefits: "7 attendees, 1 exhibit booth, 1 10' x 30' bulk space, and program ad."
  },
  {
    sponsor: "Lanyards",
    cost: "$6,500",
    available: 1,
    benefits: "6 attendees, 1 exhibit booth, 50% off 10' x 30' bulk space, logo on attendee lanyards, and program ad."
  },
  {
    sponsor: "Networking Exhibit Hall Lounge",
    cost: "$5,000",
    available: 3,
    benefits: "5 attendees, 1 exhibit booth, 50% off bulk space (10' x 30'), program ad, and overhead lounge banner with company name/logo."
  },
  {
    sponsor: "Door Prize Tickets",
    cost: "$4,000",
    available: 1,
    benefits: "Company logo on door prize tickets distributed to all attendees, registration for 4 attendees, and program ad."
  },
  {
    sponsor: "Wi-Fi Sponsor",
    cost: "$3,750",
    available: 1,
    benefits: "4 attendees, logo featured on Wi-Fi signage, and program ad."
  },
  {
    sponsor: "Registration Desk",
    cost: "$3,750",
    available: 2,
    benefits: "4 attendees, branding at registration desk, tabletop signage, and program ad."
  },
  {
    sponsor: "Break Refreshments",
    cost: "$3,500",
    available: 3,
    benefits: "3 attendees, tabletop signage at refreshment stations, and program ad."
  },
  {
    sponsor: "Coffee Station",
    cost: "$3,500",
    available: 2,
    benefits: "3 attendees, tabletop signage at each coffee station, program ad. Please ship coffee cups and/or sleeves with your logo to MAS."
  },
  {
    sponsor: "Drink Station",
    cost: "$3,500",
    available: 2,
    benefits: "3 attendees, tabletop signage at each drink station, program ad. Please ship branded koozies with your logo to MAS."
  }
];

export default function PremierSponsorships() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Premier Sponsorships</h2>
      <p className="text-sm text-gray-600">
        Specific benefits vary by package. Sponsorship and benefits may be split with a second company (requires MAS approval).
      </p>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sponsorship Package</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Available</TableHead>
            <TableHead>Benefits</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {premierSponsorships.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.sponsor}</TableCell>
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
