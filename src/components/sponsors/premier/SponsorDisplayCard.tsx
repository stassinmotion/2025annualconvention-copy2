
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface SponsorDisplayCardProps {
  title: string;
  image: string;
  type: string;
}

const SponsorDisplayCard: React.FC<SponsorDisplayCardProps> = ({ title, image, type }) => {
  const getTypeColor = () => {
    switch (type.toLowerCase()) {
      case 'premier': return 'racing-blue';
      case 'platinum': return 'racing-silver';
      case 'gold': return 'amber-400';
      default: return 'racing-blue';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className={`bg-gradient-to-br from-racing-black to-${getTypeColor()} p-4 text-white`}>
          <h3 className="text-lg font-bold truncate">{title}</h3>
        </div>
        <div className="relative">
          <img 
            src={image} 
            alt={`${title} sponsorship`}
            className="w-full h-48 object-contain bg-white p-4"
          />
          {/* Red border line under the image */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-racing-red"></div>
        </div>
        <div className={`p-4 bg-gradient-to-br from-racing-black to-${getTypeColor()} text-white flex-grow flex flex-col`}>
          <CardContent className="p-0 flex-grow">
            <div className="bg-white/10 p-3 rounded-lg mt-2">
              <h4 className="text-sm font-medium text-white flex items-center">
                <span className="mr-2 text-racing-red">•</span>
                {type} Sponsor
              </h4>
            </div>
          </CardContent>
          <CardFooter className="p-0 pt-4 border-t border-white/20">
            <span className="text-white text-sm font-medium">
              Thank you for your support!
            </span>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

export default SponsorDisplayCard;
