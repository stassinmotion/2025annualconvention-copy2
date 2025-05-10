import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface RegisterButtonProps {
  mobile?: boolean;
  onClick?: () => void;
  large?: boolean;
  className?: string;
}

const RegisterButton = ({ mobile, onClick, large, className = '' }: RegisterButtonProps) => {
  // MemberSuite registration portal URL (replace with actual URL)
  const memberSuiteUrl = "https://mssupervisors.org/member-login";
  
  if (mobile) {
    return null; // Mobile button is rendered in the MobileNav component
  }
  
  return (
    <div className={`hidden md:block ${className}`}>
      <motion.a
        href={memberSuiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative overflow-hidden group
          ${large 
            ? 'px-6 py-3 text-lg font-bold rounded-lg' 
            : 'px-4 py-2 text-sm font-medium rounded'
          }
          bg-racing-red text-white shadow-md
          hover:bg-racing-red/90 transition-all duration-300
          flex items-center gap-2 justify-center
        `}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Racing flag pattern overlay removed for clean look */}
        
        <span>Register Now</span>
        <ExternalLink size={large ? 18 : 14} />
        
        {/* Highlight shine effect on hover */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></span>
      </motion.a>
    </div>
  );
};

export default RegisterButton;
