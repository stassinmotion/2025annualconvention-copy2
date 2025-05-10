
import { User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface EventContentProps {
  title: string;
  description?: string;
  speaker?: string;
}

export const EventContent = ({ title, description, speaker }: EventContentProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col space-y-2">
      <div className="dashboard-display">
        <h3 className={`font-display font-bold ${isMobile ? 'text-base' : 'text-lg'} text-white glow-text`}>{title}</h3>
      </div>
      
      {description && (
        <div className="dashboard-sub-display">
          <p className={`text-racing-silver ${isMobile ? 'text-xs' : 'text-sm'}`}>{description}</p>
        </div>
      )}
      
      {speaker && (
        <div className="dashboard-info-line">
          <User size={isMobile ? 12 : 14} className="text-racing-silver" />
          <p className={`text-racing-silver ${isMobile ? 'text-xs' : 'text-sm'} italic`}>
            Speaker: {speaker}
          </p>
        </div>
      )}
    </div>
  );
};
