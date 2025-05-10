
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Hotel } from '@/types/hotel';

interface HotelAmenitiesProps {
  hotel: Hotel;
}

export default function HotelAmenities({ hotel }: HotelAmenitiesProps) {
  // Only show amenities if the hotel has them
  if (!hotel.featuredAmenities || hotel.featuredAmenities.length === 0) {
    return null;
  }
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="mt-4">
      <h4 className="text-sm uppercase tracking-wider text-white/80 mb-3">Featured Amenities</h4>
      <motion.ul 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
      >
        {hotel.featuredAmenities.map((amenity, index) => (
          <motion.li 
            key={index}
            variants={item}
            className="flex items-center text-sm text-white/90"
          >
            <div className="mr-2 rounded-full bg-racing-red/20 p-1">
              <Check size={12} className="text-racing-red" />
            </div>
            {amenity}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
