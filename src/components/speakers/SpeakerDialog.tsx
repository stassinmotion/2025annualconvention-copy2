
import React from 'react';
import { Presentation } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Speaker } from './data/speakersData';

interface SpeakerDialogProps {
  speaker: Speaker;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SpeakerDialog = ({ speaker, open, onOpenChange }: SpeakerDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-racing-blue">{speaker.name}</DialogTitle>
          <DialogDescription>{speaker.title}</DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-6 py-4">
          <div className="md:col-span-1">
            <img 
              src={speaker.image} 
              alt={speaker.name} 
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <p className="text-sm text-gray-600">{speaker.bio}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Presentation size={16} className="mr-2 text-racing-blue" />
                Speaking Topic
              </h4>
              <p className="text-sm">{speaker.topic}</p>
            </div>
            
            {speaker.name !== "TBD" && (
              <div className="bg-racing-blue/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Session Details</h4>
                <p className="text-sm">Date: TBD</p>
                <p className="text-sm">Time: TBD</p>
                <p className="text-sm">Location: TBD</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpeakerDialog;
