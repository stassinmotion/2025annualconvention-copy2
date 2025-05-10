
import { useState } from 'react';
import { motion } from 'framer-motion';
import { DaySchedule as DayScheduleType, EventType } from '@/data/agendaData';
import EventItem from './event/EventItem';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Flag } from 'lucide-react';

interface DayScheduleProps {
  day: DayScheduleType;
  eventFilter: EventType;
}

const DaySchedule = ({ day, eventFilter }: DayScheduleProps) => {
  const [events] = useState(day.events);
  const filteredEvents = events.filter(event => 
    eventFilter === 'all' || event.type === eventFilter
  );
  const isMobile = useIsMobile();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="space-y-6 relative"
    >
      {/* Start flag */}
      {!isMobile && filteredEvents.length > 0 && (
        <div className="start-flag">
          <div className="w-10 h-10 bg-racing-red rounded-full flex items-center justify-center">
            <Flag size={16} className="text-white" />
          </div>
          <span>START</span>
        </div>
      )}
      
      {/* Racetrack visualization */}
      {!isMobile && filteredEvents.length > 0 && <div className="racetrack-timeline"></div>}
      
      <div className={cn("mb-2 relative", isMobile ? "pl-0" : "")}>
        {filteredEvents.length === 0 ? (
          <motion.div 
            variants={item}
            className="p-8 text-center dashboard-empty-card rounded-xl"
          >
            <p className="text-racing-silver">No events match the selected filter for this day.</p>
          </motion.div>
        ) : (
          <div className="space-y-6 relative">
            {filteredEvents.map((event, eventIndex) => (
              <motion.div 
                key={eventIndex} 
                className={cn("racetrack-event-container", isMobile ? "ml-0" : "")}
                variants={item}
              >
                <div className="w-full">
                  <EventItem 
                    event={event} 
                    index={eventIndex}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      {/* Finish flag */}
      {!isMobile && filteredEvents.length > 0 && (
        <div className="finish-flag">
          <div className="w-10 h-10 bg-racing-red rounded-full flex items-center justify-center">
            <Flag size={16} className="text-white" />
          </div>
          <span>FINISH</span>
        </div>
      )}
    </motion.section>
  );
};

export default DaySchedule;
