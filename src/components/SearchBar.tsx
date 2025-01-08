import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8b7355] dark:text-[#a18669] w-5 h-5" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar poemas..."
        className="w-full pl-12 pr-4 py-3 bg-[#f9f3e6] dark:bg-[#1a1a1a] border-2 border-[#8b7355]/20 dark:border-[#a18669]/20 rounded-lg focus:outline-none focus:border-[#8b7355]/50 dark:focus:border-[#a18669]/50 text-[#4a3c2d] dark:text-[#e6d5c4] placeholder-[#8b7355]/60 dark:placeholder-[#a18669]/60 transition-colors font-serif shadow-inner"
      />
    </div>
  );
};