
import React from 'react';
import SponsorsHeader from '@/components/sponsors/SponsorsHeader';
import PremierSponsorsSection from '@/components/sponsors/PremierSponsorsSection';
import SponsorTier from '@/components/sponsors/SponsorTier';
import BecomeASponsor from '@/components/sponsors/BecomeASponsor';
import { sponsorsData } from '@/components/sponsors/data/sponsorsData';

interface MainSponsorSectionProps {
  onSponsorRequest: (sponsorType: string, option?: string) => void;
}

const MainSponsorSection: React.FC<MainSponsorSectionProps> = ({ onSponsorRequest }) => {
  return (
    <section className="py-16 container mx-auto px-4">
      <SponsorsHeader />
      
      <PremierSponsorsSection onSponsorRequest={onSponsorRequest} />

      <SponsorTier 
        title="Platinum" 
        sponsors={sponsorsData.platinum}
        color="border-racing-silver"
      />

      <SponsorTier 
        title="Gold" 
        sponsors={sponsorsData.gold}
        color="border-racing-gold"
      />

      <BecomeASponsor />
    </section>
  );
};

export default MainSponsorSection;
