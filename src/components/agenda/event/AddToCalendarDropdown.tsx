
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  EventDetails,
  createICalFileContent, 
  createGoogleCalendarUrl,
  createOutlookCalendarUrl,
  createYahooCalendarUrl,
  downloadIcsFile
} from '@/utils/calendarUtils';

interface AddToCalendarDropdownProps {
  eventDetails?: EventDetails;
}

const AddToCalendarDropdown = ({ eventDetails }: AddToCalendarDropdownProps) => {
  const addToCalendar = (calendarType: 'ics' | 'google' | 'outlook' | 'yahoo' = 'ics') => {
    if (!eventDetails) {
      toast({
        title: "Calendar export failed",
        description: "Event details are missing",
        variant: "destructive"
      });
      return;
    }
    
    try {
      // Handle different calendar types
      switch (calendarType) {
        case 'google':
          const googleUrl = createGoogleCalendarUrl(eventDetails);
          window.open(googleUrl, '_blank', 'noopener,noreferrer');
          break;
          
        case 'outlook':
          const outlookUrl = createOutlookCalendarUrl(eventDetails);
          window.open(outlookUrl, '_blank', 'noopener,noreferrer');
          break;
          
        case 'yahoo':
          const yahooUrl = createYahooCalendarUrl(eventDetails);
          window.open(yahooUrl, '_blank', 'noopener,noreferrer');
          break;
          
        case 'ics':
        default:
          // Generate ICS file for iOS/Apple Calendar and other apps
          const icalData = createICalFileContent(eventDetails);
          if (!icalData) {
            throw new Error('Failed to create calendar data');
          }
          
          // For iOS devices, directly download to trigger the calendar app
          const filename = `${eventDetails.title.replace(/\s+/g, '_')}.ics`;
          downloadIcsFile(icalData, filename);
          
          toast({
            title: "Calendar file created",
            description: "Open the file with your calendar app",
          });
          break;
      }
    } catch (error) {
      console.error('Error adding to calendar:', error);
      toast({
        title: "Calendar export failed",
        description: "There was an error exporting the event",
        variant: "destructive"
      });
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-racing-blue text-racing-blue hover:bg-racing-blue/10 text-xs dashboard-button"
        >
          <Calendar size={14} className="mr-1" />
          Add to Calendar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => addToCalendar('ics')}>
          Apple/iOS Calendar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => addToCalendar('google')}>
          Google Calendar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => addToCalendar('outlook')}>
          Outlook Calendar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => addToCalendar('yahoo')}>
          Yahoo Calendar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddToCalendarDropdown;
