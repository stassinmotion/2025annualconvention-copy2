
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

const PremierSponsorOptions: React.FC = () => {
  return (
    <div className="text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-white"
          >
            Additional Premier Options
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-black/80 backdrop-blur-lg border border-white/20">
          <div className="space-y-4 py-4">
            <h3 className="text-xl font-display font-semibold text-white">Additional Premier Sponsorship Options</h3>
            <p className="text-white/80">Contact us for more information about these special opportunities:</p>
            <ul className="space-y-3 mt-4">
              {['Kids Zone Games', 'MAS Annual Cookout', 'Conference Swag', 'Hospitality Suite'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3"></div>
                  <span className="text-sm text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white/10 p-4 rounded-lg mt-4">
              <p className="text-sm font-medium text-white">Email: info@masconvention.org</p>
              <p className="text-sm font-medium text-white">Phone: (601) 353-2741</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PremierSponsorOptions;
