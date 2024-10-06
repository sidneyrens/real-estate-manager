import { createTheme } from '@mui/material/styles';

const sleekProfessionalTheme = createTheme({
  palette: {
    primary: {
      main: '#007AFF', // Blue
    },
    secondary: {
      main: '#333333', // Dark Gray
    },
    background: {
      default: '#F5F5F5', // Soft Gray
      paper: '#FFFFFF', // White paper
    },
    text: {
      primary: '#000000', // Black
      secondary: '#666666', // Medium Gray
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          padding: '10px 20px',
          backgroundColor: '#007AFF',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#005BB5',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 4px rgba(0, 122, 255, 0.5)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: '1px solid #E0E0E0',
          borderRadius: '12px',
        },
      },
    },
  },
});

export default sleekProfessionalTheme;
