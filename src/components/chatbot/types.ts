
export type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  error?: boolean;
};

export type ChatbotHookReturn = {
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  isLoading: boolean;
  isError: boolean;
  systemError: string | null;
  sendMessage: () => Promise<void>;
  resetChat: () => void;
};
