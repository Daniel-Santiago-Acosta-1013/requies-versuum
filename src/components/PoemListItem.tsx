import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, User } from 'lucide-react';
import { Poem } from '../types';
interface PoemListItemProps {
  poem: Poem;
}
export const PoemListItem = ({ poem }: PoemListItemProps) => {
  return (
    <Link to={`/poem/${poem.id}`} className="block group">
      <article className="p-6 rounded-lg shadow-md transition-all duration-300 border border-gray-100/50 dark:border-github-muted/20 hover:border-github-accent/30 dark:hover:border-github-accent-dark/30 relative overflow-hidden bg-[#f9f3e6] dark:bg-[#1a1a1a]">
        {/* Aged paper texture overlay */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]"></div>

        <div className="flex items-start justify-between gap-4 relative">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <span className="px-3 py-1 text-sm bg-[#8b7355]/10 dark:bg-github-muted/20 text-[#5c4b37] dark:text-github-default-dark rounded-full">
                {poem.obra}
              </span>
              <div className="flex items-center text-[#8b7355] dark:text-github-subtle-dark text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <time>{new Date(poem.date).toLocaleDateString()}</time>
              </div>
            </div>

            <h3 className="text-xl font-serif mb-2 text-[#4a3c2d] dark:text-github-default-dark group-hover:text-github-accent dark:group-hover:text-github-accent-dark transition-colors">
              {poem.title}
            </h3>
            
            <p className="text-[#5c4b37] dark:text-github-default-dark/90 mb-4 italic line-clamp-2">
              {poem.excerpt}
            </p>

            <div className="flex items-center text-[#8b7355] dark:text-github-subtle-dark text-sm mb-4">
              <User className="w-4 h-4 mr-1" />
              <span>{poem.author}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {poem.tags.map(tag => (
                <span key={tag} className="inline-flex items-center text-sm text-[#8b7355] dark:text-github-subtle-dark">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-[#8b7355] dark:text-github-subtle-dark group-hover:text-github-accent dark:group-hover:text-github-accent-dark">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </article>
    </Link>
  );
};