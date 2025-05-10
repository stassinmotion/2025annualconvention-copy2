
import { motion } from 'framer-motion';
import { Collapsible } from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useEventStyling } from './hooks/useEventStyling';

interface EventItemContainerProps {
  children: React.ReactNode;
  index: number;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  eventType: string;
}

export const EventItemContainer = ({ 
  children, 
  index, 
  isOpen, 
  onOpenChange, 
  eventType 
}: EventItemContainerProps) => {
  const { borderColor, isHovered, setHoveredState } = useEventStyling(eventType);

  const getEventBackground = () => {
    if (eventType === 'general') return 'from-blue-500/10 to-blue-600/20';
    if (eventType === 'education') return 'from-slate-700/10 to-slate-800/20';
    if (eventType === 'special') return 'from-racing-red/10 to-red-600/20';
    if (eventType === 'affiliate') return 'from-gray-500/10 to-gray-600/20';
    return 'from-slate-200/20 to-slate-300/30';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onMouseEnter={() => setHoveredState(true)}
      onMouseLeave={() => setHoveredState(false)}
      className="relative w-full"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Collapsible
        open={isOpen}
        onOpenChange={onOpenChange}
        className="w-full"
      >
        <Card 
          className={cn(
            "overflow-hidden shadow-md border-l-4 hover:shadow-lg transition-all duration-300 transform dashboard-card",
            isHovered ? "dashboard-card-hover scale-[1.01]" : "",
            isOpen ? "ring-2 ring-racing-red/20" : ""
          )}
          style={{ borderLeftColor: borderColor }}
        >
          <motion.div 
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-60",
              getEventBackground()
            )}
            animate={{
              backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
            }}
            transition={{ 
              duration: 3, 
              ease: "easeInOut",
              repeat: isHovered ? Infinity : 0,
              repeatType: "reverse"
            }}
          ></motion.div>
          {children}
        </Card>
      </Collapsible>
    </motion.div>
  );
};
