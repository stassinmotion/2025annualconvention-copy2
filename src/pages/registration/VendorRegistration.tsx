
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import VendorInformation from '@/components/vendors/VendorInformation';

const VendorRegistration = () => {
  return (
    <>
      <PageHeader 
        title="Vendor Registration" 
        description="Join us at the 96th Annual Convention - Your Gateway to Success!"
        className="bg-gradient-to-r from-racing-black via-racing-blue/20 to-racing-black"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-racing-red hover:text-red-700 mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <ScrollArea className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pr-4"
            >
              <VendorInformation />
            </motion.div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default VendorRegistration;
