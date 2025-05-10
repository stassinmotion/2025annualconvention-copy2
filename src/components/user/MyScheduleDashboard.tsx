
import { useState } from 'react';
import { useAuth } from '@/contexts/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Calendar, Check, Clock, MapPin, Trash2, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUserSchedule } from '@/hooks/use-user-schedule';

const MyScheduleDashboard = () => {
  const { user } = useAuth();
  const { 
    userSchedule, 
    isLoading, 
    removeFromSchedule 
  } = useUserSchedule();

  console.log('MyScheduleDashboard - isLoading:', isLoading, 'schedule items:', userSchedule.length);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 size={24} className="animate-spin text-racing-blue mr-2" />
        <span>Loading your schedule...</span>
      </div>
    );
  }

  if (userSchedule.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">My Schedule</CardTitle>
          <CardDescription>
            Events you've added to your personal schedule
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <Calendar size={48} className="mx-auto text-racing-gray/50 mb-4" />
          <h3 className="text-lg font-medium text-racing-gray mb-2">No events in your schedule yet</h3>
          <p className="text-racing-gray/70 mb-6">Browse the agenda and add sessions to your schedule.</p>
          <Link to="/agenda">
            <Button>
              View Agenda
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">My Schedule</CardTitle>
          <CardDescription>
            Events you've added to your personal schedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userSchedule.map((item) => (
              <div 
                key={item.id} 
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-racing-blue">{item.event_title}</h3>
                    
                    <div className="flex items-center text-racing-gray text-sm mt-2">
                      <Clock size={14} className="mr-1" />
                      <span>{item.event_time}</span>
                    </div>
                    
                    {item.event_location && (
                      <div className="flex items-center text-racing-gray text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        <span>{item.event_location}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => removeFromSchedule(item.id)}
                    >
                      <Trash2 size={16} className="mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyScheduleDashboard;
