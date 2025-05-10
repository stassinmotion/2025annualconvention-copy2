
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Presentation, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SpeakerDialog from './SpeakerDialog';
import { Speaker } from './data/speakersData';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard = ({ speaker }: SpeakerCardProps) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative">
          <img 
            src={speaker.image} 
            alt="Speaker placeholder" 
            className="w-full h-48 object-cover"
          />
          {/* Price badge styled similar to hotel card */}
          {speaker.featured && (
            <div className="absolute top-2 right-2 bg-racing-red/90 text-white px-2 py-1 rounded-full text-xs flex items-center">
              <Star size={12} className="mr-1" />
              <span>Featured</span>
            </div>
          )}
          {/* Red border line under the image */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-racing-red"></div>
        </div>
        <div className="p-4 bg-gradient-to-br from-racing-black to-racing-blue text-white flex-grow flex flex-col">
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-white">{speaker.name}</CardTitle>
            {speaker.title && (
              <CardDescription className="text-white/70">{speaker.title}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="p-0 flex-grow">
            <div className="bg-white/10 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-white flex items-center">
                <Presentation size={16} className="mr-2 text-racing-red" />
                Speaking Topic
              </h4>
              <p className="text-sm mt-1 text-white/80">{speaker.topic}</p>
            </div>
          </CardContent>
          <CardFooter className="p-0 pt-4 border-t border-white/20">
            <button 
              className="text-white text-sm font-medium hover:underline"
              onClick={() => setShowProfile(true)}
            >
              View Full Profile
            </button>
          </CardFooter>
        </div>
      </Card>

      <SpeakerDialog 
        speaker={speaker} 
        open={showProfile}
        onOpenChange={setShowProfile}
      />
    </motion.div>
  );
};

export default SpeakerCard;
