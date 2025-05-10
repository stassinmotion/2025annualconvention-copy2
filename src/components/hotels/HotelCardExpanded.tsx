
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hotel } from '@/types/hotel';
import { X } from 'lucide-react';
import HotelImageCarousel from './HotelImageCarousel';
import HotelAmenities from './HotelAmenities';
import HotelExpandedHeader from './expanded/HotelExpandedHeader';
import HotelRateInfo from './expanded/HotelRateInfo';
import HotelContactBooking from './expanded/HotelContactBooking';
import { useIsMobile } from '@/hooks/use-mobile';

interface HotelCardExpandedProps {
  hotel: Hotel;
  onClose: () => void;
}

export default function HotelCardExpanded({ hotel, onClose }: HotelCardExpandedProps) {
  const isMobile = useIsMobile();
  
  // Handle click outside to close
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-6 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="max-w-4xl w-full max-h-[90vh] overflow-hidden relative rounded-xl shadow-2xl bg-gradient-to-br from-racing-black to-racing-blue"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:bg-white text-gray-800 transition-all"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section - Show at top on mobile */}
          <div className="lg:hidden relative h-48 w-full overflow-hidden border-b border-white/10">
            <HotelImageCarousel hotel={hotel} isActive={true} />
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2 p-4 sm:p-6 overflow-y-auto max-h-[60vh] lg:max-h-[90vh] text-white">
            <HotelExpandedHeader hotel={hotel} />
            <HotelRateInfo hotel={hotel} />
            <HotelContactBooking hotel={hotel} />
            <HotelAmenities hotel={hotel} />
          </div>
          
          {/* Image Section - Show on side for desktop */}
          <div className="hidden lg:block lg:w-1/2 relative h-full min-h-[400px] overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
            <HotelImageCarousel hotel={hotel} isActive={true} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
