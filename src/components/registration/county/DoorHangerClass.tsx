
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";

const DoorHangerClass = () => {
  // Microsoft Forms or similar form URL (replace with actual URL)
  const formUrl = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZUMYFUOExVOFpTWEE5WEsxU003STk1RU1LUU9VRC4u";

  return (
    <GlassCard accentColor="amber" className="overflow-visible">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-amber-100 p-2 rounded-full">
          <Award className="h-5 w-5 text-amber-600" />
        </div>
        <h2 className="text-xl font-display font-bold">Guest Door Hanger Painting Class</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">
            Join us for a fun and creative door hanger painting class! Perfect for guests and spouses attending the convention.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-lg shadow-sm border border-amber-100"
          >
            <h3 className="font-display font-semibold mb-3 text-amber-800">Class Details:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <span className="font-medium">Date:</span> Tuesday, June 10, 2025
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <span className="font-medium">Time:</span> 2:00 PM - 4:00 PM
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <span className="font-medium">Location:</span> Convention Center, Room 204
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <span className="font-medium">Project:</span> Popsicle Door Hanger
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">5</span>
                </div>
                <div>
                  <span className="font-medium">Cost:</span> Included with guest registration
                </div>
              </li>
            </ul>
          </motion.div>
          
          <div className="pt-4">
            <a href={formUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-2 w-full sm:w-auto shadow-sm transition-all duration-300 hover:shadow">
                Register for Painting Class
                <ExternalLink size={16} />
              </Button>
            </a>
            <p className="text-sm text-gray-500 mt-2">* Registration required as space is limited</p>
          </div>
        </div>
        
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10"
          >
            <div className="max-w-[250px] mx-auto shadow-lg rounded-lg overflow-hidden border-4 border-white">
              <img src="/lovable-uploads/f0dc5c19-4152-4c84-a1c3-d948e40c0d9d.png" alt="Popsicle Door Hanger" className="w-full h-auto" />
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-[-20px] right-[-20px] h-32 w-32 bg-amber-100 rounded-full opacity-30 z-0"></div>
          <div className="absolute bottom-[-15px] left-[-15px] h-24 w-24 bg-amber-200 rounded-full opacity-20 z-0"></div>
          <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 h-48 w-48 bg-white rounded-full border-8 border-dashed border-amber-100 opacity-40 z-0"></div>
        </div>
      </div>
    </GlassCard>
  );
};

export default DoorHangerClass;
