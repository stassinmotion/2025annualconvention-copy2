
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

interface PremierSponsorCardProps {
  sponsor: {
    id: number;
    name: string;
    logo: string;
    description: string;
    website: string;
    sponsorship: string;
  };
}

const PremierSponsorCard: React.FC<PremierSponsorCardProps> = ({ sponsor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-racing-blue">
        <div className="bg-gradient-to-br from-racing-black to-racing-blue text-white px-4 py-2 text-sm font-medium text-center">
          {sponsor.sponsorship}
        </div>
        <CardHeader className="flex flex-col items-center text-center">
          <div className="bg-white p-6 rounded-md mb-4 w-full flex justify-center">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              className="h-24 object-contain" 
            />
          </div>
          <CardTitle>{sponsor.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">{sponsor.description}</p>
        </CardContent>
        <CardFooter className="border-t pt-4 flex justify-center">
          <a 
            href={sponsor.website}
            className="text-racing-blue text-sm font-medium hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
            <ExternalLink size={14} className="ml-1" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PremierSponsorCard;
