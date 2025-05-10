import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CalendarDays, Flag, Trophy } from 'lucide-react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import CountyRates from '@/components/registration/county/CountyRates';
import CountyImportantDates from '@/components/registration/county/CountyImportantDates';
import DoorHangerClass from '@/components/registration/county/DoorHangerClass';
import KidsZoneSection from '@/components/registration/county/KidsZoneSection';
import RegisterButton from '@/components/navigation/RegisterButton';

const CountyRegistration = () => {
  // MemberSuite registration portal URL (replace with actual URL)
  const memberSuiteUrl = "https://mssupervisors.org/member-login";
  
  return (
    <Layout>
      <PageHeader 
        title="County Registration" 
        description="Sign up for the 2025 MAS Annual Convention — Start Your Engines!"
      />
      
      <div className="container mx-auto px-4 py-12 relative">
        {/* Racing track decoration - left */}
        <div className="hidden lg:block absolute left-0 top-1/4 bottom-1/4 w-4 bg-gray-200 opacity-30 rounded-r-full">
          {/* Checkered-flag-bg overlay removed for clean look */}
        </div>
        
        {/* Racing track decoration - right */}
        <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-4 bg-gray-200 opacity-30 rounded-l-full">
          {/* Checkered-flag-bg overlay removed for clean look */}
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-racing-red hover:text-red-700 mb-6 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {/* Registration Info Card */}
            <GlassCard accentColor="red">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-3xl font-display font-bold relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-racing-red to-racing-blue">
                      County Official Registration
                    </span>
                    <motion.div 
                      className="absolute -top-1 -right-6 transform rotate-12"
                      animate={{ 
                        rotate: [12, 0, 12]
                      }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <Flag className="h-5 w-5 text-racing-red" />
                    </motion.div>
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <CalendarDays className="h-4 w-4 text-gray-600" />
                    <p className="text-gray-600">96th Annual Convention • June 9-12, 2025</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <RegisterButton large={true} />
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-md flex items-start gap-3">
                  <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                    <Trophy className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-amber-800 font-medium">
                      <strong>Important:</strong> County employees cannot register as a spouse/guest. 
                    </p>
                    <p className="text-amber-700 text-sm mt-1">
                      Please register through your county's account.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Registration Rates */}
              <CountyRates />
            </GlassCard>
            
            {/* Important Dates */}
            <CountyImportantDates />
            
            {/* Door Hanger Class */}
            <DoorHangerClass />
            
            {/* Kids Zone Passes */}
            <KidsZoneSection />
            
            {/* Registration CTA */}
            <div className="flex justify-center pt-6">
              <motion.div 
                className="w-full md:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href={memberSuiteUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button 
                    size="lg" 
                    className="bg-racing-red hover:bg-red-700 w-full md:w-auto text-white flex items-center gap-2 justify-center relative overflow-hidden group shadow-md hover:shadow-lg"
                  >
                    {/* Racing flag pattern overlay removed for clean look */}
                    
                    <span className="text-lg font-bold">Continue to Member Portal Registration</span>
                    <ExternalLink size={18} />
                    
                    {/* Highlight shine effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default CountyRegistration;
