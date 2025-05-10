
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface Exhibitor {
  id: number;
  name: string;
  logo: string;
  description: string;
  boothNumber: string;
  category: string;
  website: string;
}

interface ExhibitorCardProps {
  exhibitor: Exhibitor;
}

const ExhibitorCard = ({ exhibitor }: ExhibitorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{exhibitor.name}</CardTitle>
              <CardDescription>{exhibitor.category}</CardDescription>
            </div>
            <div className="bg-racing-blue/10 px-3 py-1 rounded-full flex items-center">
              <MapPin size={14} className="text-racing-blue mr-1" />
              <span className="text-xs font-medium text-racing-blue">Booth {exhibitor.boothNumber}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-4 p-4 bg-gray-50 rounded-md">
            <img 
              src={exhibitor.logo} 
              alt={exhibitor.name} 
              className="h-16 object-contain" 
            />
          </div>
          <p className="text-sm text-gray-600">{exhibitor.description}</p>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <a 
            href={exhibitor.website}
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

export default ExhibitorCard;
