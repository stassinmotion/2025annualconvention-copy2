import React from 'react';
import PremierSponsorCard from './premier/PremierSponsorCard';
import { sponsorsData } from './data/sponsorsData';
import PremierSponsorGrid from './premier/PremierSponsorGrid';
import { useLocation } from 'react-router-dom';
interface PremierSponsorsSectionProps {
  onSponsorRequest: (sponsorType: string, option?: string) => void;
}
const PremierSponsorsSection: React.FC<PremierSponsorsSectionProps> = ({
  onSponsorRequest
}) => {
  const location = useLocation();
  const isSponsorsPage = location.pathname === '/sponsors';
  return <div className="mb-16">
      
      
      {/* Display current sponsors only on the Sponsors page */}
      {isSponsorsPage && <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sponsorsData.premier.map(sponsor => <PremierSponsorCard key={sponsor.id} sponsor={sponsor} />)}
        </div>}
      
      {/* Display sponsorship opportunities */}
      <PremierSponsorGrid onSponsorRequest={onSponsorRequest} />
    </div>;
};
export default PremierSponsorsSection;