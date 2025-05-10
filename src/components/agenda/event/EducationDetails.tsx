
import { Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

interface EducationDetailsProps {
  title: string;
  speaker?: string;
}

const EducationDetails = ({ title, speaker }: EducationDetailsProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="p-4 md:p-5 dashboard-expanded-background">
      <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2'} gap-6`}>
        {/* Speaker Information */}
        <div className="flex items-start space-x-4">
          <Avatar className={`${isMobile ? 'h-12 w-12' : 'h-16 w-16'} border-2 border-racing-blue`}>
            <AvatarImage 
              src="https://files.constantcontact.com/d78fca3d801/c8eda358-7eca-40ad-ad73-d1b3319e8086.png?rdr=true" 
              alt="Speaker placeholder" 
            />
            <AvatarFallback className="bg-racing-blue/20">
              <User size={isMobile ? 20 : 24} className="text-racing-silver" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h4 className={`font-semibold ${isMobile ? 'text-xs' : 'text-sm'} text-racing-blue`}>Speaker Information</h4>
            <p className={`text-racing-silver ${isMobile ? 'text-xs' : 'text-sm'} italic`}>
              {speaker || "Speaker information will be added soon."}
            </p>
          </div>
        </div>
        
        {/* Session Materials */}
        <div className="space-y-3">
          <h4 className={`font-semibold ${isMobile ? 'text-xs' : 'text-sm'} text-racing-blue`}>Session Materials</h4>
          <div className="flex flex-col space-y-2">
            <Button 
              variant="outline" 
              size={isMobile ? "sm" : "sm"}
              className="border-racing-blue text-racing-blue hover:bg-racing-blue/10 justify-start dashboard-button"
              onClick={() => console.log(`Download presentation for: ${title}`)}
            >
              <Download size={isMobile ? 12 : 14} className="mr-2" />
              PowerPoint Presentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
