import { Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#f9f3e6] dark:bg-[#1a1a1a] border-t border-github-muted/10 dark:border-github-muted/10 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <img
              src="img/my-photo.jpg"
              alt="Daniel Santiago Acosta Galindo"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#8b7355]/20"
            />
            <div>
              <h2 className="text-base font-serif text-[#4a3c2d] dark:text-github-default-dark">
                Daniel Santiago Acosta Galindo
              </h2>
              <p className="text-sm text-[#8b7355] dark:text-github-subtle-dark">
                Poeta y Escritor
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/dsagpoeta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b7355] dark:text-github-subtle-dark hover:text-github-accent dark:hover:text-github-accent-dark flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://twitter.com/dsagpoeta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b7355] dark:text-github-subtle-dark hover:text-github-accent dark:hover:text-github-accent-dark flex items-center gap-2"
              >
                <Twitter className="w-5 h-5" />
                <span className="text-sm">Twitter</span>
              </a>
            </div>
            <p className="text-xs text-[#8b7355] dark:text-github-subtle-dark">
              © {new Date().getFullYear()} Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};