
import { motion } from 'framer-motion';
import { Car, Hotel, Utensils } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const VenueInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <GlassCard className="h-full">
          <div className="bg-racing-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
            <Car className="w-8 h-8 text-racing-blue" />
          </div>
          <h3 className="text-xl font-display font-medium mb-4">Transportation</h3>
          <div className="space-y-4 text-racing-gray">
            <p>
              The convention center is easily accessible by car and is approximately 20 minutes from Gulfport-Biloxi International Airport (GPT).
            </p>
            <p>
              Complimentary parking is available for all convention attendees. Shuttle service will be provided from official convention hotels.
            </p>
            <p>
              Rideshare services like Uber and Lyft are readily available throughout Biloxi.
            </p>
          </div>
        </GlassCard>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <GlassCard className="h-full">
          <div className="bg-racing-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
            <Hotel className="w-8 h-8 text-racing-blue" />
          </div>
          <h3 className="text-xl font-display font-medium mb-4">Accommodations</h3>
          <div className="space-y-4 text-racing-gray">
            <p>
              We've secured special convention rates at several hotels within walking distance or a short drive from the convention center.
            </p>
            <p>
              Discounted room blocks are available at multiple price points to accommodate various budgets.
            </p>
            <p>
              Booking information will be provided in your registration confirmation email.
            </p>
          </div>
        </GlassCard>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <GlassCard className="h-full">
          <div className="bg-racing-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
            <Utensils className="w-8 h-8 text-racing-blue" />
          </div>
          <h3 className="text-xl font-display font-medium mb-4">Dining Options</h3>
          <div className="space-y-4 text-racing-gray">
            <p>
              The convention center features on-site catering and café options for quick meals during the event.
            </p>
            <p>
              Biloxi is known for its incredible Gulf Coast cuisine, with numerous dining options ranging from casual to fine dining within easy reach.
            </p>
            <p>
              Our welcome packet will include a guide to local restaurants and special offers for convention attendees.
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default VenueInfo;
