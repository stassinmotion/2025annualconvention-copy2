
import { useState, useEffect, useRef } from 'react';

export function useVideoLoading(src?: string) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    
    const handleLoaded = () => {
      setIsLoading(false);
    };
    
    const handleError = () => {
      setIsLoading(false);
      setIsError(true);
    };
    
    const video = videoRef.current;
    
    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('error', handleError);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return {
    videoRef,
    isLoading,
    isError
  };
}
