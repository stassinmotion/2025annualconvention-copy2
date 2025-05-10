import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Globe, ChevronRight } from 'lucide-react';
import Button from '@/components/Button';
const VenueSection = () => {
  return <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div className="w-full lg:w-1/2 backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-8" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-6">
              Convention Venue
            </span>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Mississippi Coast Convention Center
            </h2>
            
            <div className="h-1 w-16 bg-racing-red mb-6"></div>
            
            <p className="text-white/80 mb-6">Located on our beautiful coast - the Mississippi Coast Convention Center</p>
            
            <p className="text-white/80 mb-8">
          </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-racing-red flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-white">Address</div>
                  <div className="text-white/80">2350 Beach Blvd, Biloxi, MS 39531</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-racing-red flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div className="text-white/80">(228) 594-3700</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-racing-red flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-white">Website</div>
                  <a href="https://www.mscoastconventioncenter.com" target="_blank" rel="noopener noreferrer" className="text-racing-blue hover:text-racing-red transition-colors">
                    www.mscoastconventioncenter.com
                  </a>
                </div>
              </div>
            </div>
            
            <Link to="/venue">
              <Button variant="accent" className="group">
                Learn More About the Venue
                <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/20 to-blue-700/20 rounded-xl opacity-30 blur-xl"></div>
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20 h-full backdrop-blur-xl bg-white/10">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.1110665332015!2d-88.88761382392226!3d30.39270177498707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c0e5a0cf5a5b5%3A0x27b469a92d6e3f15!2sMississippi%20Coast%20Convention%20Center!5e0!3m2!1sen!2sus!4v1697123097064!5m2!1sen!2sus" width="100%" height="400" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mississippi Coast Convention Center Map"></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default VenueSection;