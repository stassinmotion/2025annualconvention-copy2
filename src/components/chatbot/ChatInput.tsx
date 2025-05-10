
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ChatInput = ({ value, onChange, onSend, isLoading, onKeyDown }: ChatInputProps) => {
  return (
    <div className="p-4 border-t">
      <div className="flex space-x-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask about the schedule..."
          disabled={isLoading}
          className="flex-grow"
        />
        <Button 
          onClick={onSend} 
          disabled={!value.trim() || isLoading}
          className="bg-racing-red hover:bg-red-700"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Try questions like "What's happening on Monday?" or "When is the MAS Annual Cookout?"
      </p>
    </div>
  );
};

export default ChatInput;
