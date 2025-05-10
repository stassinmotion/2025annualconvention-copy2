import { motion } from 'framer-motion';
import { Utensils, Hotel } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
const Recommendations = () => {
  const restaurants = [{
    name: "Mary Mahoney's Old French House",
    description: "Historic restaurant serving Creole and seafood specialties.",
    icon: <Utensils className="w-5 h-5 text-racing-blue" />,
    type: "Fine Dining"
  }, {
    name: "Half Shell Oyster House",
    description: "Local favorite for fresh Gulf seafood and oysters.",
    icon: <Utensils className="w-5 h-5 text-racing-blue" />,
    type: "Seafood"
  }, {
    name: "The Reef",
    description: "Waterfront dining with scenic views and fresh seafood.",
    icon: <Utensils className="w-5 h-5 text-racing-blue" />,
    type: "Casual Dining"
  }, {
    name: "Patio 44",
    description: "Modern Southern cuisine with a creative twist.",
    icon: <Utensils className="w-5 h-5 text-racing-blue" />,
    type: "Southern"
  }];
  const hotels = [{
    name: "Beau Rivage Resort & Casino",
    description: "Luxury accommodations with casino, spa, and dining options.",
    icon: <Hotel className="w-5 h-5 text-racing-blue" />,
    distance: "1.2 miles"
  }, {
    name: "Hard Rock Hotel & Casino",
    description: "Rock-themed resort with casino and entertainment.",
    icon: <Hotel className="w-5 h-5 text-racing-blue" />,
    distance: "1.5 miles"
  }, {
    name: "Margaritaville Resort",
    description: "Family-friendly resort with water park and entertainment.",
    icon: <Hotel className="w-5 h-5 text-racing-blue" />,
    distance: "2.0 miles"
  }, {
    name: "IP Casino Resort Spa",
    description: "Casino resort with spa and multiple dining options.",
    icon: <Hotel className="w-5 h-5 text-racing-blue" />,
    distance: "2.5 miles"
  }];
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div className="mb-6">
          <div className="inline-block px-2 py-1 bg-racing-blue/10 text-racing-blue rounded text-xs font-medium mb-3">
            DINING
          </div>
          <h2 className="text-2xl font-display font-bold">Recommended Restaurants</h2>
        </div>
        
        <div className="space-y-4">
          {restaurants.map((restaurant, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: -10
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.3,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <GlassCard className="flex items-start space-x-3">
                {restaurant.icon}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-medium">{restaurant.name}</h3>
                    <span className="text-xs bg-racing-blue/10 text-racing-blue px-2 py-0.5 rounded">
                      {restaurant.type}
                    </span>
                  </div>
                  <p className="text-sm text-racing-gray">{restaurant.description}</p>
                </div>
              </GlassCard>
            </motion.div>)}
        </div>
      </div>
      
      <div>
        <div className="mb-6">
          <div className="inline-block px-2 py-1 bg-racing-blue/10 text-racing-blue rounded text-xs font-medium mb-3">
            ACCOMMODATIONS
          </div>
          <h2 className="text-2xl font-display font-bold">Nearby Hotels</h2>
        </div>
        
        <div className="space-y-4">
          {hotels.map((hotel, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: 10
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.3,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <GlassCard className="flex items-start space-x-3">
                {hotel.icon}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-medium">{hotel.name}</h3>
                    <span className="text-xs bg-racing-blue/10 text-racing-blue px-2 py-0.5 rounded">
                      {hotel.distance}
                    </span>
                  </div>
                  <p className="text-sm text-racing-gray">{hotel.description}</p>
                </div>
              </GlassCard>
            </motion.div>)}
        </div>
      </div>
    </div>;
};
export default Recommendations;