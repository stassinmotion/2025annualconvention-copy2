import React from 'react';

const logos = [
  {
    src: '/lovable-uploads/logo-maxx-builders.png',
    alt: 'Maxx Builders',
    link: 'https://maxxbuilders.com',
  },
  {
    src: '/lovable-uploads/logo-zt-payments.png',
    alt: 'ZT Payments',
    link: 'https://ztpayments.com',
  },
  {
    src: '/lovable-uploads/logo-maxx-designers.png',
    alt: 'Maxx Designers',
    link: 'https://maxxdesigners.com',
  },
  {
    src: '/lovable-uploads/logo-prospects-academy.png',
    alt: 'Prospects Academy',
    link: 'https://prospectsacademy.com',
  },
  {
    src: '/lovable-uploads/logo-smokepayments.png',
    alt: 'SmokePayments',
    link: 'https://smokepayments.com',
  },
];

const LogoCarousel: React.FC = () => {
  // Duplicate logos for seamless infinite scroll
  const logoList = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-12 flex justify-center items-center">
      {/* Animated light effect */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,white_60%,#60aaff_100%)] opacity-30 blur-3xl animate-pulse-slow" />
      </div>
      {/* Glassmorphism container */}
      <div className="relative z-10 w-[90vw] max-w-6xl mx-auto rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8">
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-carousel whitespace-nowrap">
            {logoList.map((logo, idx) => (
              <a
                key={idx}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  draggable="false"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Custom keyframes for infinite scroll */}
      <style>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel 30s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel; 