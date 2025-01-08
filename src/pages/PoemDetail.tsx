import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, User, Share2, Download } from 'lucide-react';
import { poems } from '../data/poems';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const PoemDetail = () => {
  const { id } = useParams();
  const poem = poems.find(p => p.id === id);

  if (!poem) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-xl text-[#4a3c2d] dark:text-github-default-dark">Poema no encontrado</p>
        <Link to="/poems" className="text-github-accent dark:text-github-accent-dark hover:underline mt-4 inline-block">
          Volver a poemas
        </Link>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: poem.title,
          text: poem.excerpt,
          url: url
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert('¡Enlace copiado al portapapeles!');
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  const downloadAsPDF = async () => {
    const element = document.getElementById('poem-content');
    if (!element) return;

    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.width = '800px';
    clone.style.padding = '48px';
    clone.style.backgroundColor = '#f9f3e6';
    document.body.appendChild(clone);

    try {
      const canvas = await html2canvas(clone, {
        scale: 2,
        backgroundColor: '#f9f3e6',
        logging: false,
        windowWidth: 800,
        onclone: (document) => {
          const clonedElement = document.getElementById('poem-content');
          if (clonedElement) {
            clonedElement.querySelectorAll('*').forEach(el => {
              if (el instanceof HTMLElement) {
                el.style.color = '#4a3c2d';
                if (el.classList.contains('font-serif')) {
                  el.style.fontFamily = '"Crimson Text", Georgia, serif';
                }
              }
            });
          }
        }
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      });

      const margin = 10;
      const x = margin;
      const y = margin;
      const contentWidth = imgWidth - (margin * 2);
      const contentHeight = imgHeight - (margin * 2);

      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        x,
        y,
        contentWidth,
        contentHeight
      );

      pdf.save(`${poem.title}.pdf`);
    } finally {
      document.body.removeChild(clone);
    }
  };

  const downloadAsImage = async () => {
    const element = document.getElementById('poem-content');
    if (!element) return;

    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.width = '800px';
    clone.style.padding = '48px';
    clone.style.backgroundColor = '#f9f3e6';
    document.body.appendChild(clone);

    try {
      const canvas = await html2canvas(clone, {
        scale: 2,
        backgroundColor: '#f9f3e6',
        logging: false,
        windowWidth: 800,
        onclone: (document) => {
          const clonedElement = document.getElementById('poem-content');
          if (clonedElement) {
            clonedElement.querySelectorAll('*').forEach(el => {
              if (el instanceof HTMLElement) {
                el.style.color = '#4a3c2d';
                if (el.classList.contains('font-serif')) {
                  el.style.fontFamily = '"Crimson Text", Georgia, serif';
                }
              }
            });
          }
        }
      });

      const link = document.createElement('a');
      link.download = `${poem.title}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } finally {
      document.body.removeChild(clone);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Navigation and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
          <Link
            to="/poems"
            className="inline-flex items-center text-[#8b7355] dark:text-github-subtle-dark hover:text-github-accent dark:hover:text-github-accent-dark"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="text-sm sm:text-base">Volver a poemas</span>
          </Link>
          
          {/* Actions Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button
              onClick={handleShare}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 bg-[#8b7355] text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              <Share2 className="hidden sm:block w-4 h-4 sm:mr-2" />
              <span>Compartir</span>
            </button>
            <button
              onClick={downloadAsPDF}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 bg-[#8b7355] text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              <Download className="hidden sm:block w-4 h-4 sm:mr-2" />
              <span>PDF</span>
            </button>
            <button
              onClick={downloadAsImage}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 bg-[#8b7355] text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              <Download className="hidden sm:block w-4 h-4 sm:mr-2" />
              <span>Imagen</span>
            </button>
          </div>
        </div>

        {/* Poem Content */}
        <div
          id="poem-content"
          className="aged-paper p-6 sm:p-12 rounded-lg shadow-lg relative overflow-hidden"
        >
          {/* Decorative corner flourishes */}
          <div className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-[#8b7355]/20 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-r-2 border-[#8b7355]/20 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-l-2 border-[#8b7355]/20 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-[#8b7355]/20 rounded-br-lg"></div>

          {/* Poem Header */}
          <div className="text-center mb-6 sm:mb-8 border-b pb-6 sm:pb-8 border-[#8b7355]/20">
            <h2 className="text-2xl sm:text-3xl font-serif mb-4 text-[#4a3c2d]">
              {poem.title}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[#8b7355] text-sm sm:text-base">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <time>{new Date(poem.date).toLocaleDateString()}</time>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>{poem.author}</span>
              </div>
            </div>
          </div>

          {/* Poem Content */}
          <div className="space-y-4 sm:space-y-6 text-[#4a3c2d]">
            {poem.content.split('\n').map((line, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed font-serif">
                {line.trim()}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#8b7355]/20">
            <div className="flex flex-wrap gap-2">
              {poem.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center text-xs sm:text-sm text-[#8b7355]"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};