import React, { useState } from 'react';
import { Typography, TextField, Button, Paper } from '@mui/material';
import { submitSummary } from '../../services/api'; // Updated import path

const SummaryDraft = () => {
  const [summary, setSummary] = useState('ChatGPT-generated repair summary goes here...');
  const [requestType, setRequestType] = useState('repairs'); // 'repairs' or 'seller credit'

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const handleRequestTypeChange = (event) => {
    setRequestType(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await submitSummary({ summary, requestType });
      alert('Summary submitted successfully!');
    } catch (error) {
      alert('Error submitting summary: ' + error.message);
    }
  };

  return (
    <Paper elevation={2} style={{ padding: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Summary Draft
      </Typography>
      <TextField
        label="Repair Summary"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={summary}
        onChange={handleSummaryChange}
      />
      <Typography variant="body1" gutterBottom>
        Choose Request Type:
      </Typography>
      <Button
        variant={requestType === 'repairs' ? 'contained' : 'outlined'}
        onClick={() => setRequestType('repairs')}
      >
        Request Repairs
      </Button>
      <Button
        variant={requestType === 'seller credit' ? 'contained' : 'outlined'}
        onClick={() => setRequestType('seller credit')}
      >
        Seller Credit
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '16px' }}>
        Submit Summary
      </Button>
    </Paper>
  );
};

export default SummaryDraft;
