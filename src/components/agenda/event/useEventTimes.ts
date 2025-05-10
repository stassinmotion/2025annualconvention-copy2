
export const useEventTimes = (timeString: string) => {
  // Extract start and end time from the time string (e.g., "9:00 AM - 10:30 AM")
  const getEventTimes = () => {
    let startTime = '';
    let endTime = '';
    
    if (timeString && timeString.includes('-')) {
      const [start, end] = timeString.split('-').map(t => t.trim());
      startTime = start;
      endTime = end;
    } else if (timeString) {
      startTime = timeString;
    }
    
    return { startTime, endTime };
  };
  
  // Get event date (for calendar export)
  // For demo purposes, using current date - in a real app, would be from event data
  const getEventDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

  // Parse event time to determine progress for gauge visualization
  const getTimeProgress = () => {
    if (timeString.includes('-')) {
      const [startTime, endTime] = timeString.split('-').map(t => t.trim());
      const startHour = parseInt(startTime.split(':')[0]);
      const endHour = parseInt(endTime.split(':')[0]);
      
      // Random progress for demo purposes - in real app would be based on current time
      return Math.floor(Math.random() * 100);
    }
    return 50; // Default value
  };

  const { startTime, endTime } = getEventTimes();
  const eventDate = getEventDate();
  const timeProgress = getTimeProgress();

  return {
    startTime,
    endTime,
    eventDate,
    timeProgress
  };
};
