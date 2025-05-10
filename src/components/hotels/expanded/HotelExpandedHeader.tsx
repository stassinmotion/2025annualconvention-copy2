
import { Hotel } from '@/types/hotel';
import { MapPin } from 'lucide-react';

interface HotelExpandedHeaderProps {
  hotel: Hotel;
}

export default function HotelExpandedHeader({ hotel }: HotelExpandedHeaderProps) {
  return (
    <div className="mb-4 border-b border-white/10 pb-4">
      <h2 className="text-2xl font-display font-bold text-white">
        {hotel.name}
      </h2>
      {hotel.tagline && (
        <p className="text-lg text-white/70 font-display">
          {hotel.tagline}
        </p>
      )}
      <div className="flex items-center mt-2 text-white/80">
        <MapPin size={16} className="text-racing-red mr-1.5" />
        <span className="text-sm">
          {hotel.address}, {hotel.city}, {hotel.state} {hotel.zipCode}
        </span>
      </div>
    </div>
  );
}
