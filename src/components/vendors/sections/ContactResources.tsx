
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

const ContactResources = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 space-y-6">
      <h3 className="text-xl font-display text-racing-blue">Need More Information?</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="default" className="bg-racing-red hover:bg-red-700 transition-colors">
          <Mail className="mr-2 h-4 w-4" />
          Contact Vendor Relations
        </Button>
        <Button variant="outline" className="border-racing-blue text-racing-blue hover:bg-racing-blue/5">
          <Download className="mr-2 h-4 w-4" />
          Download Information Packet
        </Button>
      </div>
    </div>
  );
};

export default ContactResources;
