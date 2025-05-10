
import { cn } from '@/lib/utils';
import { getEventTypeColor } from './utils/eventTypeUtils';

interface EventTypeBadgeProps {
  eventType: string;
}

const EventTypeBadge = ({ eventType }: EventTypeBadgeProps) => {
  const eventTypeLabel = eventType.charAt(0).toUpperCase() + eventType.slice(1);
  
  return (
    <div className="dashboard-control">
      <span className={cn("text-xs px-2 py-0.5 rounded inline-block", getEventTypeColor(eventType))}>
        {eventTypeLabel}
      </span>
    </div>
  );
};

export default EventTypeBadge;
