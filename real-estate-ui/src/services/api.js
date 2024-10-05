import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your actual API URL

// Function to upload PDF
export const uploadPDF = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return await axios.post(`${API_URL}/upload`, formData);
};

// Function to fetch issues from the report
export const fetchIssues = async (reportId) => {
  return await axios.get(`${API_URL}/reports/${reportId}/issues`);
};

// Function to submit prioritized issues
export const submitPriorities = async (prioritizedIssues) => {
  return await axios.post(`${API_URL}/reports/prioritize`, prioritizedIssues);
};

// Function to submit summary
export const submitSummary = async (summaryData) => {
  return await axios.post(`${API_URL}/reports/summary`, summaryData);
};