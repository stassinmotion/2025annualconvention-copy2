
import React from 'react';
import { motion } from 'framer-motion';
import { SponsorCard } from '@/components/sponsors/SponsorCard';
import SponsorDisplayCard from '@/components/sponsors/premier/SponsorDisplayCard';
import { premierSponsorData } from '@/components/sponsors/data/sponsorshipData';
import { useLocation } from 'react-router-dom';

interface PremierSponsorGridProps {
  onSponsorRequest: (sponsorType: string, option?: string) => void;
}

const PremierSponsorGrid: React.FC<PremierSponsorGridProps> = ({
  onSponsorRequest
}) => {
  const location = useLocation();
  const isSponsorsPage = location.pathname === '/sponsors';

  // Define sponsor images
  const sponsorImages = {
    "Premier Presenting Sponsor": "/lovable-uploads/9699804e-ee8a-450c-aabe-366565dad5a9.png",
    "Premier Event Sponsor": "/lovable-uploads/3910a928-fb9c-4484-a48f-78801f1db497.png",
    "Premier Technology Sponsor": "/lovable-uploads/650aab1b-ff20-442f-ac39-40121ce0d74c.png"
  };

  // Define placeholder images
  const sponsorPlaceholders = {
    "Premier Presenting Sponsor": "/placeholder.svg",
    "Premier Event Sponsor": "/placeholder.svg",
    "Premier Technology Sponsor": "/placeholder.svg"
  };

  return (
    <div className="bg-black/95 rounded-xl">
      <div className="p-8">
        <h2 className="font-bold mb-8 text-center font-display text-3xl text-zinc-50">
          {isSponsorsPage ? "Our Premier Sponsors" : "Premier Sponsorship Opportunities"}
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {premierSponsorData.map((sponsor, index) => (
            <motion.div 
              key={sponsor.title} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {isSponsorsPage ? (
                <SponsorDisplayCard 
                  title={sponsor.title} 
                  image={sponsorImages[sponsor.title as keyof typeof sponsorImages] || "/placeholder.svg"} 
                  type="Premier" 
                />
              ) : (
                <SponsorCard 
                  title={sponsor.title} 
                  price={sponsor.price} 
                  available={sponsor.available} 
                  benefits={sponsor.benefits} 
                  onRequestClick={() => onSponsorRequest("Premier", sponsor.option)} 
                  image={sponsorImages[sponsor.title as keyof typeof sponsorImages]} 
                  placeholderImage={sponsorPlaceholders[sponsor.title as keyof typeof sponsorPlaceholders]} 
                  type="Premier" 
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PremierSponsorGrid;
