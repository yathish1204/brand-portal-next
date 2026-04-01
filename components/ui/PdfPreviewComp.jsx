"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

const PdfPreviewComp = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const configurePdfWorker = async () => {
      // Load react-pdf only in browser runtime to avoid SSR/prerender crashes.
      const reactPdf = await import("react-pdf");
      if (!isMounted) return;

      const { pdfjs } = reactPdf;
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    };

    configurePdfWorker().catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="fixed inset-0 bg-primary bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg w-3/4 h-4/5 overflow-y-auto">
        <button className="mb-4 text-red-500" onClick={onClose}>
          Close
        </button>

        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p>Loading PDF...</p>}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfPreviewComp;
