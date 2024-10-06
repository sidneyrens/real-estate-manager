import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import midCenturyModernTheme from './theme'; // Import the theme
import HomeDashboard from './components/Dashboard/HomeDashboard.jsx';

const App = () => {
  return (
    <ThemeProvider theme={midCenturyModernTheme}>
      <CssBaseline />
      <HomeDashboard />
    </ThemeProvider>
  );
};

export default App;
