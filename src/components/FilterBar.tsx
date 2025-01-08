import React from 'react';
import { ChevronDown } from 'lucide-react';
import { poems } from '../data/poems';

interface FilterBarProps {
  selectedCategory: string;
  selectedTag: string;
  onCategoryChange: (category: string) => void;
  onTagChange: (tag: string) => void;
}

export const FilterBar = ({ selectedCategory, selectedTag, onCategoryChange, onTagChange }: FilterBarProps) => {
  const obras = Array.from(new Set(poems.map(poem => poem.obra)));
  const tags = Array.from(new Set(poems.flatMap(poem => poem.tags)));

  const selectClassName = "w-full h-12 pl-4 pr-10 bg-[#f9f3e6] dark:bg-[#1a1a1a] border-2 border-[#8b7355]/20 dark:border-[#a18669]/20 rounded-lg focus:outline-none focus:border-[#8b7355]/50 dark:focus:border-[#a18669]/50 text-[#4a3c2d] dark:text-[#e6d5c4] transition-colors appearance-none cursor-pointer font-serif shadow-inner";

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className={selectClassName}
        >
          <option value="">Todas las obras</option>
          {obras.map(obra => (
            <option key={obra} value={obra}>{obra}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8b7355] dark:text-[#a18669]">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      <div className="relative flex-1">
        <select
          value={selectedTag}
          onChange={(e) => onTagChange(e.target.value)}
          className={selectClassName}
        >
          <option value="">Todas las etiquetas</option>
          {tags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8b7355] dark:text-[#a18669]">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};