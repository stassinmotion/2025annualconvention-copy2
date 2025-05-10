import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, UserPlus, Presentation, Store, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Full Event Schedule",
    description: "Explore our action-packed agenda with keynotes, workshops, and networking events.",
    icon: <Calendar size={24} className="text-red-400" />, // red icon for contrast
    link: "/agenda",
    hover: "See the full schedule and plan your experience!",
    image: "https://via.placeholder.com/300x120"
  },
  {
    title: "Expert Speakers",
    description: "Learn from industry leaders and policy experts who will share valuable insights.",
    icon: <Presentation size={24} className="text-red-400" />,
    link: "/speakers",
    hover: "Meet our keynote and breakout speakers.",
    image: "https://via.placeholder.com/300x120"
  },
  {
    title: "Meet Our Exhibitors",
    description: "Connect with vendors and service providers showcasing solutions for county government.",
    icon: <Store size={24} className="text-red-400" />,
    link: "/exhibitors",
    hover: "Discover innovative products and services.",
    image: "https://via.placeholder.com/300x120"
  },
  {
    title: "View Our Sponsors",
    description: "See the organizations that make our annual convention possible.",
    icon: <Award size={24} className="text-red-400" />,
    link: "/sponsors",
    hover: "Thank you to our generous sponsors!",
    image: "https://via.placeholder.com/300x120"
  },
  {
    title: "Become a Sponsor",
    description: "Showcase your organization to county leaders from across Mississippi.",
    icon: <UserPlus size={24} className="text-red-400" />,
    link: "/sponsorships",
    hover: "Learn about sponsorship opportunities.",
    image: "https://via.placeholder.com/300x120"
  }
];

const GlassFeatureCard = ({ title, description, icon, link, hover, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{
      scale: 1.04,
      boxShadow: "0 0 24px 4px #2563eb55, 0 8px 32px 0 rgba(59,130,246,0.25)",
      borderColor: "#2563eb"
    }}
    className="relative group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between min-h-[420px] max-w-xs mx-auto"
    style={{
      background: `rgba(16,24,39,0.7)`,
      backgroundBlendMode: 'overlay',
      backgroundSize: '40px 40px',
    }}
  >
    {image && (
      <img
        src={image}
        alt=""
        className="w-full h-28 object-cover rounded-xl mb-4 opacity-70"
      />
    )}
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-white/90 mb-2">{description}</p>
    <Link to={link} className="mt-auto">
      <motion.button
        whileHover={{ boxShadow: "0 0 16px 4px #fff, 0 0 0 2px #3b82f6" }}
        className="relative mt-4 px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#0a2540] overflow-hidden shadow-lg transition group border-none"
      >
        <span className="relative z-10">Learn More</span>
      </motion.button>
    </Link>
    {/* Hover reveal overlay */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileHover={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center text-center text-white px-4 py-6 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none transition-all duration-400"
      style={{ transition: "opacity 0.4s, transform 0.4s" }}
    >
      <span className="text-lg font-semibold animate-slide-up">{hover}</span>
    </motion.div>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section className="py-20 overflow-hidden animate-gradient-x">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="inline-block bg-red-400/10 text-red-400 text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
          Race Day Details
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
          Everything You Need to Know
        </h2>
        <p className="text-blue-200 max-w-2xl mx-auto">Your guide to the Mississippi Association of Supervisors Annual Convention - from the start to finish line.</p>
      </motion.div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <GlassFeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;