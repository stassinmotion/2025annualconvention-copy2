
// Calendar utilities for creating and exporting event information

export interface EventDetails {
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  date: string;
}

// Check if the current device is mobile
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Check if the device is iOS specifically
export const isIosDevice = (): boolean => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
};

// Format date and time for iCal format
const formatDateTimeForICal = (date: string, time: string): string => {
  // Parse the date (format: YYYY-MM-DD)
  const [year, month, day] = date.split('-').map(part => parseInt(part, 10));
  
  // Parse the time (format: hh:mm AM/PM)
  let hours = 0;
  let minutes = 0;
  
  // Handle different time formats
  if (time.includes(':')) {
    const timeParts = time.split(':');
    const hourPart = timeParts[0].trim();
    hours = parseInt(hourPart, 10);
    
    const secondPart = timeParts[1].trim();
    if (secondPart.includes('AM') || secondPart.includes('PM')) {
      minutes = parseInt(secondPart.split(' ')[0], 10);
      const period = secondPart.includes('AM') ? 'AM' : 'PM';
      
      // Convert to 24-hour format
      if (period === 'PM' && hours < 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
    } else {
      minutes = parseInt(secondPart, 10);
    }
  }
  
  // Create the date object
  const dateObj = new Date(year, month - 1, day, hours, minutes);
  
  // Format for iCal (YYYYMMDDTHHmmssZ)
  const formattedDate = dateObj.toISOString()
    .replace(/[-:]/g, '')  // Remove dashes and colons
    .replace(/\.\d+/g, ''); // Remove milliseconds
  
  return formattedDate;
};

// Create iCal content for an event
export const createICalFileContent = (event: EventDetails): string => {
  try {
    // Format the start and end times
    const startDateTime = formatDateTimeForICal(event.date, event.startTime);
    const endDateTime = event.endTime 
      ? formatDateTimeForICal(event.date, event.endTime) 
      : formatDateTimeForICal(event.date, event.startTime); // If no end time, use start time
    
    // Clean up title and description for iCal format
    const title = event.title.replace(/,/g, '\\,').replace(/;/g, '\\;');
    const location = event.location.replace(/,/g, '\\,').replace(/;/g, '\\;');
    let description = event.description.replace(/,/g, '\\,').replace(/;/g, '\\;');
    description = description.replace(/\n/g, '\\n'); // Replace newlines
    
    // Create the iCal content
    const iCalContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DTSTART:${startDateTime}`,
      `DTEND:${endDateTime}`,
      `LOCATION:${location}`,
      `DESCRIPTION:${description}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
    
    return iCalContent;
  } catch (error) {
    console.error('Error creating iCal content:', error);
    return '';
  }
};

// Create a Google Calendar URL
export const createGoogleCalendarUrl = (event: EventDetails): string => {
  try {
    // Parse the date-time components
    const [year, month, day] = event.date.split('-').map(part => parseInt(part, 10));
    
    // Parse start time
    let startHours = 0;
    let startMinutes = 0;
    if (event.startTime.includes(':')) {
      const timeParts = event.startTime.split(':');
      startHours = parseInt(timeParts[0].trim(), 10);
      
      const secondPart = timeParts[1].trim();
      if (secondPart.includes('AM') || secondPart.includes('PM')) {
        startMinutes = parseInt(secondPart.split(' ')[0], 10);
        const period = secondPart.includes('AM') ? 'AM' : 'PM';
        
        // Convert to 24-hour format
        if (period === 'PM' && startHours < 12) startHours += 12;
        if (period === 'AM' && startHours === 12) startHours = 0;
      } else {
        startMinutes = parseInt(secondPart, 10);
      }
    }
    
    // Create start date object
    const startDate = new Date(year, month - 1, day, startHours, startMinutes);
    
    // Parse end time if available, otherwise add 1 hour to start time
    let endDate = new Date(startDate.getTime() + (60 * 60 * 1000)); // Default: start time + 1 hour
    
    if (event.endTime && event.endTime.includes(':')) {
      let endHours = 0;
      let endMinutes = 0;
      
      const timeParts = event.endTime.split(':');
      endHours = parseInt(timeParts[0].trim(), 10);
      
      const secondPart = timeParts[1].trim();
      if (secondPart.includes('AM') || secondPart.includes('PM')) {
        endMinutes = parseInt(secondPart.split(' ')[0], 10);
        const period = secondPart.includes('AM') ? 'AM' : 'PM';
        
        // Convert to 24-hour format
        if (period === 'PM' && endHours < 12) endHours += 12;
        if (period === 'AM' && endHours === 12) endHours = 0;
      } else {
        endMinutes = parseInt(secondPart, 10);
      }
      
      endDate = new Date(year, month - 1, day, endHours, endMinutes);
    }
    
    // Format dates for Google Calendar URL (YYYYMMDDTHHMMSSZ)
    const formatDateForGoogle = (date: Date): string => {
      const pad = (num: number): string => num.toString().padStart(2, '0');
      
      return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
    };
    
    const startDateFormatted = formatDateForGoogle(startDate);
    const endDateFormatted = formatDateForGoogle(endDate);
    
    // Build Google Calendar URL
    const baseUrl = 'https://calendar.google.com/calendar/render';
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.title,
      dates: `${startDateFormatted}/${endDateFormatted}`,
      details: event.description,
      location: event.location,
      sf: 'true',
      output: 'xml'
    });
    
    return `${baseUrl}?${params.toString()}`;
  } catch (error) {
    console.error('Error creating Google Calendar URL:', error);
    return '';
  }
};

// Create an Outlook Calendar URL
export const createOutlookCalendarUrl = (event: EventDetails): string => {
  try {
    // Parse the date-time components
    const [year, month, day] = event.date.split('-').map(part => parseInt(part, 10));
    
    // Parse start time
    let startHours = 0;
    let startMinutes = 0;
    if (event.startTime.includes(':')) {
      const timeParts = event.startTime.split(':');
      startHours = parseInt(timeParts[0].trim(), 10);
      
      const secondPart = timeParts[1].trim();
      if (secondPart.includes('AM') || secondPart.includes('PM')) {
        startMinutes = parseInt(secondPart.split(' ')[0], 10);
        const period = secondPart.includes('AM') ? 'AM' : 'PM';
        
        // Convert to 24-hour format
        if (period === 'PM' && startHours < 12) startHours += 12;
        if (period === 'AM' && startHours === 12) startHours = 0;
      } else {
        startMinutes = parseInt(secondPart, 10);
      }
    }
    
    // Create start date object
    const startDate = new Date(year, month - 1, day, startHours, startMinutes);
    
    // Parse end time if available, otherwise add 1 hour to start time
    let endDate = new Date(startDate.getTime() + (60 * 60 * 1000)); // Default: start time + 1 hour
    
    if (event.endTime && event.endTime.includes(':')) {
      let endHours = 0;
      let endMinutes = 0;
      
      const timeParts = event.endTime.split(':');
      endHours = parseInt(timeParts[0].trim(), 10);
      
      const secondPart = timeParts[1].trim();
      if (secondPart.includes('AM') || secondPart.includes('PM')) {
        endMinutes = parseInt(secondPart.split(' ')[0], 10);
        const period = secondPart.includes('AM') ? 'AM' : 'PM';
        
        // Convert to 24-hour format
        if (period === 'PM' && endHours < 12) endHours += 12;
        if (period === 'AM' && endHours === 12) endHours = 0;
      } else {
        endMinutes = parseInt(secondPart, 10);
      }
      
      endDate = new Date(year, month - 1, day, endHours, endMinutes);
    }
    
    // Format dates for Outlook
    const formatDateForOutlook = (date: Date): string => {
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d+/g, '');
    };
    
    const startDateFormatted = formatDateForOutlook(startDate);
    const endDateFormatted = formatDateForOutlook(endDate);
    
    // Build Outlook Calendar URL
    const baseUrl = 'https://outlook.office.com/calendar/0/deeplink/compose';
    const params = new URLSearchParams({
      subject: event.title,
      startdt: startDateFormatted,
      enddt: endDateFormatted,
      body: event.description,
      location: event.location,
      path: '/calendar/action/compose',
      rru: 'addevent'
    });
    
    return `${baseUrl}?${params.toString()}`;
  } catch (error) {
    console.error('Error creating Outlook Calendar URL:', error);
    return '';
  }
};

// Create a Yahoo Calendar URL
export const createYahooCalendarUrl = (event: EventDetails): string => {
  try {
    // Parse the date-time components
    const [year, month, day] = event.date.split('-').map(part => parseInt(part, 10));
    
    // Parse start time
    let startHours = 0;
    let startMinutes = 0;
    if (event.startTime.includes(':')) {
      const timeParts = event.startTime.split(':');
      startHours = parseInt(timeParts[0].trim(), 10);
      
      const secondPart = timeParts[1].trim();
      if (secondPart.includes('AM') || secondPart.includes('PM')) {
        startMinutes = parseInt(secondPart.split(' ')[0], 10);
        const period = secondPart.includes('AM') ? 'AM' : 'PM';
        
        // Convert to 24-hour format
        if (period === 'PM' && startHours < 12) startHours += 12;
        if (period === 'AM' && startHours === 12) startHours = 0;
      } else {
        startMinutes = parseInt(secondPart, 10);
      }
    }
    
    // Create start date object
    const startDate = new Date(year, month - 1, day, startHours, startMinutes);
    
    // Parse end time if available, otherwise add 1 hour to start time
    let endDate = new Date(startDate.getTime() + (60 * 60 * 1000)); // Default: start time + 1 hour
    
    if (event.endTime && event.endTime.includes(':')) {
      let endHours = 0;
      let endMinutes = 0;
      
      const timeParts = event.endTime.split(':');
      endHours = parseInt(timeParts[0].trim(), 10);
      
      const secondPart = timeParts[1].trim();
      if (secondPart.includes('AM') || secondPart.includes('PM')) {
        endMinutes = parseInt(secondPart.split(' ')[0], 10);
        const period = secondPart.includes('AM') ? 'AM' : 'PM';
        
        // Convert to 24-hour format
        if (period === 'PM' && endHours < 12) endHours += 12;
        if (period === 'AM' && endHours === 12) endHours = 0;
      } else {
        endMinutes = parseInt(secondPart, 10);
      }
      
      endDate = new Date(year, month - 1, day, endHours, endMinutes);
    }
    
    // Format dates for Yahoo
    const formatDateForYahoo = (date: Date): string => {
      const pad = (num: number): string => num.toString().padStart(2, '0');
      return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00Z`;
    };
    
    const startDateFormatted = formatDateForYahoo(startDate);
    const endDateFormatted = formatDateForYahoo(endDate);
    
    // Build Yahoo Calendar URL
    const baseUrl = 'https://calendar.yahoo.com/';
    const params = new URLSearchParams({
      v: '60',
      title: event.title,
      st: startDateFormatted,
      et: endDateFormatted,
      desc: event.description,
      in_loc: event.location
    });
    
    return `${baseUrl}?${params.toString()}`;
  } catch (error) {
    console.error('Error creating Yahoo Calendar URL:', error);
    return '';
  }
};

// Download ICS file
export const downloadIcsFile = (icsContent: string, filename: string): void => {
  try {
    // Create a Blob with the ICS content
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    // Append the anchor to the body, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    setTimeout(() => URL.revokeObjectURL(url), 100);
  } catch (error) {
    console.error('Error downloading ICS file:', error);
    throw error;
  }
};
