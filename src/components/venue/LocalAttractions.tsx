
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const LocalAttractions = () => {
  const attractions = [
    {
      name: "Biloxi Lighthouse",
      description: "Historic lighthouse offering tours and scenic views of the Gulf Coast.",
      icon: <MapPin className="w-5 h-5 text-racing-red" />,
      distance: "2.5 miles"
    },
    {
      name: "Beau Rivage Casino",
      description: "Luxury casino resort with gaming, dining, and entertainment options.",
      icon: <MapPin className="w-5 h-5 text-racing-red" />,
      distance: "1.2 miles"
    },
    {
      name: "Maritime & Seafood Industry Museum",
      description: "Museum celebrating the maritime history of the Mississippi Gulf Coast.",
      icon: <MapPin className="w-5 h-5 text-racing-red" />,
      distance: "3.0 miles"
    },
    {
      name: "Ship Island Excursions",
      description: "Ferry service to Ship Island for beaches and Fort Massachusetts.",
      icon: <MapPin className="w-5 h-5 text-racing-red" />,
      distance: "4.5 miles"
    },
    {
      name: "Ohr-O'Keefe Museum of Art",
      description: "Museum featuring the work of George Ohr, the 'Mad Potter of Biloxi'.",
      icon: <MapPin className="w-5 h-5 text-racing-red" />,
      distance: "3.2 miles"
    },
    {
      name: "Biloxi Beach",
      description: "White sand beaches along the Gulf of Mexico.",
      icon: <MapPin className="w-5 h-5 text-racing-red" />,
      distance: "0.8 miles"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block px-2 py-1 bg-racing-red/10 text-racing-red rounded text-xs font-medium mb-3">
          EXPLORE BILOXI
        </div>
        <h2 className="text-3xl font-display font-bold mb-4">Local Attractions</h2>
        <p className="text-racing-gray">
          Make the most of your time in Biloxi by exploring these nearby attractions during your free time.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attractions.map((attraction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full flex flex-col">
              <div className="flex items-start space-x-3 mb-3">
                {attraction.icon}
                <div className="flex-1">
                  <h3 className="font-display font-medium">{attraction.name}</h3>
                  <div className="text-sm text-racing-gray">{attraction.distance} from venue</div>
                </div>
              </div>
              <p className="text-sm text-racing-gray">{attraction.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LocalAttractions;
