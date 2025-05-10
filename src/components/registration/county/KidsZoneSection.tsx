import { motion } from "framer-motion";
import { Users, ExternalLink, Car } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";

const KidsZoneSection = () => {
  // Microsoft Forms or similar form URL (replace with actual URL)
  const formUrl = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZUMYFUQUNNOFJVUjBSWEFMMVFQWElBVkk3VjRYNC4u";

  const animateItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <GlassCard accentColor="green">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 p-2 rounded-full">
          <Car className="h-5 w-5 text-green-600" />
        </div>
        <h2 className="text-xl font-display font-bold">Kids Racing Zone Passes</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-5">
          <p className="text-gray-700">
            The Kids Racing Zone provides supervised activities for children ages 5-12 during select convention hours. 
            Each registered attendee with children must request Kids Zone passes in advance.
          </p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.div 
              variants={animateItem}
              className="bg-gradient-to-br from-green-50 to-white p-5 rounded-lg shadow-sm border border-green-100"
            >
              <h3 className="font-display font-semibold mb-3 text-green-800 flex items-center gap-2">
                <Users className="h-4 w-4" /> 
                Registration Info
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span><span className="font-medium">Dates:</span> June 10-11, 2025</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span><span className="font-medium">Hours:</span> 9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span><span className="font-medium">Ages:</span> 5-12 years</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={animateItem}
              className="bg-gradient-to-br from-green-50 to-white p-5 rounded-lg shadow-sm border border-green-100"
            >
              <h3 className="font-display font-semibold mb-3 text-green-800 flex items-center gap-2">
                <Car className="h-4 w-4" /> 
                Kids Activities
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>Racing-themed arts & crafts</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>Race car building workshop</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>Movies & interactive games</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>Supervised pit stops (snacks)</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={animateItem}
            initial="hidden"
            animate="show"
            className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-md"
          >
            <p className="text-amber-800">
              <strong>Important:</strong> Please register in advance for Kids Zone passes as space is limited. 
              You'll need to specify how many passes you require and for which days.
            </p>
          </motion.div>
          
          <motion.div 
            variants={animateItem}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="pt-2"
          >
            <a href={formUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">
                Request Kids Racing Zone Passes
                <ExternalLink size={16} />
              </Button>
            </a>
            <p className="text-sm text-gray-500 mt-2">* No cost. Included with registration (passes required)</p>
          </motion.div>
        </div>
        
        <div className="lg:col-span-2 relative flex justify-center items-center">
          {/* Racing decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border-8 border-dashed border-green-100 animate-spin-slow"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-xl p-4 shadow-md border border-gray-100 relative z-10 w-full max-w-xs"
          >
            <div className="relative overflow-hidden rounded-lg h-40 mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20">
                {/* Checkered-flag-bg overlay removed for clean look */}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-display font-bold text-xl">KIDS RACING ZONE</h3>
              </div>
              <motion.div 
                className="absolute top-1/2 left-0 h-8 w-12"
                animate={{ 
                  x: ['0%', '700%', '0%'],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5, 
                  ease: "easeInOut"
                }}
              >
                <Car className="h-8 w-8 text-racing-red" />
              </motion.div>
            </div>
            
            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-green-800 font-medium">Passes valid for two days</p>
              <p className="text-sm text-green-600">Request one pass per child</p>
            </div>
          </motion.div>
        </div>
      </div>
    </GlassCard>
  );
};

export default KidsZoneSection;
