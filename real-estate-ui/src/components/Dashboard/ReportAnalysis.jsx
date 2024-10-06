import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Paper, Slider, Button } from '@mui/material';
import { fetchIssues, submitPriorities } from '../../services/uploadService';

const ReportAnalysis = ({ reportId }) => {
  const [issues, setIssues] = useState([]);

  // useEffect(() => {
  //   const getIssues = async () => {
  //     try {
  //       const response = fetchIssues(reportId);
  //       setIssues(response.data);
  //     } catch (error) {
  //       console.error('Error fetching issues:', error);
  //     }
  //   };

  //   if (reportId) {
  //     getIssues();
  //   } else {
  //     console.error('Report ID is undefined');
  //   }
  // }, [reportId]);

  const handlePriorityChange = (id, newValue) => {
    setIssues(prevIssues =>
      prevIssues.map(issue =>
        issue.id === id ? { ...issue, priority: newValue } : issue
      )
    );
  };

  const handleSubmit = async () => {
    // try {
    //    submitPriorities(issues);
    //   alert('Priorities submitted successfully!');
    // } catch (error) {
    //   alert('Error submitting priorities: ' + error.message);
    // }
  };

  return (
    <Paper elevation={2} style={{ padding: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Report Analysis
      </Typography>
      <List>
        {issues.map(issue => (
          <ListItem key={issue.id}>
            <ListItemText primary={issue.description} secondary={`Category: ${issue.category}`} />
            <Slider
              value={issue.priority}
              onChange={(e, newValue) => handlePriorityChange(issue.id, newValue)}
              aria-labelledby="priority-slider"
              min={1}
              max={5}
              valueLabelDisplay="auto"
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Priorities
      </Button>
    </Paper>
  );
};

export default ReportAnalysis;