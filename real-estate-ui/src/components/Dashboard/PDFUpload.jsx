import React, { useState, useCallback } from 'react';
import { Button, Typography, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { uploadPDF } from '../../services/uploadService';

const PDFUpload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = useCallback(async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile));
      try {
        uploadPDF(selectedFile);
        alert('File uploaded successfully!');
      } catch (error) {
        alert('Error uploading file: ' + error.message);
      }
    } else {
      alert('Please upload a valid PDF file.');
    }
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        Upload PDF
        <input type="file" accept=".pdf" onChange={handleFileChange} hidden />
      </Button>
      {file && <Typography variant="body1">File uploaded: {file.name}</Typography>}
      {fileUrl && (
        <Box sx={{ width: '100%', maxWidth: 600, height: 400, border: '1px solid #ccc' }}>
          <iframe
            title="Uploaded PDF"
            src={fileUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default PDFUpload;