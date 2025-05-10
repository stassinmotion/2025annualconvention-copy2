import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Users } from 'lucide-react';
import Button from '@/components/Button';
const CtaSection = () => {
  return <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl p-8">
            <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
              Ready to Race?
            </span>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Secure Your Spot at the Starting Line
            </h2>
            
            <p className="text-white/80 mb-10 text-lg">
              Early registration ensures you'll be part of this exciting, high-impact event designed to accelerate county governance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <CalendarDays size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-display font-medium">Event Dates</h3>
                </div>
                <p className="text-white/80 text-lg">June 9-12, 2025</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-display font-medium">Location</h3>
                </div>
                <p className="text-white/80 text-lg">MS Coast Convention Center, Biloxi</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-display font-medium">
                </h3>
                </div>
                <p className="text-white/80 text-sm">
              </p>
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <Link to="/register">
                <Button variant="accent" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px]">
                  Register Now
                </Button>
              </Link>
              
              <p className="text-white/70 text-sm">Early bird rates begin Monday, March 31, 2025. </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default CtaSection;