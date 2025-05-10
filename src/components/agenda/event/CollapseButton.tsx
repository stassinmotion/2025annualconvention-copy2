
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CollapsibleTrigger } from '@/components/ui/collapsible';

interface CollapseButtonProps {
  isOpen: boolean;
}

const CollapseButton = ({ isOpen }: CollapseButtonProps) => {
  return (
    <CollapsibleTrigger asChild>
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-racing-silver mt-1 h-7 px-2 dashboard-control-button"
      >
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        <span className="text-xs ml-1">{isOpen ? "Less" : "More"}</span>
      </Button>
    </CollapsibleTrigger>
  );
};

export default CollapseButton;
