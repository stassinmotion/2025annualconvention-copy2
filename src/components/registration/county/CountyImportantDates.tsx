
import { motion } from 'framer-motion';
import { CalendarDays, Flag, Trophy } from "lucide-react";
import GlassCard from "@/components/GlassCard";

interface ImportantDate {
  date: string;
  description: string;
  highlight?: boolean;
  checkpoint?: number;
}

const importantDates: ImportantDate[] = [
  {
    date: "April 15, 2025",
    description: "Early Bird registration deadline",
    highlight: true,
    checkpoint: 1
  },
  {
    date: "May 6, 2025",
    description: "Regular rate registration deadline",
    checkpoint: 2
  },
  {
    date: "May 27, 2025",
    description: "Last day for late registration",
    checkpoint: 3
  },
  {
    date: "June 9-12, 2025",
    description: "96th Annual Convention",
    highlight: true,
    checkpoint: 4
  }
];

const CountyImportantDates = () => {
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <GlassCard accentColor="blue">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-racing-blue/10 p-2 rounded-full">
          <CalendarDays className="h-5 w-5 text-racing-blue" />
        </div>
        <h2 className="text-xl font-display font-bold">Race to Convention: Important Dates</h2>
      </div>

      <div className="relative ml-4">
        {/* Racetrack vertical line */}
        <div className="racetrack-timeline"></div>
        
        {/* Start flag */}
        <div className="start-flag">
          <Flag className="h-6 w-6 text-racing-red" />
          <span>START</span>
        </div>
        
        {/* Finish flag */}
        <div className="finish-flag">
          <Trophy className="h-6 w-6 text-racing-red" />
          <span>FINISH</span>
        </div>

        {/* Timeline events */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-8 space-y-10"
        >
          {importantDates.map((dateItem, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="racetrack-event-container"
            >
              {/* Checkpoint marker */}
              <div className="track-marker">
                <span className="text-white font-bold text-sm">{dateItem.checkpoint}</span>
              </div>
              
              <div 
                className={`ml-4 p-4 rounded-lg shadow-sm border ${
                  dateItem.highlight 
                    ? 'border-racing-blue/30 bg-blue-50/60' 
                    : 'border-gray-200 bg-gray-50/60'
                }`}
              >
                <p className={`font-bold ${dateItem.highlight ? 'text-racing-blue' : 'text-gray-700'}`}>
                  {dateItem.date}
                </p>
                <p className="text-gray-600">{dateItem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </GlassCard>
  );
};

export default CountyImportantDates;
