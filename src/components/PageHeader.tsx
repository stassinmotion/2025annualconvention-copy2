import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  bgImage?: string;
}

const PageHeader = ({
  title,
  description,
  className,
  children,
  bgImage
}: PageHeaderProps) => {
  return (
    <div className={cn("relative py-12 md:py-16 bg-black overflow-hidden", className)}>
      <div className="absolute inset-0 overflow-hidden">
        {/* Checker pattern background removed for clean look */}
        
        {/* Race track overlay image */}
        <div className="absolute inset-0 z-0">
          {bgImage ? (
            <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-50" />
          ) : (
            <img src="/lovable-uploads/0248bb78-8f60-4cbb-a51c-6bd85dee2d53.png" alt="Racing track background" className="w-full h-full object-cover opacity-40" />
          )}
        </div>
        
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 mix-blend-multiply"></div>
        
        {/* Black racing stripes with enhanced styling */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-black"></div>
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black"></div>
      </div>
      
      {/* Content container with glassmorphic effect */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto backdrop-blur-md bg-black/20 p-8 rounded-xl border border-white/10"
        >
          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
            >
              {title}
            </motion.h1>
            
            {description && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-sm sm:text-base text-white/90 mt-2 max-w-2xl mx-auto"
              >
                {description}
              </motion.p>
            )}
          </div>
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
