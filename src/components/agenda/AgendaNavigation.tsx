import { useState } from 'react';
import { agendaDays, EventType } from '@/data/agendaData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AgendaFilter from './AgendaFilter';
import { useIsMobile } from '@/hooks/use-mobile';
import { Flag, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
interface AgendaNavigationProps {
  onDaySelect?: (dayIndex: number) => void;
  onFilterChange?: (filter: EventType) => void;
  activeFilter?: EventType;
}
const AgendaNavigation = ({
  onDaySelect,
  onFilterChange,
  activeFilter = 'all'
}: AgendaNavigationProps) => {
  const isMobile = useIsMobile();
  const [activeDay, setActiveDay] = useState(0);
  const handleDayChange = (dayIndex: number) => {
    setActiveDay(dayIndex);
    if (onDaySelect) {
      onDaySelect(dayIndex);
    }
  };
  const handleFilterChange = (filter: EventType) => {
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };
  return <div className="flex flex-col items-start gap-6">
      <div className="flex items-center space-x-2 text-racing-red">
        <Calendar size={isMobile ? 14 : 16} className="text-racing-red" />
        <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>Select a day:</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {agendaDays.map((day, index) => <motion.div key={index} onClick={() => handleDayChange(index)} whileHover={{
        scale: 1.03
      }} whileTap={{
        scale: 0.98
      }} initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }} className={`relative cursor-pointer rounded-lg border transition-all duration-200 overflow-hidden ${activeDay === index ? 'border-racing-red shadow-lg transform' : 'border-gray-200 hover:shadow-md hover:border-gray-300'}`}>
            <div className={`absolute inset-0 ${activeDay === index ? 'bg-gradient-to-br from-racing-red/5 to-racing-blue/10' : 'bg-gradient-to-br from-slate-50 to-slate-100'}`}></div>
            
            {activeDay === index && <div className="absolute top-0 left-0 w-1.5 h-full bg-racing-red"></div>}
            
            <div className="relative p-4 flex flex-col items-center justify-center min-h-[130px]">
              {activeDay === index && <div className="absolute top-2 right-2">
                  <Flag size={isMobile ? 14 : 16} className="text-racing-red" />
                </div>}
              <div className={`font-display font-medium text-sm mb-1 ${activeDay === index ? 'text-racing-blue' : 'text-gray-600'}`}>
                {day.dayOfWeek}
              </div>
              <div className={`text-xl font-display font-bold ${activeDay === index ? 'text-racing-red' : 'text-gray-800'}`}>
                {day.date.split(',')[0]}
              </div>
              
              {day.label && <div className="mt-2 text-xs bg-racing-blue/10 text-racing-blue px-2 py-1 rounded-full font-medium">
                  {day.label}
                </div>}
            </div>
          </motion.div>)}
      </div>
      
      <div className="flex items-center space-x-2 text-racing-red mt-2">
        <Clock size={isMobile ? 14 : 16} className="text-racing-red" />
        <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>Filter events:</span>
      </div>
      
      <AgendaFilter onFilterChange={handleFilterChange} activeFilter={activeFilter} />
    </div>;
};
export default AgendaNavigation;