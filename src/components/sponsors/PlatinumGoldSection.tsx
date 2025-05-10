
import React from 'react';
import { motion } from 'framer-motion';
import { SponsorCard } from '@/components/sponsors/SponsorCard';
import { platinumGoldData } from '@/components/sponsors/data/sponsorshipData';

interface PlatinumGoldSectionProps {
  onSponsorRequest: (sponsorType: string, option?: string) => void;
}

const PlatinumGoldSection: React.FC<PlatinumGoldSectionProps> = ({ onSponsorRequest }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      id="platinum-gold"
      className="mb-24 relative"
    >
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold mb-3 text-white">Platinum & Gold Sponsorships</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Enhance your visibility with our premium Platinum and Gold sponsorship packages, 
          designed to give your organization a strong presence at the convention.
        </p>
        <div className="w-20 h-1 bg-racing-blue mx-auto mt-4"></div>
      </div>
      
      <div className="relative rounded-xl overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img 
            src="/lovable-uploads/64687384-30c8-48be-8214-427b2957f77c.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="p-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SponsorCard 
              title={platinumGoldData.platinum.title}
              price={platinumGoldData.platinum.price}
              available={platinumGoldData.platinum.available}
              benefits={platinumGoldData.platinum.benefits}
              onRequestClick={() => onSponsorRequest("Platinum")}
              image="/lovable-uploads/870a29b7-9a72-4b35-b3e6-05478c710831.png"
              placeholderImage="/placeholder.svg"
              type="Platinum"
            />
            
            <SponsorCard 
              title={platinumGoldData.gold.title}
              price={platinumGoldData.gold.price}
              available={platinumGoldData.gold.available}
              benefits={platinumGoldData.gold.benefits}
              onRequestClick={() => onSponsorRequest("Gold")}
              image="/lovable-uploads/b86c9f97-2fda-4ec9-a77b-08d9a5fae90e.png"
              placeholderImage="/placeholder.svg"
              type="Gold"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlatinumGoldSection;
