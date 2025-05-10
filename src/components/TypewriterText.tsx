
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  centered?: boolean;
}

const TypewriterText = ({ 
  text, 
  delay = 100, 
  className = "",
  centered = false
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className={cn(
      "text-2xl",
      centered && "text-center mx-auto w-full",
      className
    )}>
      {displayText}
    </div>
  );
};

export default TypewriterText;
