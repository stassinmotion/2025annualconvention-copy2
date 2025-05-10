
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/auth';
import { toast } from '@/components/ui/use-toast';

export type UserScheduleItem = {
  id: string;
  event_id: string;
  event_title: string;
  event_description?: string;
  event_time: string;
  event_location?: string;
  event_type: string;
  user_id: string;
};

export const useUserSchedule = () => {
  const [userSchedule, setUserSchedule] = useState<UserScheduleItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  // Fetch user schedule
  const fetchUserSchedule = async () => {
    if (!user) {
      setUserSchedule([]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      console.log('Fetching schedule for user:', user.id);
      
      const { data, error } = await supabase
        .from('user_schedule')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      console.log('Schedule data received:', data);
      setUserSchedule(data as UserScheduleItem[]);
    } catch (error: any) {
      console.error('Error fetching user schedule:', error);
      toast({
        variant: "destructive",
        title: "Error loading schedule",
        description: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Add event to user schedule
  const addToSchedule = async (event: {
    id: string;
    title: string;
    description?: string;
    time: string;
    location?: string;
    type: string;
  }) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please sign in to add events to your schedule."
      });
      return false;
    }

    try {
      // Check if already in schedule
      const { data: existing } = await supabase
        .from('user_schedule')
        .select('id')
        .eq('user_id', user.id)
        .eq('event_id', event.id)
        .maybeSingle();

      if (existing) {
        toast({
          description: "This event is already in your schedule."
        });
        return false;
      }

      // Add to schedule
      const newItem = {
        user_id: user.id,
        event_id: event.id,
        event_title: event.title,
        event_description: event.description,
        event_time: event.time,
        event_location: event.location,
        event_type: event.type
      };

      const { error } = await supabase
        .from('user_schedule')
        .insert(newItem);

      if (error) throw error;

      toast({
        title: "Added to schedule",
        description: "Event has been added to your schedule."
      });

      // Refresh schedule
      await fetchUserSchedule();
      return true;
    } catch (error: any) {
      console.error('Error adding to schedule:', error);
      toast({
        variant: "destructive",
        title: "Error adding to schedule",
        description: error.message
      });
      return false;
    }
  };

  // Remove event from user schedule
  const removeFromSchedule = async (itemId: string) => {
    if (!user) return;

    try {
      console.log('Removing item from schedule:', itemId);
      const { error } = await supabase
        .from('user_schedule')
        .delete()
        .eq('id', itemId)
        .eq('user_id', user.id);

      if (error) throw error;

      setUserSchedule(prev => prev.filter(item => item.id !== itemId));
      
      toast({
        title: "Removed from schedule",
        description: "Event has been removed from your schedule."
      });
    } catch (error: any) {
      console.error('Error removing from schedule:', error);
      toast({
        variant: "destructive",
        title: "Error removing from schedule",
        description: error.message
      });
    }
  };

  // Check if an event is in the user's schedule
  const isInSchedule = (eventId: string) => {
    return userSchedule.some(item => item.event_id === eventId);
  };

  // Effect to fetch schedule when user changes
  useEffect(() => {
    console.log('User ID changed, fetching schedule:', user?.id);
    fetchUserSchedule();
  }, [user?.id]);

  return {
    userSchedule,
    isLoading,
    addToSchedule,
    removeFromSchedule,
    isInSchedule,
    refreshSchedule: fetchUserSchedule
  };
};
