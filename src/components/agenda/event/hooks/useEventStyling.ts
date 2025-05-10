
import { useState } from 'react';

export const useEventStyling = (eventType: string) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBorderColor = () => {
    return eventType === 'general' ? '#004F9F' : 
           eventType === 'education' ? '#121212' : 
           eventType === 'special' ? '#E21A2C' : '#5A5A5A';
  };

  const setHoveredState = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return {
    borderColor: getBorderColor(),
    isHovered,
    setHoveredState
  };
};
