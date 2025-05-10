
import { Monitor, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface ViewModeToggleProps {
  forceMobileView: boolean;
  toggleViewMode: () => void;
  scrolled: boolean;
  className?: string;
}

const ViewModeToggle = ({ 
  forceMobileView, 
  toggleViewMode, 
  scrolled,
  className
}: ViewModeToggleProps) => {
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className={cn(
        "p-2 rounded-full",
        scrolled ? "text-racing-black" : "text-white",
        className
      )}
      onClick={toggleViewMode}
      title={forceMobileView ? "Switch to desktop view" : "Switch to mobile view"}
    >
      {forceMobileView ? <Monitor size={20} /> : <Smartphone size={20} />}
    </Button>
  );
};

export default ViewModeToggle;
