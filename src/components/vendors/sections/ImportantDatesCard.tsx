
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const ImportantDatesCard = () => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-racing-blue to-racing-black p-1">
        <h2 className="text-xl font-display text-white px-5 py-3">Important Dates & Setup Details</h2>
      </div>
      <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-racing-red shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1 text-left">Bulk Space Setup</h3>
                  <p className="text-gray-600">Sunday, June 8 at 9:00 AM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-racing-red shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1 text-left">Booth Setup</h3>
                  <p className="text-gray-600">Monday, June 9 at 10:00 AM (tentative)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-racing-red shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1 text-left">Exhibit Hall Hours</h3>
                  <p className="text-gray-600">Tuesday, June 10: 8:30 AM – 3:00 PM</p>
                  <p className="text-gray-600">Wednesday, June 11: 7:30 AM – 1:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-racing-red shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1 text-left">Breakdown</h3>
                  <p className="text-gray-600">Wednesday at 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ImportantDatesCard;
