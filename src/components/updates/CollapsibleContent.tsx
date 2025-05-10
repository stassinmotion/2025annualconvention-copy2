
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface CollapsibleContentProps {
  additionalInfo: string[];
}

const CollapsibleUpdateContent = ({ additionalInfo }: CollapsibleContentProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Collapsible
      open={expanded}
      onOpenChange={setExpanded}
      className="mt-4"
    >
      <CollapsibleTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex w-full justify-between items-center text-sm font-medium border-racing-silver/30 text-racing-gray hover:bg-racing-silver/10"
        >
          <span>Read more details</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'transform rotate-180' : ''}`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-4 space-y-2 pl-4 border-l-2 border-racing-silver/50">
        {additionalInfo.map((info, idx) => (
          <p key={idx} className="text-racing-gray text-left">{info}</p>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleUpdateContent;
