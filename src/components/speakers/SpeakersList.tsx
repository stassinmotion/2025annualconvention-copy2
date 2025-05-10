
import React from 'react';
import SpeakerCard from './SpeakerCard';
import { Speaker } from './data/speakersData';

interface SpeakersListProps {
  speakers: Speaker[];
  title: string;
  columns?: string;
}

const SpeakersList = ({ speakers, title, columns = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }: SpeakersListProps) => {
  if (speakers.length === 0) return null;

  return (
    <div className="mb-16">
      <h3 className="text-xl font-bold mb-6 border-b pb-2">{title}</h3>
      <div className={`grid ${columns} gap-8`}>
        {speakers.map(speaker => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default SpeakersList;
