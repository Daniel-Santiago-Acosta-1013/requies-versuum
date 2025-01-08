import { Link } from 'react-router-dom';
import { Feather } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header className="py-6 border-b border-github-muted/10 dark:border-github-muted/10">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-github-default dark:text-github-default-dark hover:text-github-accent dark:hover:text-github-accent-dark">
          <Feather className="w-6 h-6" />
          <span className="text-xl font-serif">Requies versuum</span>
        </Link>
        <div className="flex items-center space-x-6">
          <div className="font-serif">
            <Link to="/" className="text-github-subtle dark:text-github-subtle-dark hover:text-github-accent dark:hover:text-github-accent-dark">Inicio</Link>
            <Link to="/poems" className="ml-6 text-github-subtle dark:text-github-subtle-dark hover:text-github-accent dark:hover:text-github-accent-dark">Poemas</Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};