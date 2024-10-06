import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const RecentActivity = () => {
  // Sample data, replace with actual data fetching logic
  const activities = [
    { id: 1, description: 'Uploaded Property Document 1', date: '2023-10-01' },
    { id: 2, description: 'Uploaded Property Document 2', date: '2023-10-02' },
    { id: 3, description: 'Updated Property 1 details', date: '2023-10-03' },
  ];

  return (
    <Paper elevation={2} style={{ padding: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.description} secondary={activity.date} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default RecentActivity;
