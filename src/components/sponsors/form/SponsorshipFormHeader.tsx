
import React from 'react';
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Flag, Trophy, Award } from 'lucide-react';

interface SponsorshipFormHeaderProps {
  sponsorType: string;
  option: string | null;
}

const SponsorshipFormHeader: React.FC<SponsorshipFormHeaderProps> = ({ 
  sponsorType, 
  option 
}) => {
  // Render different icons based on sponsor type
  const renderIcon = () => {
    switch (sponsorType) {
      case "Premier":
        return <Flag className="h-6 w-6 text-racing-red" />;
      case "Platinum":
        return <Trophy className="h-6 w-6 text-racing-blue" />;
      case "Gold":
        return <Award className="h-6 w-6 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-6">
      <div className="flex items-center mb-6">
        {renderIcon()}
        <DialogTitle className="text-xl font-display font-bold ml-2">
          {sponsorType} Sponsorship Request
          {option && ` - ${option}`}
        </DialogTitle>
      </div>
      
      <DialogDescription className="mb-6">
        Complete this form to request your sponsorship package. Our team will contact you to finalize the details.
      </DialogDescription>
    </div>
  );
};

export default SponsorshipFormHeader;
