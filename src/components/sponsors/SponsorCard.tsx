import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SponsorCardProps {
  title: string;
  price: string;
  available: number;
  benefits: string[];
  onRequestClick: () => void;
  image?: string;
  placeholderImage?: string;
  type: string;
}

export const SponsorCard: React.FC<SponsorCardProps> = ({
  title,
  price,
  available,
  benefits,
  onRequestClick,
  image = "/lovable-uploads/64687384-30c8-48be-8214-427b2957f77c.png",
  placeholderImage = "/placeholder.svg",
  type
}) => {
  const getBorderColor = () => {
    switch (type.toLowerCase()) {
      case 'premier': return 'border-racing-blue';
      case 'platinum': return 'border-racing-silver';
      case 'gold': return 'border-amber-400';
      default: return 'border-racing-blue';
    }
  };

  const getEventBackground = () => {
    if (type.toLowerCase() === 'premier') return 'from-racing-blue/10 to-racing-blue/20';
    if (type.toLowerCase() === 'platinum') return 'from-slate-700/10 to-slate-800/20';
    if (type.toLowerCase() === 'gold') return 'from-amber-400/10 to-amber-500/20';
    return 'from-racing-blue/10 to-racing-blue/20';
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card 
        className={cn(
          "relative overflow-hidden h-full shadow-md hover:shadow-lg transition-all duration-300 transform border-l-4",
          getBorderColor()
        )}
      >
        <motion.div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-60",
            getEventBackground()
          )}
        ></motion.div>
        
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            src={image} 
            alt={`${title} sponsorship`}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 p-6 border-b border-white/10">
          <div className="relative flex items-center justify-between mb-2">
            <h3 className="text-xl font-display font-bold text-white text-left flex-grow pr-4">{title}</h3>
            <span className="text-xs bg-racing-blue/40 px-3 py-1 rounded-full text-white whitespace-nowrap">
              {available === 1 ? '1 Available' : `${available} Available`}
            </span>
          </div>
          <div className="text-2xl font-display font-bold text-racing-red text-left">{price}</div>
        </div>
        
        <div className="relative z-10 flex-grow p-6">
          <ul className="space-y-3 text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-racing-blue mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-white/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative z-10 p-6 pt-0">
          <Button 
            onClick={onRequestClick}
            className="w-full bg-racing-blue hover:bg-racing-blue/90 text-white font-medium border-0"
          >
            Request Sponsorship
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
