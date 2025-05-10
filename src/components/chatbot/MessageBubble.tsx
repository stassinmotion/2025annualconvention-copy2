
import { Bot, User } from 'lucide-react';
import { Message } from './types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          message.sender === 'user'
            ? 'bg-racing-blue text-white ml-auto'
            : message.error 
              ? 'bg-red-50 text-gray-800 border border-red-200' 
              : 'bg-gray-100 text-gray-800'
        }`}
      >
        <div className="flex items-center space-x-2 mb-1">
          {message.sender === 'bot' ? (
            <Bot size={16} className={message.error ? "text-red-500" : "text-racing-red"} />
          ) : (
            <User size={16} />
          )}
          <span className="text-xs opacity-75">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
