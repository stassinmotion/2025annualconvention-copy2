
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Users, FileText, CreditCard, BarChart3 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    pendingPayments: 0,
    completedPayments: 0,
    totalVendors: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch county registrations as an example
        const { data: countyRegistrations, error } = await supabase
          .from('county_registrations')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(10);

        if (error) throw error;
        
        setRegistrations(countyRegistrations || []);
        
        // Get some basic stats
        const { count: totalRegs } = await supabase
          .from('county_registrations')
          .select('*', { count: 'exact', head: true });
          
        const { count: pendingPayments } = await supabase
          .from('county_registrations')
          .select('*', { count: 'exact', head: true })
          .eq('payment_status', 'pending');
          
        const { count: completedPayments } = await supabase
          .from('county_registrations')
          .select('*', { count: 'exact', head: true })
          .eq('payment_status', 'completed');
          
        const { count: totalVendors } = await supabase
          .from('vendor_registrations')
          .select('*', { count: 'exact', head: true });
          
        setStats({
          totalRegistrations: totalRegs || 0,
          pendingPayments: pendingPayments || 0,
          completedPayments: completedPayments || 0,
          totalVendors: totalVendors || 0
        });
      } catch (error: any) {
        console.error('Error fetching data:', error);
        toast({
          title: 'Error',
          description: 'Failed to load dashboard data',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-racing-blue" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              {stats.totalRegistrations}
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              {stats.pendingPayments}
              <CreditCard className="h-4 w-4 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              {stats.completedPayments}
              <CreditCard className="h-4 w-4 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Vendors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              {stats.totalVendors}
              <BarChart3 className="h-4 w-4 text-racing-blue" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="registrations" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="registrations">Registrations</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="reports" disabled>Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="registrations">
          <Card>
            <CardHeader>
              <CardTitle>Recent Registrations</CardTitle>
              <CardDescription>
                The most recent attendee registrations for the conference.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {registrations.length === 0 ? (
                <p className="text-gray-500">No registrations found</p>
              ) : (
                <div className="rounded-md border">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">County</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {registrations.map((reg) => (
                        <tr key={reg.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium">{reg.first_name} {reg.last_name}</div>
                            <div className="text-sm text-gray-500">{reg.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{reg.county}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{reg.position}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              reg.payment_status === 'completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {reg.payment_status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="vendors">
          <Card>
            <CardHeader>
              <CardTitle>Vendor Management</CardTitle>
              <CardDescription>
                Manage vendor registrations and booth assignments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Vendor management interface coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
