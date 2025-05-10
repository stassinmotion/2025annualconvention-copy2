
import PageHeader from '@/components/PageHeader';
import VenueHeader from '@/components/venue/VenueHeader';
import VenueInfo from '@/components/venue/VenueInfo';
import LocalAttractions from '@/components/venue/LocalAttractions';
import Recommendations from '@/components/venue/Recommendations';

const Venue = () => {
  return (
    <>
      <PageHeader 
        title="Race Venue" 
        description="Mississippi Coast Convention Center in beautiful Biloxi, MS."
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <VenueHeader />
        <VenueInfo />
        <LocalAttractions />
        <Recommendations />
      </div>
    </>
  );
};

export default Venue;
