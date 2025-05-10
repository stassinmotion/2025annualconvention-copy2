
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Pencil } from 'lucide-react';

interface SponsorTierProps {
  title: string;
  sponsors: string[];
  color: string;
}

const SponsorTier: React.FC<SponsorTierProps> = ({ title, sponsors, color }) => {
  const [editingSponsorIndex, setEditingSponsorIndex] = useState<number | null>(null);
  const [editedSponsorName, setEditedSponsorName] = useState<string>('');
  const [sponsorsList, setSponsorsList] = useState<string[]>(sponsors);

  // Function to get gradient colors based on tier
  const getGradientClass = () => {
    if (color.includes('racing-silver')) return 'from-racing-black to-racing-silver';
    if (color.includes('racing-gold') || color.includes('amber')) return 'from-racing-black to-amber-400';
    return 'from-racing-black to-racing-blue';
  };

  const handleEditClick = (index: number) => {
    setEditingSponsorIndex(index);
    setEditedSponsorName(sponsorsList[index]);
  };

  const handleSaveEdit = (index: number) => {
    if (editedSponsorName.trim() !== '') {
      const updatedSponsors = [...sponsorsList];
      updatedSponsors[index] = editedSponsorName;
      setSponsorsList(updatedSponsors);
    }
    setEditingSponsorIndex(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedSponsorName(e.target.value);
  };

  return (
    <div className="mb-12">
      <div className={`flex justify-center items-center mb-6 pb-2 border-b ${color}`}>
        <h3 className="text-2xl font-bold text-center">{title} Sponsors</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sponsorsList.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden p-5 rounded-lg ${color.replace('border-', 'bg-').replace('racing-', 'racing-') + '/10'} border border-${color.replace('border-', '')}/20 group hover:shadow-md transition-all duration-300`}
          >
            {/* Decorative gradient */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${getGradientClass()}`}></div>
            
            <div className="relative z-10 flex justify-between items-center">
              {editingSponsorIndex === index ? (
                <div className="w-full flex gap-2">
                  <Input 
                    value={editedSponsorName}
                    onChange={handleInputChange}
                    className="flex-1"
                    autoFocus
                  />
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => handleSaveEdit(index)}
                    className="p-1 h-8 w-8"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <p className="font-medium text-center flex-1">{sponsor}</p>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => handleEditClick(index)} 
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-6 w-6 ml-2"
                  >
                    <Pencil className="h-3 w-3" />
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SponsorTier;
