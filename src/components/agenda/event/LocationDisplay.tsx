
import { MapPin } from 'lucide-react';

interface LocationDisplayProps {
  location: string;
}

export const LocationDisplay = ({ location }: LocationDisplayProps) => {
  return (
    <div className="dashboard-gauge mt-3">
      <div className="flex items-center space-x-2 text-racing-gray text-sm">
        <MapPin size={16} className="text-racing-silver" />
        <span className="text-racing-silver">{location}</span>
      </div>
    </div>
  );
};
