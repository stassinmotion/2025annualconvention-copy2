import React from 'react';
import { motion } from 'framer-motion';
const SponsorshipsIntro: React.FC = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} className="mb-16">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
        Elevate Your Visibility
      </h2>
      <p className="text-white/80 text-lg mb-6">Choose from our premium sponsorship tiers to maximize your exposure at the Mississippi Association of Supervisors 2025 Annual Convention. Each package is designed to position your organization in front of all 82 counties across Mississippi.</p>
      <div className="w-24 h-1 bg-racing-red mx-auto"></div>
    </div>
    
    <div className="relative rounded-xl overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img src="/lovable-uploads/0248bb78-8f60-4cbb-a51c-6bd85dee2d53.png" alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="p-8 relative">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="p-6 border border-white/10 rounded-lg bg-black/40 backdrop-blur-sm flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <h3 className="font-display font-bold text-white mb-3 text-center text-3xl">Race Day Stats!</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 w-full">
                <div className="text-center p-3 bg-black/30 rounded-lg">
                  <div className="text-2xl font-bold text-racing-red">1600+</div>
                  <div className="text-sm text-white/80">Attendees</div>
                </div>
                <div className="text-center p-3 bg-black/30 rounded-lg">
                  <div className="text-2xl font-bold text-racing-red">82</div>
                  <div className="text-sm text-white/80">Counties</div>
                </div>
                <div className="text-center p-3 bg-black/30 rounded-lg">
                  <div className="text-2xl font-bold text-racing-red">4</div>
                  <div className="text-sm text-white/80">Days</div>
                </div>
                <div className="text-center p-3 bg-black/30 rounded-lg">
                  <div className="text-2xl font-bold text-racing-red">150+</div>
                  <div className="text-sm text-white/80">Exhibitors</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>;
};
export default SponsorshipsIntro;