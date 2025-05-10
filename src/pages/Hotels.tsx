import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Flag, ChevronDown, Search, Map } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { hotelData } from '@/data/hotels';
import HotelCard from '@/components/hotels/HotelCard';
import HotelCardExpanded from '@/components/hotels/HotelCardExpanded';
import { Hotel } from '@/types/hotel';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Hotels() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bottomRef, { once: true });
  const [expandedHotel, setExpandedHotel] = useState<Hotel | null>(null);
  const isMobile = useIsMobile();
  
  const handleScrollDown = () => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExpandHotel = (hotel: Hotel) => {
    setExpandedHotel(hotel);
  };

  const handleCloseExpanded = () => {
    setExpandedHotel(null);
  };
  
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <PageHeader
        title="Hotel Room Blocks"
        description="Exclusive rates for MS Association of Supervisors 96th Annual Convention at these premier hotels in Biloxi, MS. Book before the cutoff dates to secure your discounted accommodations."
      >
        <div className="flex items-center justify-center gap-2 mt-4">
          <motion.button
            onClick={handleScrollDown}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 mt-2 bg-racing-red rounded-md font-medium text-white"
          >
            <span>View Hotels</span>
            <ChevronDown size={16} />
          </motion.button>
          <div className="px-5 py-2.5 mt-2 bg-black/50 rounded-md font-medium text-racing-silver text-sm">
            <span className="text-white">Convention Dates:</span> June 9-12, 2025
          </div>
        </div>
      </PageHeader>
      
      <div className="container mx-auto px-4 py-12">
        {/* Racing theme divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-dashed border-racing-gray/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-racing-blue flex items-center gap-2">
              <Flag className="text-racing-red" size={18} />
              <span className="font-display font-medium">Official Hotel Partners</span>
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto" ref={bottomRef}>
          <div className="mb-8 bg-racing-blue/10 border border-racing-blue/30 rounded-md p-4 shadow-sm">
            <h2 className="text-xl font-medium text-racing-blue mb-2">Important Booking Information</h2>
            <p className="text-gray-600 text-sm">
              To receive the special negotiated rates, mention the group code when booking by phone 
              or use the online booking link where available. All rates are subject to availability 
              and must be booked before the cutoff date.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center text-racing-blue bg-racing-blue/5 rounded-full px-4 py-1.5 text-sm">
                <Map size={16} className="mr-1" />
                <span>All hotels located in Biloxi, MS</span>
              </div>
            </div>
          </div>
          
          {/* Hotel Cards Grid - Updated for better mobile responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {hotelData.map((hotel, index) => (
              <HotelCard 
                key={hotel.id} 
                hotel={hotel} 
                index={index} 
                onExpand={() => handleExpandHotel(hotel)}
              />
            ))}
          </div>
          
          {/* Expanded Hotel View */}
          <AnimatePresence>
            {expandedHotel && (
              <HotelCardExpanded 
                hotel={expandedHotel} 
                onClose={handleCloseExpanded}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
