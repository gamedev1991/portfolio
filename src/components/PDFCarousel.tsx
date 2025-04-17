import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

// Use the worker from the public directory to avoid Vite/TypeScript issues
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

interface PDFCarouselProps {
  pdfUrl: string;
}

const PDFCarousel: React.FC<PDFCarouselProps> = ({ pdfUrl }) => {
  console.log('[PDFCarousel] pdfUrl:', pdfUrl);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>(900); // Default width
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Responsive width hook
  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    console.log('[PDFCarousel] PDF loaded successfully. Number of pages:', numPages);
    setNumPages(numPages);
    setPageNumber(1);
  };

  const onDocumentLoadError = (error: any) => {
    console.error('[PDFCarousel] Failed to load PDF:', error);
  };

  const goToPrevPage = () => setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  const goToNextPage = () => setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));

  // Custom loader with background matching the site (dark or light)
  const pageLoader = (
    <div
      style={{
        width: containerWidth,
        height: '600px', // fallback height, can be tweaked or made dynamic
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--background, #18181b)', // fallback to dark, can be customized
        color: '#888',
        borderRadius: '8px',
      }}
    >
      Loading page...
    </div>
  );

  const documentLoader = (
    <div
      style={{
        width: '100%',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--background, #18181b)',
        color: '#888',
        borderRadius: '8px',
      }}
    >
      Loading PDF...
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex items-center gap-4 mb-2">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className={buttonVariants({ variant: 'ghost', size: 'icon' }) + ' flex items-center justify-center' + (pageNumber <= 1 ? ' opacity-50' : '')}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="min-w-[100px] text-center">
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className={buttonVariants({ variant: 'ghost', size: 'icon' }) + ' flex items-center justify-center' + (pageNumber >= numPages ? ' opacity-50' : '')}
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div ref={containerRef} className="max-w-4xl w-full flex justify-center">
          <Document 
            file={pdfUrl} 
            onLoadSuccess={onDocumentLoadSuccess} 
            onLoadError={onDocumentLoadError}
            loading={documentLoader}
          >
            <Page 
              pageNumber={pageNumber} 
              width={containerWidth} 
              loading={pageLoader} 
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PDFCarousel;
