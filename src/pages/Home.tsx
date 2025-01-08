import { useState, useMemo } from 'react';
import { PoemCard } from '../components/PoemCard';
import { SearchBar } from '../components/SearchBar';
import { FilterBar } from '../components/FilterBar';
import { poems } from '../data/poems';
import { BookOpen } from 'lucide-react';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedObra, setSelectedObra] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPoems = useMemo(() => {
    return poems.filter(poem => {
      const matchesSearch = poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        poem.content.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesObra = !selectedObra || poem.obra === selectedObra;
      const matchesTag = !selectedTag || poem.tags.includes(selectedTag);

      return matchesSearch && matchesObra && matchesTag;
    });
  }, [searchTerm, selectedObra, selectedTag]);

  const featuredPoems = filteredPoems.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-serif mb-4 text-[#4a3c2d] dark:text-github-default-dark">
          Requies versuum
        </h1>
        <p className="text-lg text-[#5c4b37] dark:text-github-default-dark/90">
          Poemas por Daniel Santiago Acosta Galindo
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterBar
          selectedCategory={selectedObra}
          selectedTag={selectedTag}
          onCategoryChange={setSelectedObra}
          onTagChange={setSelectedTag}
        />
      </div>

      {featuredPoems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredPoems.map(poem => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-[#8b7355] dark:text-github-subtle-dark" />
          <p className="text-lg text-[#5c4b37] dark:text-github-default-dark/90">
            No se encontraron poemas que coincidan con tu búsqueda.
          </p>
        </div>
      )}
    </div>
  );
};