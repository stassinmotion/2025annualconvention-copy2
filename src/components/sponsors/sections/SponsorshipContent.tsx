
import React from 'react';
import SponsorshipsIntro from '@/components/sponsors/SponsorshipsIntro';
import PremierSponsorsSection from '@/components/sponsors/PremierSponsorsSection';
import PlatinumGoldSection from '@/components/sponsors/PlatinumGoldSection';

interface SponsorshipContentProps {
  onSponsorRequest: (sponsorType: string, option?: string) => void;
}

const SponsorshipContent: React.FC<SponsorshipContentProps> = ({ onSponsorRequest }) => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <SponsorshipsIntro />
      
      <div className="space-y-20">
        <PremierSponsorsSection onSponsorRequest={onSponsorRequest} />
        <PlatinumGoldSection onSponsorRequest={onSponsorRequest} />
      </div>
    </div>
  );
};

export default SponsorshipContent;
