import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { agendaDays, EventType } from '@/data/agendaData';
import DaySchedule from '@/components/agenda/DaySchedule';
import AgendaNavigation from '@/components/agenda/AgendaNavigation';
import TypewriterText from '@/components/TypewriterText';
import { Calendar, Flag, ChevronDown, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import GlassCard from '@/components/GlassCard';
import ParticleBackground from '@/components/ParticleBackground';
const Agenda = () => {
  const isMobile = useIsMobile();
  const [selectedDay, setSelectedDay] = useState(0); // Default to first day
  const [activeFilter, setActiveFilter] = useState<EventType>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    // Mark component as loaded after a short delay to ensure animations run properly
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  const scrollToSchedule = () => {
    document.getElementById("schedule-section")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-gray-200 rounded mb-4 mx-auto"></div>
          <div className="h-4 w-64 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>;
  }
  return <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
      <PageHeader title="" description="">
        <div className="relative z-10">
          <TypewriterText text="EVENT AGENDA" className="text-2xl md:text-5xl font-display font-bold text-white tracking-tight mt-4" centered={true} />
          <p className="text-sm md:text-base text-white/80 mt-2 text-center max-w-2xl mx-auto">
            Stay informed about all sessions, workshops, and networking opportunities at the convention
          </p>
          
          <div className="mt-6 flex justify-center">
            <a href="/schedule-chat" className="flex items-center gap-2 bg-racing-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg">
              <MessageSquare size={20} />
              <span>Ask the Schedule Assistant</span>
            </a>
          </div>
        </div>
      </PageHeader>
      
      <div className="relative bg-gradient-to-b from-white to-slate-50">
        <ParticleBackground className="opacity-30" />
        
        <div id="schedule-section" className="container mx-auto px-4 md:px-6 py-8 md:py-16 relative z-10">
          <div className="flex flex-col space-y-8 mb-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar size={isMobile ? 20 : 24} className="text-racing-red" />
                <h2 className="md:text-3xl font-display font-bold text-racing-blue text-4xl">Race Day Agenda</h2>
              </div>
              <p className="text-sm md:text-base text-racing-gray">
                Navigate through your convention experience with our interactive race day schedule. Select a day and filter events below.
              </p>
            </motion.div>
            
            <GlassCard className="p-6 md:p-8">
              <AgendaNavigation onDaySelect={day => setSelectedDay(day)} onFilterChange={filter => setActiveFilter(filter)} activeFilter={activeFilter} />
            </GlassCard>
            
            <div className={cn("sticky transition-all duration-300 z-20 bg-white/95 backdrop-blur-sm border-b", isScrolled ? "top-16 shadow-md" : "top-0")}>
              <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Flag size={16} className="text-racing-red" />
                  <h3 className="font-display text-racing-blue font-bold text-3xl">
                    {agendaDays[selectedDay].dayOfWeek} - {agendaDays[selectedDay].date}
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs md:text-sm text-racing-gray font-medium">
                    Showing: {activeFilter === 'all' ? 'All Events' : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
                  </span>
                </div>
              </div>
            </div>
            
            {agendaDays && agendaDays.length > 0 && <DaySchedule day={agendaDays[selectedDay]} eventFilter={activeFilter} />}
          </div>
        </div>
      </div>
    </motion.div>;
};
export default Agenda;