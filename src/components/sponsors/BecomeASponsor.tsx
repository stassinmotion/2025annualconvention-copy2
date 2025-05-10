import React from 'react';
const BecomeASponsor: React.FC = () => {
  return <div className="mt-16 bg-racing-blue/5 p-8 rounded-lg text-center">
      <h3 className="text-2xl font-bold mb-3">Become a Sponsor</h3>
      <p className="mb-6 max-w-2xl mx-auto">Interested in showcasing your organization to county leaders from across Mississippi? Learn about our sponsorship opportunities.</p>
      <a href="/sponsorships" className="inline-block bg-racing-blue text-white px-6 py-3 rounded-md font-medium hover:bg-racing-blue/90 transition-colors">
        View Sponsorship Opportunities
      </a>
    </div>;
};
export default BecomeASponsor;