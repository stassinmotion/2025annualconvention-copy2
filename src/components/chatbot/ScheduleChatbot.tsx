
import React from 'react';
import { useChatbot } from './hooks/useChatbot';
import ChatHeader from './ChatHeader';
import SystemErrorAlert from './SystemErrorAlert';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ScheduleChatbot = () => {
  const {
    messages,
    input,
    setInput,
    isLoading,
    isError,
    systemError,
    sendMessage,
    resetChat
  } = useChatbot();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] border rounded-xl shadow-md overflow-hidden bg-white">
      <ChatHeader 
        onReset={resetChat} 
        showReset={isError || !!systemError} 
      />
      
      {systemError && <SystemErrorAlert errorMessage={systemError} />}
      
      <MessageList 
        messages={messages} 
        isLoading={isLoading} 
      />
      
      <ChatInput 
        value={input}
        onChange={setInput}
        onSend={sendMessage}
        isLoading={isLoading}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ScheduleChatbot;
