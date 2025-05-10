
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import { EventItem as EventItemType } from '@/data/agendaData';
import { useUserSchedule } from '@/hooks/use-user-schedule';
import { useAuth } from '@/contexts/auth';
import { EventItemHeader } from './EventItemHeader';
import { EventItemContainer } from './EventItemContainer';
import { useEventType } from './hooks/useEventType';
import { useEventTimes } from './useEventTimes';
import EducationDetails from './EducationDetails';

interface EventItemProps {
  event: EventItemType;
  index: number;
}

const EventItem = ({ event, index }: EventItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const { addToSchedule, isInSchedule } = useUserSchedule();
  const { isAuthenticated } = useAuth();
  const { isEducationSession } = useEventType(event.type, event.title);
  const { startTime, endTime, eventDate, timeProgress } = useEventTimes(event.time);
  
  const addedToSchedule = isInSchedule(event.id);

  const handleAddToSchedule = () => {
    addToSchedule({
      id: event.id,
      title: event.title,
      description: event.description,
      time: event.time,
      location: event.location,
      type: event.type
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <EventItemContainer 
        index={index} 
        isOpen={isOpen} 
        onOpenChange={setIsOpen}
        eventType={event.type}
      >
        <EventItemHeader 
          event={event}
          isOpen={isOpen}
          isEducationSession={isEducationSession}
          addedToSchedule={addedToSchedule}
          isAuthenticated={isAuthenticated}
          handleAddToSchedule={handleAddToSchedule}
          timeProgress={timeProgress}
          startTime={startTime}
          endTime={endTime}
          eventDate={eventDate}
          isHovered={isHovered}
        />
        
        <CollapsibleContent className="border-t border-gray-800">
          {isEducationSession && (
            <EducationDetails 
              title={event.title}
              speaker={event.speaker}
            />
          )}
        </CollapsibleContent>
      </EventItemContainer>
    </div>
  );
};

export default EventItem;
