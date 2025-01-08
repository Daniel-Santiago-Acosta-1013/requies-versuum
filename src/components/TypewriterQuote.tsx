import { useState, useEffect } from 'react';
import { Quote, quotes } from '../data/quotes';

export const TypewriterQuote = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setCurrentQuote(quotes[(quoteIndex + 1) % quotes.length]);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      }
    } else {
      if (displayText === currentQuote.text) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentQuote.text.slice(0, displayText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentQuote, quoteIndex]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <div className="min-h-[8rem] flex items-center justify-center">
        <blockquote className="font-serif">
          <p className="text-lg md:text-xl text-[#4a3c2d] dark:text-github-default-dark relative">
            "{displayText}"
            <span className="animate-pulse">|</span>
          </p>
          <footer className="mt-4">
            <cite className="text-[#8b7355] dark:text-github-subtle-dark not-italic">
              — {currentQuote.author}
              {currentQuote.source && (
                <span className="text-sm ml-2 opacity-75">
                  ({currentQuote.source})
                </span>
              )}
            </cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};