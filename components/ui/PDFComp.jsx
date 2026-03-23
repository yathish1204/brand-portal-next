"use client";

import React, { useState } from "react";
import PDFCard from "./PDFCard";
import { pdfAPI } from "@/app/data/pdfAPI";
import TitleComp from "./TitleComp";
import PdfPreviewComp from "./PdfPreviewComp";

const PDFComp = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  return (
    <>
      <TitleComp title={"PDF's"} resultsCount={pdfAPI.length} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mx-2 mt-6">
        {pdfAPI.length > 0 &&
          pdfAPI.map((pdf, index) => (
            <PDFCard
              key={index}
              title={pdf.name}
              src={pdf.thumbnail}
              url={pdf.url}
              onClick={() => setSelectedPdf(pdf.url)}
            />
          ))}
      </div>

      {selectedPdf && (
        <PdfPreviewComp
          pdfUrl={selectedPdf}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </>
  );
};

export default PDFComp;
