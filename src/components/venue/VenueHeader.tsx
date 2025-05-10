import { motion } from 'framer-motion';
import { MapPin, Phone, Globe } from 'lucide-react';

const VenueHeader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="space-y-6">
          <span className="inline-block bg-racing-red/10 text-racing-red text-xs font-bold uppercase px-3 py-1 rounded-full">
            Home Track
          </span>
          <h2 className="text-3xl font-display font-bold">Mississippi Coast Convention Center</h2>
          
          <div className="h-1 w-16 bg-racing-blue mb-6"></div>
          
          <div className="space-y-4 text-racing-gray">
            <p>
              Located in the heart of Biloxi, the Mississippi Coast Convention Center provides a state-of-the-art setting for our racing-themed convention, with over 400,000 square feet of flexible meeting and exhibition space.
            </p>
            <p>
              The facility features modern technology, exceptional acoustics, and comfortable seating to ensure a productive and enjoyable experience for all attendees.
            </p>
          </div>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-racing-red flex-shrink-0 mt-1" />
              <div className="flex items-center space-x-2">
                <div className="font-medium">Address</div>
                <div className="text-racing-gray">2350 Beach Blvd, Biloxi, MS 39531</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-racing-red flex-shrink-0 mt-1" />
              <div className="flex items-center space-x-2">
                <div className="font-medium">Phone</div>
                <div className="text-racing-gray">(228) 594-3700</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Globe className="w-5 h-5 text-racing-red flex-shrink-0 mt-1" />
              <div className="flex items-center space-x-2">
                <div className="font-medium">Website</div>
                <a href="https://www.mscoastconventioncenter.com" target="_blank" rel="noopener noreferrer" className="text-racing-blue hover:text-racing-red transition-colors">
                  www.mscoastconventioncenter.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-racing-blue/20 to-racing-red/20 rounded-xl opacity-30 blur-xl"></div>
        <div className="rounded-xl overflow-hidden h-full shadow-lg border-2 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.1110665332015!2d-88.88761382392226!3d30.39270177498707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c0e5a0cf5a5b5%3A0x27b469a92d6e3f15!2sMississippi%20Coast%20Convention%20Center!5e0!3m2!1sen!2sus!4v1697123097064!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mississippi Coast Convention Center Map"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default VenueHeader;
