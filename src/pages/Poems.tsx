import { useState, useMemo } from 'react';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { PoemCard } from '../components/PoemCard';
import { PoemListItem } from '../components/PoemListItem';
import { poems } from '../data/poems';
import { LayoutGrid, List } from 'lucide-react';

export const Poems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredPoems = useMemo(() => {
    return poems.filter(poem => {
      const matchesSearch = poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poem.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poem.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || poem.obra === selectedCategory;
      const matchesTag = !selectedTag || poem.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchTerm, selectedCategory, selectedTag]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-serif text-[#4a3c2d] dark:text-github-default-dark">
            Explorar Poemas
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#8b7355]/10 text-[#8b7355]'
                  : 'text-[#8b7355]/60 hover:bg-[#8b7355]/5'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-[#8b7355]/10 text-[#8b7355]'
                  : 'text-[#8b7355]/60 hover:bg-[#8b7355]/5'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterBar
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          onCategoryChange={setSelectedCategory}
          onTagChange={setSelectedTag}
        />
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredPoems.map(poem => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredPoems.map(poem => (
            <PoemListItem key={poem.id} poem={poem} />
          ))}
        </div>
      )}
    </div>
  );
};