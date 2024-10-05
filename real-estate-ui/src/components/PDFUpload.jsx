import React, { useState } from 'react';

const PDFUpload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Check if the selected file is a PDF
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setFileUrl(URL.createObjectURL(selectedFile)); // Create a URL for displaying the PDF
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {fileUrl && (
        <iframe
          title="Uploaded PDF"
          src={fileUrl}
          width="600"
          height="400"
          style={{ border: 'none' }}
        />
      )}
      {file && <p>File uploaded: {file.name}</p>}
    </div>
  );
};

export default PDFUpload;
