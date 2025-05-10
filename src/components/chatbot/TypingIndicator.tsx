
import { Bot, Loader2 } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800">
        <div className="flex items-center space-x-2">
          <Bot size={16} className="text-racing-red" />
          <Loader2 size={16} className="animate-spin" />
          <span className="text-xs">Thinking...</span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
