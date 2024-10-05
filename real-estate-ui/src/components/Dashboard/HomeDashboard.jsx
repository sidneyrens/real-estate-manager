import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import PDFUpload from './PDFUpload';
import PropertyList from './PropertyList'; // Existing import
import RecentActivity from './RecentActivity'; // Existing import
import ReportAnalysis from './ReportAnalysis'; // Import the ReportAnalysis component

const DashboardItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomeDash = () => {
  const reportId = 1; // Ensure this ID corresponds to an existing report

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DashboardItem>
            <Typography variant="h6" gutterBottom>
              Upload Property Document
            </Typography>
            <PDFUpload />
          </DashboardItem>
        </Grid>
        <Grid item xs={12} md={6}>
          <DashboardItem>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <RecentActivity /> {/* Existing component */}
          </DashboardItem>
        </Grid>
        <Grid item xs={12}>
          <DashboardItem>
            <Typography variant="h6" gutterBottom>
              Your Properties
            </Typography>
            <PropertyList /> {/* Existing component */}
          </DashboardItem>
        </Grid>
        <Grid item xs={12}>
          <DashboardItem>
            <ReportAnalysis reportId={reportId} /> {/* Pass the reportId prop */}
          </DashboardItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeDash;