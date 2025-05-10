
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ExhibitorSearchBarProps {
  searchTerm: string;
  selectedCategory: string;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const ExhibitorSearchBar = ({
  searchTerm,
  selectedCategory,
  setSearchTerm,
  setSelectedCategory,
  categories
}: ExhibitorSearchBarProps) => {
  return (
    <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <Input 
            type="text" 
            placeholder="Search exhibitors..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button 
            variant={selectedCategory === 'All' ? "default" : "outline"}
            onClick={() => setSelectedCategory('All')}
            className="whitespace-nowrap"
          >
            All
          </Button>
          {categories.map(category => (
            <Button 
              key={category} 
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExhibitorSearchBar;
