
import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import TypewriterText from '@/components/TypewriterText';

const SponsorshipHeader: React.FC = () => {
  return (
    <PageHeader 
      title="" 
      description=""
      className="relative py-20 md:py-28 bg-transparent"
    >
      {/* Background image overlay for the header */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/lovable-uploads/0248bb78-8f60-4cbb-a51c-6bd85dee2d53.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60 object-center"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>
      
      <TypewriterText 
        text="SPONSORSHIP OPPORTUNITIES" 
        className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mt-4"
        centered={true}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-white/90 max-w-2xl mx-auto text-center mt-4 text-lg"
      >
        Partner with us for Mississippi's premier county government event
      </motion.p>
    </PageHeader>
  );
};

export default SponsorshipHeader;
