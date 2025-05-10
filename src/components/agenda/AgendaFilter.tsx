
import { useState } from 'react';
import { EventType } from '@/data/agendaData';

interface AgendaFilterProps {
  onFilterChange: (filter: EventType) => void;
  activeFilter?: EventType;
}

const AgendaFilter = ({ onFilterChange, activeFilter }: AgendaFilterProps) => {
  const [localActiveFilter, setLocalActiveFilter] = useState<EventType>(activeFilter || 'all');

  const filters: EventType[] = ['all', 'general', 'education', 'special'];

  const handleFilterClick = (filter: EventType) => {
    setLocalActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex justify-center space-x-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={`px-4 py-2 rounded-md text-sm transition-colors ${
            (activeFilter || localActiveFilter) === filter 
              ? 'bg-racing-blue text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {filter === 'all' ? 'All Events' : filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default AgendaFilter;
