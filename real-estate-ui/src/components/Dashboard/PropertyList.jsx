import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PropertyList = () => {
  // Sample data, replace with actual data fetching logic
  const properties = [
    { id: 1, name: 'Property 1', location: 'Location A' },
    { id: 2, name: 'Property 2', location: 'Location B' },
    { id: 3, name: 'Property 3', location: 'Location C' },
  ];

  return (
    <Paper elevation={2} style={{ padding: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Your Properties
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>View Properties</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {properties.map(property => (
              <ListItem key={property.id}>
                <ListItemText primary={property.name} secondary={property.location} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default PropertyList;
