
import React, { useState } from 'react';
import SponsorshipHeader from '@/components/sponsors/sections/SponsorshipHeader';
import SponsorshipContent from '@/components/sponsors/sections/SponsorshipContent';
import SponsorshipFormModal from '@/components/sponsors/sections/SponsorshipFormModal';

const Sponsorships = () => {
  const [selectedSponsorType, setSelectedSponsorType] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSponsorRequest = (sponsorType: string, option?: string) => {
    setSelectedSponsorType(sponsorType);
    setSelectedOption(option || null);
  };

  const handleCloseForm = () => {
    setSelectedSponsorType(null);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      <div className="relative">
        <SponsorshipHeader />
        <SponsorshipContent onSponsorRequest={handleSponsorRequest} />
        <SponsorshipFormModal 
          selectedSponsorType={selectedSponsorType}
          selectedOption={selectedOption}
          onClose={handleCloseForm}
        />
      </div>
    </div>
  );
};

export default Sponsorships;
