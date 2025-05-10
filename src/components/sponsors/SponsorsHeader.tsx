
import React from 'react';
import { motion } from 'framer-motion';

const SponsorsHeader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <span className="inline-block bg-racing-red/10 text-racing-red text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
        Thank You To Our Sponsors
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
        Proudly Supported By Industry Leaders
      </h2>
      <p className="text-racing-gray max-w-2xl mx-auto">
        We're grateful to the organizations that support the Mississippi Association of Supervisors Annual Convention and help make it a success year after year.
      </p>
    </motion.div>
  );
};

export default SponsorsHeader;
