
import { Hotel } from '@/types/hotel';

interface HotelRateInfoProps {
  hotel: Hotel;
}

export default function HotelRateInfo({ hotel }: HotelRateInfoProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
        <p className="text-xs text-white/60 uppercase font-medium">Rate</p>
        <p className="text-lg font-bold text-racing-red">{hotel.rate}</p>
      </div>
      
      <div className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
        <p className="text-xs text-white/60 uppercase font-medium">Cutoff Date</p>
        <p className="text-md font-medium text-white">{hotel.cutoffDate}</p>
      </div>
      
      <div className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 col-span-2">
        <p className="text-xs text-white/60 uppercase font-medium">Group Code</p>
        <p className="text-md font-mono font-bold text-racing-red">{hotel.groupCode}</p>
      </div>
    </div>
  );
}
