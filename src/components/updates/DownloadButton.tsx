
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DownloadButtonProps {
  downloadUrl: string;
}

const DownloadButton = ({ downloadUrl }: DownloadButtonProps) => {
  // Function to handle download
  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="flex items-center gap-2 border-racing-blue text-racing-blue hover:bg-racing-blue/10 h-9" 
      onClick={() => handleDownload(downloadUrl)}
    >
      <Download size={16} />
      Download Notice
    </Button>
  );
};

export default DownloadButton;
