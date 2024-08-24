import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "This community has been a lifesaver. The support and resources are invaluable."
    },
    {
      name: "John Smith",
      feedback: "A wonderful place to connect with others going through similar experiences."
    },
    {
      name: "Sarah Lee",
      feedback: "I found the advice and encouragement I needed to move forward."
    }
  ];

  return (
    <Container>
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>What Our Users Say</Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="body1" gutterBottom>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  - {testimonial.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Testimonials;
