
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth';
import { CalendarClock, Loader2 } from 'lucide-react';
import MyScheduleDashboard from '@/components/user/MyScheduleDashboard';

const MySchedulePage = () => {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if authentication check is complete and user is not authenticated
    if (!authLoading && !isAuthenticated) {
      console.log('User not authenticated, redirecting to login');
      navigate('/login', { state: { from: '/my-schedule' } });
    }
  }, [isAuthenticated, authLoading, navigate]);

  // Show loading state while checking authentication
  if (authLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 pt-24 flex items-center justify-center">
          <Loader2 size={24} className="animate-spin text-racing-blue mr-2" />
          <span>Loading...</span>
        </div>
      </Layout>
    );
  }

  // Don't render content if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <CalendarClock size={28} className="text-racing-blue" />
            <h1 className="text-3xl font-display font-bold text-racing-blue">
              My Schedule
            </h1>
          </div>
          
          <MyScheduleDashboard />
        </motion.div>
      </div>
    </Layout>
  );
};

export default MySchedulePage;
