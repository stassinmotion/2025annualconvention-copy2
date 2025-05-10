import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import VenueSection from '@/components/home/VenueSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <>
      {/* Global background for the homepage */}
      <div className="bg-gradient-to-b from-black via-blue-950 to-black min-h-screen w-full fixed inset-0 -z-10" />
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Venue Section */}
        <VenueSection />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* CTA Section */}
        <CtaSection />
      </main>
    </>
  );
};

export default Index;
