import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import PDFUpload from './PDFUpload'; // Import the PDFUpload component
import PropertyList from './PropertyList'; // Existing import
import RecentActivity from './RecentActivity'; // Existing import
import ReportAnalysis from './ReportAnalysis'; // Import the ReportAnalysis component

const HomeDash = () => {
  const reportId = 1; // Ensure this ID corresponds to an existing report

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <PDFUpload />
        </Grid>
        <Grid item xs={12} md={6}>
          <RecentActivity /> {/* Ensure this is only here once */}
        </Grid>
        <Grid item xs={12}>
          <PropertyList /> {/* Ensure this is only here once */}
        </Grid>
        <Grid item xs={12}>
          <ReportAnalysis reportId={reportId} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeDash;