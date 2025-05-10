
import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import UpdatesFilter from '@/components/updates/UpdatesFilter';
import UpdatesList from '@/components/updates/UpdatesList';
import { Update, AudienceType, SortOption } from '@/components/updates/types';
import { sampleUpdates } from '@/components/updates/data/sampleUpdates';

const Updates = () => {
  // State for filtering and sorting
  const [audienceFilter, setAudienceFilter] = useState<AudienceType>('All');
  const [sortOrder, setSortOrder] = useState<SortOption>('newest');
  const [filteredUpdates, setFilteredUpdates] = useState<Update[]>(sampleUpdates);
  
  // Filter and sort updates based on selected audience and sort order
  useEffect(() => {
    let result = [...sampleUpdates];
    
    // Apply audience filter
    if (audienceFilter !== 'All') {
      result = result.filter(update => {
        if (Array.isArray(update.audience)) {
          return update.audience.includes(audienceFilter) || update.audience.includes('All');
        }
        return update.audience === audienceFilter || update.audience === 'All';
      });
    }
    
    // Apply sorting
    result = sortUpdatesByDate(result, sortOrder);
    
    setFilteredUpdates(result);
  }, [audienceFilter, sortOrder]);
  
  // Function to sort updates by date
  const sortUpdatesByDate = (updates: Update[], order: SortOption): Update[] => {
    return [...updates].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      
      return order === 'newest' ? dateB - dateA : dateA - dateB;
    });
  };

  return (
    <>
      <PageHeader
        title="Updates & Notices"
        description="Stay informed with the latest announcements and updates about the upcoming convention."
      >
        <div className="flex items-center mt-4 text-racing-red">
          <Bell className="mr-2" size={20} />
          <span className="text-sm font-medium">Important announcements for attendees</span>
        </div>
      </PageHeader>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Filter Controls */}
          <UpdatesFilter 
            selectedFilter={audienceFilter}
            onFilterChange={setAudienceFilter}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
          />

          {/* Updates List */}
          <UpdatesList updates={filteredUpdates} />
        </div>
      </div>
    </>
  );
};

export default Updates;
