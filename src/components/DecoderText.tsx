import React, { useEffect, useRef, useState } from 'react';

interface DecoderTextProps {
  text: string;
  className?: string;
  duration?: number; // in ms
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';

const DecoderText: React.FC<DecoderTextProps> = ({ text, className = '', duration = 1200 }) => {
  const [displayed, setDisplayed] = useState('');
  const frame = useRef(0);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let mounted = true;
    let revealProgress = 0;
    const totalFrames = Math.max(10, Math.floor(duration / 30));

    function randomChar() {
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }

    function scramble() {
      if (!mounted) return;
      revealProgress = Math.min(1, frame.current / totalFrames);
      const revealedCount = Math.floor(revealProgress * text.length);
      let next = '';
      for (let i = 0; i < text.length; i++) {
        if (i < revealedCount) {
          next += text[i];
        } else if (text[i] === ' ') {
          next += ' ';
        } else {
          next += randomChar();
        }
      }
      setDisplayed(next);
      frame.current++;
      if (revealProgress < 1) {
        interval.current = setTimeout(scramble, 30);
      } else {
        setDisplayed(text);
      }
    }
    scramble();
    return () => {
      mounted = false;
      if (interval.current) clearTimeout(interval.current);
    };
    // eslint-disable-next-line
  }, [text, duration]);

  return <span className={className} aria-label={text}>{displayed}</span>;
};

export default DecoderText; 