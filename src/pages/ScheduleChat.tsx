
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import TypewriterText from '@/components/TypewriterText';
import ScheduleChatbot from '@/components/chatbot/ScheduleChatbot';
import { MessageSquare } from 'lucide-react';

const ScheduleChat = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <PageHeader title="" description="">
        <div className="relative z-10">
          <TypewriterText 
            text="SCHEDULE ASSISTANT" 
            className="text-2xl md:text-5xl font-display font-bold text-white tracking-tight mt-4" 
            centered={true} 
          />
          <p className="text-sm md:text-base text-white/80 mt-2 text-center max-w-2xl mx-auto">
            Chat with our AI assistant to get information about the convention schedule
          </p>
        </div>
      </PageHeader>
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare size={28} className="text-racing-blue" />
            <h2 className="text-3xl font-display font-bold text-racing-blue">Schedule Assistant</h2>
          </div>
          
          <p className="text-racing-gray mb-8">
            Have questions about the convention schedule? Our AI assistant can help! 
            Ask about specific events, times, locations, or get recommendations based on your interests.
          </p>
          
          <ScheduleChatbot />
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border text-sm text-racing-gray">
            <p><strong>Note:</strong> This assistant has knowledge of the official schedule. 
            For the most up-to-date information, please check the <a href="/agenda" className="text-racing-blue hover:underline">full agenda</a>.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScheduleChat;
