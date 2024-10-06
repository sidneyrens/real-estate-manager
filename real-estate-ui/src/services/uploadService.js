// import axios from 'axios';
import { apiCall } from '../utils/axios';

// Service to upload PDF
export const uploadPDF = async (file) => {
    console.log("Attempting to upload file:", file.name);
    const formData = new FormData();
    formData.append('file', file);
    return apiCall('post', '/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
  };

  // Function to fetch issues from the report
  export const fetchIssues = async (reportId) => {
    return apiCall('get', `/reports/${reportId}/issues`);
  };
  
  // Function to submit prioritized issues
  export const submitPriorities = async (prioritizedIssues) => {
    return apiCall('post', `/reports/prioritize`, prioritizedIssues);
  };
  
  // Function to submit summary
  export const submitSummary = async (summaryData) => {
    return apiCall('post', `/reports/summary`, summaryData);
  };
  
  