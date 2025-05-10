
import { Bot, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onReset: () => void;
  showReset: boolean;
}

const ChatHeader = ({ onReset, showReset }: ChatHeaderProps) => {
  return (
    <div className="bg-racing-blue p-4 text-white flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Bot size={24} />
        <h2 className="text-lg font-semibold">Schedule Assistant</h2>
      </div>
      {showReset && (
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white hover:text-white hover:bg-racing-blue/50"
          onClick={onReset}
        >
          <RotateCcw size={16} className="mr-1" />
          Reset Chat
        </Button>
      )}
    </div>
  );
};

export default ChatHeader;
