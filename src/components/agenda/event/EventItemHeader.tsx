
import type { EventItem } from '@/data/agendaData';
import { useIsMobile } from '@/hooks/use-mobile';
import { TimeGauge } from './TimeGauge';
import { LocationDisplay } from './LocationDisplay';
import { EventContent } from './EventContent';
import { EventActions } from './EventActions';

interface EventItemHeaderProps {
  event: EventItem;
  isOpen: boolean;
  isEducationSession: boolean;
  addedToSchedule: boolean;
  isAuthenticated: boolean;
  handleAddToSchedule: () => void;
  timeProgress: number;
  startTime: string;
  endTime: string;
  eventDate: string;
  isHovered: boolean;
}

export const EventItemHeader = ({
  event,
  isOpen,
  isEducationSession,
  addedToSchedule,
  isAuthenticated,
  handleAddToSchedule,
  timeProgress,
  startTime,
  endTime,
  eventDate,
  isHovered
}: EventItemHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 dashboard-expanded-background">
      {/* Mobile layout */}
      {isMobile && (
        <>
          <div className="col-span-1 flex flex-col space-y-4">
            <div className="flex justify-between items-start">
              <TimeGauge time={event.time} progress={timeProgress} isHovered={isHovered} />
              <div>
                <EventActions 
                  eventType={event.type}
                  isEducationSession={isEducationSession}
                  isOpen={isOpen}
                  onAddToSchedule={handleAddToSchedule}
                  addedToSchedule={addedToSchedule}
                  isAuthenticated={isAuthenticated}
                  eventDetails={{
                    title: event.title,
                    description: event.description,
                    location: event.location,
                    startTime,
                    endTime,
                    date: eventDate
                  }}
                />
              </div>
            </div>
            
            <EventContent 
              title={event.title} 
              description={event.description} 
              speaker={event.speaker} 
            />
            
            <LocationDisplay location={event.location} />
          </div>
        </>
      )}
      
      {/* Desktop layout */}
      {!isMobile && (
        <>
          <div className="md:col-span-3 flex flex-col justify-start">
            <TimeGauge time={event.time} progress={timeProgress} isHovered={isHovered} />
            <LocationDisplay location={event.location} />
          </div>
          
          <div className="md:col-span-7">
            <EventContent 
              title={event.title} 
              description={event.description} 
              speaker={event.speaker} 
            />
          </div>
          
          <div className="md:col-span-2">
            <EventActions 
              eventType={event.type}
              isEducationSession={isEducationSession}
              isOpen={isOpen}
              onAddToSchedule={handleAddToSchedule}
              addedToSchedule={addedToSchedule}
              isAuthenticated={isAuthenticated}
              eventDetails={{
                title: event.title,
                description: event.description,
                location: event.location,
                startTime,
                endTime,
                date: eventDate
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};
