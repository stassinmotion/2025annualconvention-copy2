
import { ScrollArea } from "@/components/ui/scroll-area";
import ImportantDatesCard from "./sections/ImportantDatesCard";
import ContactResources from "./sections/ContactResources";
import ImportantNotes from "./sections/ImportantNotes";
import SectionHeader from "./sections/SectionHeader";
import ExhibitorRates from "./sections/ExhibitorRates";
import IndividualRates from "./sections/IndividualRates";

export default function VendorInformation() {
  return (
    <div className="space-y-8 bg-gradient-to-b from-gray-50 to-white p-4 md:p-6 rounded-lg">
      <ImportantDatesCard />

      {/* Registration Options */}
      <div className="space-y-8">
        <SectionHeader title="Registration Options" />
        <div className="grid gap-8">
          <ExhibitorRates />
          <IndividualRates />
        </div>
      </div>

      <ContactResources />
      <ImportantNotes />
    </div>
  );
}
