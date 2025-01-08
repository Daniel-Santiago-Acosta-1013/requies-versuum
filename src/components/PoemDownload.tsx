import { useRef } from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import type { Poem } from '../types';

interface PoemDownloadProps {
  poem: Poem;
}
export const PoemDownload = ({ poem }: PoemDownloadProps) => {
  const poemRef = useRef<HTMLDivElement>(null);

  const downloadAsPDF = async () => {
    if (!poemRef.current) return;

    const canvas = await html2canvas(poemRef.current, {
      scale: 2,
      backgroundColor: '#f9f3e6',
      windowWidth: 1200,
      onclone: (document) => {
        const element = document.getElementById('poem-content');
        if (element) {
          element.style.backgroundColor = '#f9f3e6';
          element.style.color = '#4a3c2d';
          element.style.padding = '40px';
          element.style.borderRadius = '8px';
        }
      }
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pdf = new jsPDF({
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    });

    pdf.addImage(
      canvas.toDataURL('image/png'),
      'PNG',
      0,
      0,
      imgWidth,
      imgHeight
    );

    pdf.save(`${poem.title}.pdf`);
  };

  const downloadAsImage = async () => {
    if (!poemRef.current) return;

    const canvas = await html2canvas(poemRef.current, {
      scale: 2,
      backgroundColor: '#f9f3e6',
      windowWidth: 1200
    });

    const link = document.createElement('a');
    link.download = `${poem.title}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div>
      <div className="flex gap-4 mb-8">
        <button
          onClick={downloadAsPDF}
          className="inline-flex items-center px-4 py-2 bg-[#8b7355] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4 mr-2" />
          Descargar PDF
        </button>
        <button
          onClick={downloadAsImage}
          className="inline-flex items-center px-4 py-2 bg-[#8b7355] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4 mr-2" />
          Descargar Imagen
        </button>
      </div>

      <div
        ref={poemRef}
        id="poem-content"
        className="aged-paper p-12 rounded-lg shadow-lg max-w-2xl mx-auto relative"
      >
        {/* Decorative corner flourishes */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#8b7355]/20 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#8b7355]/20 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#8b7355]/20 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#8b7355]/20 rounded-br-lg"></div>

        <div className="text-center mb-8 border-b pb-8 border-[#8b7355]/20">
          <h2 className="text-3xl font-serif mb-4 text-[#4a3c2d]">
            {poem.title}
          </h2>
          <div className="text-[#8b7355]">
            <time>{new Date(poem.date).toLocaleDateString()}</time>
          </div>
        </div>

        <div className="space-y-6 text-[#4a3c2d]">
          {poem.content.split('\n').map((line, index) => (
            <p key={index} className="text-lg leading-relaxed font-serif">
              {line.trim()}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#8b7355]/20 text-center">
          <div className="text-[#8b7355]">
            <p className="font-serif italic">{poem.author}</p>
            <p className="text-sm mt-2">{poem.obra}</p>
          </div>
        </div>
      </div>
    </div>
  );
};