
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import SponsorshipForm from '@/components/sponsors/SponsorshipForm';

interface SponsorshipFormModalProps {
  selectedSponsorType: string | null;
  selectedOption: string | null;
  onClose: () => void;
}

const SponsorshipFormModal: React.FC<SponsorshipFormModalProps> = ({ 
  selectedSponsorType, 
  selectedOption, 
  onClose 
}) => {
  return (
    <Dialog open={!!selectedSponsorType} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] bg-black/80 backdrop-blur-lg border border-white/20">
        <ScrollArea className="max-h-[80vh]">
          <SponsorshipForm 
            sponsorType={selectedSponsorType || ""} 
            option={selectedOption}
            onClose={onClose}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SponsorshipFormModal;
