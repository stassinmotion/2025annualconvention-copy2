
import { motion } from 'framer-motion';
import { Hotel } from '@/types/hotel';
import { Phone, ExternalLink } from 'lucide-react';

interface HotelContactBookingProps {
  hotel: Hotel;
}

export default function HotelContactBooking({ hotel }: HotelContactBookingProps) {
  return (
    <div className="mt-6">
      <h4 className="text-sm uppercase tracking-wider text-white/80 mb-3">Booking Information</h4>
      
      {/* Phone Contact */}
      <div className="flex items-start mb-2">
        <Phone size={16} className="text-racing-red mt-1 mr-2 flex-shrink-0" />
        <div>
          <p className="text-white text-sm">
            {hotel.phone}
            {hotel.phoneExt && <span> ext. {hotel.phoneExt}</span>}
          </p>
        </div>
      </div>
      
      {/* Group Code */}
      <div className="mt-3 mb-4">
        <p className="text-sm text-white/80">
          <span className="font-medium text-racing-red">Group Code:</span> {hotel.groupCode}
        </p>
      </div>
      
      {/* Book Online - Only show if hotel has online booking */}
      {hotel.hasOnlineBooking && hotel.onlineBookingUrl ? (
        <motion.a
          href={hotel.onlineBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 bg-racing-red hover:bg-racing-red/90 text-white px-4 py-2 rounded-md transition-all"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExternalLink size={16} /> 
          <span>Book Online</span>
        </motion.a>
      ) : (
        <div className="mt-2 px-4 py-2 bg-racing-silver/20 rounded-md border border-racing-silver/30">
          <p className="text-white text-sm font-medium">Must Call to Book</p>
        </div>
      )}
    </div>
  );
}
