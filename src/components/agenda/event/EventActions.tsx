
import { EventDetails } from '@/utils/calendarUtils';
import EventTypeBadge from './EventTypeBadge';
import AddToScheduleButton from './AddToScheduleButton';
import AddToCalendarDropdown from './AddToCalendarDropdown';
import MaterialsButton from './MaterialsButton';
import CollapseButton from './CollapseButton';

interface EventActionsProps {
  eventType: string;
  isEducationSession: boolean;
  isOpen: boolean;
  onAddToSchedule: () => void;
  addedToSchedule: boolean;
  isAuthenticated?: boolean;
  eventDetails?: EventDetails;
}

export const EventActions = ({ 
  eventType, 
  isEducationSession, 
  isOpen, 
  onAddToSchedule,
  addedToSchedule,
  isAuthenticated = false,
  eventDetails
}: EventActionsProps) => {
  return (
    <div className="flex flex-col items-end justify-start space-y-2">
      <EventTypeBadge eventType={eventType} />
      
      <AddToScheduleButton 
        onAddToSchedule={onAddToSchedule} 
        addedToSchedule={addedToSchedule}
        isAuthenticated={isAuthenticated}
      />
      
      <AddToCalendarDropdown eventDetails={eventDetails} />
      
      {isEducationSession && (
        <MaterialsButton eventType={eventType} />
      )}
      
      <CollapseButton isOpen={isOpen} />
    </div>
  );
};
