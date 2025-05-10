
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { agendaDays } from '@/data/agendaData';
import { useToast } from '@/hooks/use-toast';
import { Message, ChatbotHookReturn } from '../types';

export const useChatbot = (): ChatbotHookReturn => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content: 'Hello! I can help answer questions about the racing convention schedule. What would you like to know?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [systemError, setSystemError] = useState<string | null>(null);
  const { toast } = useToast();

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        content: 'Hello! I can help answer questions about the racing convention schedule. What would you like to know?',
        sender: 'bot',
        timestamp: new Date(),
      }
    ]);
    setIsError(false);
    setSystemError(null);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setIsError(false);
    setSystemError(null);
    
    try {
      // Log the request for debugging
      console.log('Sending request to schedule-chatbot function with question:', input);
      
      // Get response from Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('schedule-chatbot', {
        body: {
          question: input,
          scheduleData: agendaDays, // Pass all schedule data to the function
        },
      });
      
      if (error) {
        console.error('Error from Supabase function:', error);
        throw error;
      }
      
      console.log('Response from schedule-chatbot function:', data);
      
      if (!data) {
        throw new Error('No data returned from the assistant');
      }
      
      if (data.error) {
        console.error('Error from chatbot function:', data.error, data.details || '');
        setSystemError(data.details || 'Error connecting to the assistant service');
        throw new Error(data.error);
      }
      
      if (!data.response) {
        throw new Error('Empty response from the assistant');
      }
      
      // Add bot response to chat
      const botMessage: Message = {
        id: crypto.randomUUID(),
        content: data.response,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling schedule-chatbot function:', error);
      setIsError(true);
      
      toast({
        title: 'Something went wrong',
        description: 'Could not get a response from the chatbot.',
        variant: 'destructive',
      });
      
      // Add error message from bot
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        content: 'Sorry, I encountered an error. Please try asking again or use simpler wording. If the problem persists, check the full agenda for schedule information.',
        sender: 'bot',
        timestamp: new Date(),
        error: true
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    isError,
    systemError,
    sendMessage,
    resetChat
  };
};
