// ./components/PDFviewer.tsx
import React from 'react';


interface PDFViewerProps {
  imageURL: string;
  pdfURL: string;
  markdownContent: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ imageURL }) => {
  return (
    <>
      <div style={{ margin: '0 auto', maxWidth: '900px', padding: '1px' }}>
        <div style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', borderRadius: '10px' }}>
          <img src={imageURL} alt="Resume" style={{ maxWidth: '900px', width: '100%', borderRadius: '4px' }} />
        </div>
      </div>
    </>
  );
};

export default PDFViewer;
