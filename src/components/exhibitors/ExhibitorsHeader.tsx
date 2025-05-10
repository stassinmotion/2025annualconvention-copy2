
import React from 'react';
import { motion } from 'framer-motion';

const ExhibitorsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <span className="inline-block bg-racing-red/10 text-racing-red text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
        Exhibition Hall
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Meet Our Exhibitors</h2>
      <p className="text-racing-gray max-w-2xl mx-auto">
        Explore innovative products and services designed to help county governments operate more efficiently and effectively.
      </p>
    </motion.div>
  );
};

export default ExhibitorsHeader;
