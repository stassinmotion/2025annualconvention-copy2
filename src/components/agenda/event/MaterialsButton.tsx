
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MaterialsButtonProps {
  eventType: string;
}

const MaterialsButton = ({ eventType }: MaterialsButtonProps) => {
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="border-racing-blue text-racing-blue hover:bg-racing-blue/10 text-xs dashboard-button"
      onClick={() => console.log(`Download presentation for: ${eventType}`)}
    >
      <Download size={14} className="mr-1" />
      Materials
    </Button>
  );
};

export default MaterialsButton;
