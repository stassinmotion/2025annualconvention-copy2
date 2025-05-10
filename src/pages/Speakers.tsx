
import React from 'react';
import PageHeader from '@/components/PageHeader';
import SpeakersHeader from '@/components/speakers/SpeakersHeader';
import SpeakersList from '@/components/speakers/SpeakersList';
import { speakersData } from '@/components/speakers/data/speakersData';

const Speakers = () => {
  const featuredSpeakers = speakersData.filter(speaker => speaker.featured);
  const regularSpeakers = speakersData.filter(speaker => !speaker.featured);

  return (
    <>
      <PageHeader
        title="Speakers"
        description="Learn from the best minds in county government and administration"
        className="bg-gradient-to-r from-racing-blue to-racing-red"
      />

      <section className="py-16 container mx-auto px-4">
        <SpeakersHeader />
        
        {featuredSpeakers.length > 0 && (
          <SpeakersList 
            speakers={featuredSpeakers} 
            title="Featured Sessions" 
            columns="grid-cols-1 md:grid-cols-2 gap-8"
          />
        )}

        <SpeakersList 
          speakers={regularSpeakers} 
          title="Program Speakers" 
        />
      </section>
    </>
  );
};

export default Speakers;
