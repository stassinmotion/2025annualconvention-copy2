
import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon: ReactNode;
  color: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon, color }) => {
  return (
    <div className="flex items-center mb-8">
      <div className="mr-3">{icon}</div>
      <h2 className="text-3xl font-display font-bold text-racing-blue">{title}</h2>
      <div className={`h-1 ${color} flex-grow ml-4`}></div>
    </div>
  );
};

export default SectionHeader;
