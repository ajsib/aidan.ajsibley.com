import React from 'react';
import PDFViewer from '../components/PDFviewer';
import { Button, Grid } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import ServiceCard from '../components/Card'; // Import the ServiceCard component

const markdownContent = `
# Welcome To My Resume Site 📄

This page is currently under development, check back later for a more interactive 
look at my resume!   

---

For now, you can download my resume as a pdf, check out some of my premier projects in the cards below, or scroll to my resume in the view below.

`;

const imageURL = '/AidanSibleyCV.jpg'; 
const pdfURL = '/AidanSibleyCV.pdf'; 

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '1px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
      <div style={{ padding: '16px' }}>
        <Button variant="contained" color="primary">
          <a href={pdfURL} download style={{ color: 'white', textDecoration: 'none' }}>
            Download Resume PDF
          </a>
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px', width: '100%' }}>
        <Grid container spacing={2} style={{ justifyContent: 'center' }}>
          {/* Add ServiceCards with type as project */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ServiceCard 
              name="Project 1" 
              description="Description of Project 1" 
              icon="/path/to/project1/icon" 
              path="https://www.ajsibley.com" 
              type="project" 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ServiceCard 
              name="Project 2" 
              description="Description of Project 2" 
              icon="/path/to/project2/icon" 
              path="https://calwcospp.vercel.app/" 
              type="project" 
            />
          </Grid>
          {/* Add more ServiceCards as necessary */}
        </Grid>
      </div>
      <PDFViewer imageURL={imageURL} />
    </div>
  );
};

export default HomePage;

