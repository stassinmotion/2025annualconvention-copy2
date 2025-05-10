import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from '@/components/ParticleBackground';
import ScheduleChatbot from '@/components/chatbot/ScheduleChatbot';
import LogoCarousel from '@/components/ui/LogoCarousel';
import { useChatbot } from '@/components/chatbot/hooks/useChatbot';
import { Send, Loader2 } from 'lucide-react';
import DecoderText from '@/components/DecoderText';
import GlitchText from '@/components/GlitchText';

const container = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: delay }
  }
});

const HeroSection = () => {
  const [chatOpen, setChatOpen] = useState(false);
  // Chatbot state for the search-bar version
  const {
    input,
    setInput,
    isLoading,
    sendMessage,
  } = useChatbot();
  const [isGlitching, setIsGlitching] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <>
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/backgroundfinishline2.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay with glassmorphic effect */}
        <div className="absolute inset-0 bg-black/25 backdrop-blur-md z-0 pointer-events-none" />
        {/* Particle animation background */}
        <ParticleBackground />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] w-full px-4">
          {/* Stripe-style animated text for all three lines */}
          {/* Animation variants */}
          {(() => {
            const letterVariant = {
              initial: { opacity: 0, y: 30, scale: 0.95 },
              animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 500, damping: 30 } }
            };
            return (
              <>
                {/* Start Your Engines! */}
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  <GlitchText text="START YOUR ENGINES!" fontSize={80} />
                </div>
                {/* 96th ANNUAL CONVENTION */}
                <motion.h1
                  variants={container(1.5)}
                  initial="initial"
                  animate="animate"
                  className="text-5xl md:text-7xl font-extrabold text-center mb-6 drop-shadow-lg flex flex-wrap justify-center"
                  style={{ lineHeight: 1.05, fontFamily: "'Inter', sans-serif", fontWeight: 900, color: '#fff' }}
                >
                  {"96th ANNUAL CONVENTION".split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariant} style={{ display: 'inline-block' }}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>
                {/* Date/location */}
                <motion.div
                  variants={container(3.2)}
                  initial="initial"
                  animate="animate"
                  className="mt-2 text-lg md:text-2xl text-center mb-8"
                  style={{ color: '#E21A2C', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}
                >
                  {"June 9-12, 2025 • Biloxi, MS • Coast Convention Center".split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariant} style={{ display: 'inline-block' }}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>
              </>
            );
          })()}
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="px-8 py-3 rounded-full font-bold text-lg shadow-lg transition mb-8 bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 hover:text-blue-900"
          >
            Register Now
          </motion.button>
          {/* Always-visible glassmorphic chat below CTA (search bar style) - DISABLED, uncomment to restore */}
          {false && (
          <form
            onSubmit={e => { e.preventDefault(); if (!isLoading && input.trim()) sendMessage(); }}
            className="w-full max-w-2xl mx-auto mt-4"
            autoComplete="off"
          >
            <div className="flex items-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl px-6 py-3">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question about the event..."
                disabled={isLoading}
                className="flex-grow bg-transparent outline-none text-white placeholder:text-blue-200 text-base"
                style={{ minWidth: 0 }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="ml-4 px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition disabled:opacity-60 flex items-center"
              >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Chat'}
              </button>
            </div>
          </form>
          )}
          {/* Floating Chatbot Button - DISABLED, uncomment to restore */}
          {false && (
          <button
            onClick={() => setChatOpen(true)}
            className="fixed bottom-8 right-8 z-50 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full p-4 shadow-lg flex items-center gap-2 hover:bg-white/20 hover:text-blue-900 transition"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
          >
            <span className="font-semibold">Chat</span>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </button>
          )}
          {/* Chatbot Panel */}
          {chatOpen && (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl max-w-lg w-full p-0 relative">
                <button
                  onClick={() => setChatOpen(false)}
                  className="absolute top-2 right-2 text-white hover:text-blue-900 text-2xl font-bold z-10 bg-white/20 rounded-full px-2 py-1"
                >
                  ×
                </button>
                <ScheduleChatbot />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Logo Carousel below hero section */}
      <div className="w-full flex justify-center py-12 bg-transparent">
        <LogoCarousel />
      </div>
    </>
  );
};

export default HeroSection;
