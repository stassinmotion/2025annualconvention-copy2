
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin } from 'lucide-react';
import { Hotel } from '@/types/hotel';
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";

interface HotelCardProps {
  hotel: Hotel;
  index: number;
  onExpand: (hotel: Hotel) => void;
}

export default function HotelCard({ hotel, index, onExpand }: HotelCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isMobile = useIsMobile();
  const animationDelay = index * 0.1;
  
  // Define a fallback hotel image - guaranteed to exist in the public folder
  const fallbackImage = "/placeholder.svg";
  
  // Get the first image or use fallback
  const imageSrc = hotel.images && hotel.images.length > 0 ? hotel.images[0].src : fallbackImage;
  const imageAlt = hotel.images && hotel.images.length > 0 ? hotel.images[0].alt : hotel.name;
  
  const handleImageLoad = () => {
    console.log(`Image for ${hotel.name} loaded successfully`);
    console.log(`Image path: ${imageSrc}`);
    setIsLoaded(true);
  };
  
  const handleImageError = () => {
    console.error(`Failed to load image for ${hotel.name}`);
    console.error(`Failed image path: ${imageSrc}`);
    setImgError(true);
    setIsLoaded(true);  // Set loaded to true to remove the loading indicator
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.4 }}
      className="w-full max-w-full sm:max-w-[300px] mx-auto"
    >
      <motion.div 
        className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        onClick={() => onExpand(hotel)}
      >
        {/* Hotel Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {/* Loading state */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <Skeleton className="w-full h-full" />
            </div>
          )}
          
          {/* Image with proper error handling */}
          <img 
            src={imgError ? fallbackImage : imageSrc}
            alt={imageAlt}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          
          {/* Rate badge */}
          <div className="absolute top-3 right-3 bg-racing-red text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            {hotel.rate}
          </div>
          
          {/* Red accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-racing-red"></div>
        </div>
        
        {/* Content - Updated to match venue section styling */}
        <div className="p-4 bg-gradient-to-br from-racing-black to-racing-blue text-white flex-grow flex flex-col">
          <h3 className="text-lg font-display font-bold text-white line-clamp-1">
            {hotel.name}
            {hotel.tagline && (
              <span className="text-sm font-normal text-racing-silver ml-1">
                {hotel.tagline}
              </span>
            )}
          </h3>
          
          <div className="flex items-center mt-2 text-white/80 text-sm">
            <MapPin size={14} className="text-racing-red mr-1.5 flex-shrink-0" />
            <span className="truncate">{hotel.address}</span>
          </div>
          
          <div className="mt-2 flex items-center text-xs text-white/70">
            <CalendarClock size={14} className="text-racing-red mr-1.5 flex-shrink-0" />
            <span>Cutoff: {hotel.cutoffDate}</span>
          </div>
          
          {/* Click for details button */}
          <button 
            className="mt-auto pt-3 w-full py-2 text-center bg-white/10 hover:bg-white/20 text-white rounded transition-colors text-sm font-medium"
          >
            View Details
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
