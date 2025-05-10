
import React from 'react';
import { Filter, SortAsc, SortDesc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AudienceType, SortOption } from './types';

interface UpdatesFilterProps {
  selectedFilter: AudienceType;
  onFilterChange: (filter: AudienceType) => void;
  sortOrder: SortOption;
  onSortChange: (sort: SortOption) => void;
  className?: string;
}

const UpdatesFilter = ({ 
  selectedFilter, 
  onFilterChange, 
  sortOrder, 
  onSortChange, 
  className 
}: UpdatesFilterProps) => {
  // Audience filter options
  const audienceTypes: AudienceType[] = ['All', 'County', 'Vendor'];

  return (
    <GlassCard className={cn("mb-6 flex flex-wrap gap-4 items-center justify-between", className)}>
      <div className="flex items-center flex-wrap gap-4">
        <div className="flex items-center">
          <Filter className="mr-2 text-racing-blue" size={18} />
          <span className="font-medium text-racing-blue">Filter by audience:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {audienceTypes.map(type => (
            <Button
              key={type}
              variant={selectedFilter === type ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(type)}
              className={selectedFilter === type ? "bg-racing-blue" : ""}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="font-medium text-racing-blue">Sort by:</span>
        <Select value={sortOrder} onValueChange={(value) => onSortChange(value as SortOption)}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">
              <div className="flex items-center gap-2">
                <SortDesc size={16} />
                <span>Newest first</span>
              </div>
            </SelectItem>
            <SelectItem value="oldest">
              <div className="flex items-center gap-2">
                <SortAsc size={16} />
                <span>Oldest first</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </GlassCard>
  );
};

export default UpdatesFilter;
