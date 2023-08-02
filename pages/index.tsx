// pages/index.tsx
import React from 'react';
import PDFViewer from '../components/PDFviewer';
import { Button } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# Welcome To My Resume Site 📄
This page is currently under development, check back later for a more interactive 
look at my resume. For now, you can download a PDF version of my resume below.



`;

const imageURL = '/AidanSibleyCV.jpg'; // Path to your PDF image
const pdfURL = '/AidanSibleyCV.pdf'; // Replace this with the actual path to your PDF file

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '1px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
            <div style={{ padding: '16px' }}>
        <Button variant="contained" color="primary">
          <a href={pdfURL} download style={{ color: 'white', textDecoration: 'none' }}>
            Download PDF
          </a>
        </Button>
      </div>
      <PDFViewer imageURL={imageURL} />
    </div>
  );
};

export default HomePage;
