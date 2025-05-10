import React, { useEffect, useState } from 'react';

interface FlipTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const FlipText: React.FC<FlipTextProps> = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  const [flipped, setFlipped] = useState(Array(words.length).fill(false));

  useEffect(() => {
    words.forEach((_, i) => {
      setTimeout(() => {
        setFlipped(f => {
          const arr = [...f];
          arr[i] = true;
          return arr;
        });
      }, delay + i * 350);
    });
  }, [text, delay, words.length]);

  return (
    <span className={`inline-flex flex-wrap gap-2 ${className}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block transition-transform duration-500 ${flipped[i] ? 'rotate-x-0 opacity-100' : 'rotate-x-90 opacity-0'} origin-bottom`}
          style={{
            transform: flipped[i] ? 'rotateX(0deg)' : 'rotateX(90deg)',
            transitionDelay: `${delay + i * 350}ms`,
            fontWeight: 800,
            fontSize: '3rem',
            color: '#E21A2C',
            textShadow: '0 2px 16px rgba(0,0,0,0.18)',
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

export default FlipText; 