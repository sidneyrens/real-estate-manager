import React, { useState, useCallback } from 'react';
import { Button, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'; // Necessary imports
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { uploadPDF } from '../../services/api'; // Corrected import path

const PDFUpload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [expanded, setExpanded] = useState(false); // State for accordion

  const handleFileChange = useCallback(async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile));
      try {
        await uploadPDF(selectedFile); // Call the API to upload the PDF
        setExpanded(true); // Expand accordion when file is uploaded
      } catch (error) {
        alert('Error uploading file: ' + error.message);
      }
    } else {
      alert('Please upload a valid PDF file.');
    }
  }, []);

  const handleAccordionChange = () => {
    setExpanded(!expanded); // Toggle accordion state
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        Upload PDF
        <input type="file" accept=".pdf" onChange={handleFileChange} hidden />
      </Button>

      {file && <Typography variant="body1">File uploaded: {file.name}</Typography>}

      {/* Accordion for displaying the PDF */}
      <Accordion expanded={expanded} onChange={handleAccordionChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">View Uploaded PDF</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%', height: 400, padding: 2 }}>
            <iframe
              title="Uploaded PDF"
              src={fileUrl}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default PDFUpload;