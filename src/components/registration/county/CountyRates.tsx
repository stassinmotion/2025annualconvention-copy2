import { motion } from 'framer-motion';
import SectionHeader from "@/components/vendors/sections/SectionHeader";
import { Badge } from '@/components/ui/badge';
import { Flag, Timer } from 'lucide-react';

// Registration rate types
interface Rate {
  type: string;
  earlyBird: string;
  regular: string;
  late: string;
  onsite: string;
  member: boolean;
}

const rates: Rate[] = [
  {
    type: "Member",
    earlyBird: "$495",
    regular: "$575",
    late: "$655",
    onsite: "$735",
    member: true
  },
  {
    type: "Non-Member",
    earlyBird: "$625",
    regular: "$650",
    late: "$700",
    onsite: "$785",
    member: false
  }
];

const CountyRates = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-6">
      <SectionHeader title="County Registration Rates" />
      
      {/* Racing-inspired track for rates */}
      <div className="relative">
        {/* Race track design element */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-full max-w-4xl h-4 bg-gray-200 rounded-full -z-10 hidden md:block">
          {/* Checkered-flag-bg overlay removed for clean look */}
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8"
        >
          {/* Rate Types Column */}
          <motion.div variants={item} className="flex flex-col space-y-4">
            <div className="text-center h-16 flex items-center justify-center">
              <div className="bg-racing-blue/10 p-2.5 rounded-full">
                <Flag className="h-6 w-6 text-racing-blue" />
              </div>
            </div>
            {rates.map((rate, index) => (
              <motion.div
                key={`type-${index}`}
                variants={item}
                className={`bg-white rounded-xl shadow-md p-4 text-center ${rate.member ? 'border-l-4 border-racing-blue' : 'border-l-4 border-racing-red'}`}
              >
                <h3 className="font-display text-lg font-bold">{rate.type}</h3>
                {rate.member ? (
                  <Badge className="mt-2 bg-racing-blue/10 text-racing-blue hover:bg-racing-blue/20 border-none">
                    Recommended
                  </Badge>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Early Bird Column */}
          <motion.div variants={item} className="flex flex-col space-y-4">
            <div className="text-center p-2 rounded-lg bg-gradient-to-r from-green-100 to-green-50 h-16 flex items-center justify-center shadow-sm">
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-bold text-green-700">Early Bird</p>
                  <p className="text-xs text-green-600">By April 15</p>
                </div>
              </div>
            </div>
            {rates.map((rate, index) => (
              <motion.div
                key={`early-${index}`}
                variants={item}
                className="bg-gradient-to-b from-green-50 to-white rounded-xl shadow-md p-4 text-center transform transition-transform duration-300 hover:scale-105"
              >
                <p className="text-xl font-bold text-green-700">{rate.earlyBird}</p>
                <p className="text-xs text-green-600">Best Value</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Regular Column */}
          <motion.div variants={item} className="flex flex-col space-y-4">
            <div className="text-center p-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 h-16 flex items-center justify-center shadow-sm">
              <div>
                <p className="font-bold text-racing-blue">Regular Rate</p>
                <p className="text-xs text-racing-blue/70">April 16 - May 6</p>
              </div>
            </div>
            {rates.map((rate, index) => (
              <motion.div
                key={`regular-${index}`}
                variants={item}
                className="bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-md p-4 text-center"
              >
                <p className="text-xl font-bold text-racing-blue">{rate.regular}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Late/Onsite Column */}
          <motion.div variants={item} className="flex flex-col space-y-4">
            <div className="text-center p-2 rounded-lg bg-gradient-to-r from-amber-100 to-amber-50 h-16 flex items-center justify-center shadow-sm">
              <div>
                <p className="font-bold text-amber-700">Late/Onsite</p>
                <p className="text-xs text-amber-600">After May 6</p>
              </div>
            </div>
            {rates.map((rate, index) => (
              <motion.div
                key={`late-${index}`}
                variants={item}
                className="bg-gradient-to-b from-amber-50 to-white rounded-xl shadow-md p-4 text-center"
              >
                <p className="text-lg font-bold text-amber-700">{rate.late}</p>
                <p className="text-sm text-amber-600">Onsite: {rate.onsite}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <p className="text-sm text-gray-600 italic mt-2 text-center">
        * Early Bird rates are available by registering online through the Member Portal before April 15.
      </p>
    </div>
  );
};

export default CountyRates;
