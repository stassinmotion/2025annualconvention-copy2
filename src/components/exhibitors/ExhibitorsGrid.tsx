
import React from 'react';
import { Store } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ExhibitorCard, { Exhibitor } from './ExhibitorCard';

interface ExhibitorsGridProps {
  exhibitors: Exhibitor[];
  resetFilters: () => void;
}

const ExhibitorsGrid = ({ exhibitors, resetFilters }: ExhibitorsGridProps) => {
  if (exhibitors.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exhibitors.map(exhibitor => (
          <ExhibitorCard key={exhibitor.id} exhibitor={exhibitor} />
        ))}
      </div>
    );
  }
  
  return (
    <div className="text-center py-12">
      <Store size={48} className="mx-auto text-gray-300 mb-4" />
      <h3 className="text-xl font-bold mb-2">No exhibitors found</h3>
      <p className="text-gray-600">Try adjusting your search or filters</p>
      <Button 
        variant="outline" 
        className="mt-4"
        onClick={resetFilters}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default ExhibitorsGrid;
