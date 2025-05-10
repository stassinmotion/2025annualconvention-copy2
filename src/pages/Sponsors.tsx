
import React from 'react';
import PageHeader from '@/components/PageHeader';
import MainSponsorSection from '@/components/sponsors/sections/MainSponsorSection';

const Sponsors = () => {
  const handleSponsorRequest = (sponsorType: string, option?: string) => {
    // This would handle the sponsor request, maybe open a form or redirect
    console.log(`Sponsor request for ${sponsorType} ${option || ''}`);
    // For now we'll just log it, but in a real app this might open a modal or navigate
  };

  return (
    <>
      <PageHeader
        title="Our Sponsors"
        description="The organizations that make our annual convention possible"
        className="bg-gradient-to-r from-racing-blue to-racing-red"
      />

      <MainSponsorSection onSponsorRequest={handleSponsorRequest} />
    </>
  );
};

export default Sponsors;
