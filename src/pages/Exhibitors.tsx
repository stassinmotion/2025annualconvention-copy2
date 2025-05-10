
import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ExhibitorSearchBar from '@/components/exhibitors/ExhibitorSearchBar';
import ExhibitorsGrid from '@/components/exhibitors/ExhibitorsGrid';
import ExhibitorsHeader from '@/components/exhibitors/ExhibitorsHeader';
import { exhibitorsData, getCategories } from '@/components/exhibitors/ExhibitorsData';

const Exhibitors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = getCategories();

  const filteredExhibitors = exhibitorsData.filter(exhibitor => {
    const matchesSearch = exhibitor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         exhibitor.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || exhibitor.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <>
      <PageHeader
        title="Exhibitors"
        description="Connect with vendors and service providers at our exhibition hall"
        className="bg-gradient-to-r from-racing-blue to-racing-red"
      />

      <section className="py-16 container mx-auto px-4">
        <ExhibitorsHeader />
        
        <ExhibitorSearchBar 
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          setSearchTerm={setSearchTerm}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        <ExhibitorsGrid 
          exhibitors={filteredExhibitors} 
          resetFilters={resetFilters} 
        />
      </section>
    </>
  );
};

export default Exhibitors;
