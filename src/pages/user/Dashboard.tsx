
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth';
import { User, Calendar, Settings } from 'lucide-react';
import ProfileDashboard from '@/components/user/ProfileDashboard';
import MyScheduleDashboard from '@/components/user/MyScheduleDashboard';

const UserDashboard = () => {
  const { isAuthenticated, profile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !profile) {
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
          <h1 className="text-3xl font-display font-bold text-racing-blue mb-8">
            Welcome, {profile.first_name || 'Attendee'}!
          </h1>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-2 md:w-[400px] mb-8">
              <TabsTrigger value="profile" className="flex items-center">
                <User size={16} className="mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center">
                <Calendar size={16} className="mr-2" />
                My Schedule
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <ProfileDashboard />
            </TabsContent>

            <TabsContent value="schedule">
              <MyScheduleDashboard />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
