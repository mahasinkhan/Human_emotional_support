import React from 'react';
import { Container, Typography, Box, Grid, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: '#fff', py: 4, mt: 8 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Human Emotional Support</Typography>
            <Typography variant="body2">
              Empowering individuals through emotional support and community connection.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>Home</Link>
            <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>About Us</Link>
            <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>Contact Us</Link>
            <Link href="/community" color="inherit" sx={{ display: 'block', mb: 1 }}>Community Support</Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2">
              Email: mahasinkhan132@gmail.org
            </Typography>
            <Typography variant="body2">
              Phone: +91 8597495156
            </Typography>
            <Typography variant="body2">
              Address: 123 Emotional Support Blvd, City, Country
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
          © {new Date().getFullYear()} Human Emotional Support. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
