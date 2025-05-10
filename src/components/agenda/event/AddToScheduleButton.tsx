
import { Check, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface AddToScheduleButtonProps {
  onAddToSchedule: () => void;
  addedToSchedule: boolean;
  isAuthenticated: boolean;
}

const AddToScheduleButton = ({ 
  onAddToSchedule, 
  addedToSchedule, 
  isAuthenticated 
}: AddToScheduleButtonProps) => {
  const navigate = useNavigate();
  
  const handleAddToSchedule = () => {
    if (!isAuthenticated) {
      console.log('User not authenticated, redirecting to login');
      navigate('/login', { state: { from: '/agenda' } });
      return;
    }
    
    onAddToSchedule();
  };
  
  return (
    <Button 
      onClick={handleAddToSchedule}
      variant={addedToSchedule ? "default" : "outline"}
      size="sm"
      className={cn(
        "text-xs dashboard-button",
        addedToSchedule ? "bg-racing-red hover:bg-racing-red/90" : "border-racing-red text-racing-red hover:bg-racing-red/10"
      )}
    >
      {addedToSchedule ? (
        <>
          <Check size={14} className="mr-1" />
          Added
        </>
      ) : (
        <>
          Add to Schedule
          <Plus size={14} className="ml-1" />
        </>
      )}
    </Button>
  );
};

export default AddToScheduleButton;
