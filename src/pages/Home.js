import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';
import support from '../assets/images/support.jpg'; // Import the image properly

function Home() {
  return (
    <Container>
      {/* Hero Banner */}
      <Box sx={{
        my: 4,
        textAlign: 'center',
        background: '#003366', // Dark blue background
        color: '#fff',
        py: 6,
        borderRadius: 2,
        boxShadow: 3 // Add shadow for depth
      }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Human Emotional Support
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ fontStyle: 'italic' }}>
          A community where you can find support and share your experiences.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/community" sx={{ mt: 2 }}>
          Join Our Community
        </Button>
      </Box>

      {/* About Us Section */}
      <Box sx={{ my: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 2, color: '#003366' }}>About Us</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We provide emotional support to individuals through various resources, community discussions, and professional advice.
            </Typography>
            <Button variant="outlined" color="secondary" component={Link} to="/about" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={support} alt="Support" style={{ width: '100%', borderRadius: 8, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }} />
          </Grid>
        </Grid>
      </Box>

      {/* Community Support Section with Videos */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, color: '#003366' }}>Community Support</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2, boxShadow: 3 }}>
              <iframe 
                width="100%" 
                height="auto" 
                src="https://www.youtube.com/embed/sTdKp-fzp2A" 
                title="Community Video 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ position: 'absolute', bottom: 10, right: 10, borderRadius: '20px' }}
                href="https://youtu.be/sTdKp-fzp2A?si=V2OAklMnmVNGa_et" // Link to video
                target="_blank"
              >
                Watch Video 1
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2, boxShadow: 3 }}>
              <iframe 
                width="100%" 
                height="auto" 
                src="https://www.youtube.com/embed/TjK0AA28U10" 
                title="Community Video 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ position: 'absolute', bottom: 10, right: 10, borderRadius: '20px' }}
                href="https://youtu.be/TjK0AA28U10?si=CGVQoAF7H9NIyirK" // Link to video
                target="_blank"
              >
                Watch Video 2
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2, boxShadow: 3 }}>
              <iframe 
                width="100%" 
                height="auto" 
                src="https://www.youtube.com/embed/SmbIcdJ0Zx8" 
                title="Community Video 3" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ position: 'absolute', bottom: 10, right: 10, borderRadius: '20px' }}
                href="https://youtu.be/SmbIcdJ0Zx8?si=vYH2no8JpwvejX0j" // Link to video
                target="_blank"
              >
                Watch Video 3
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Testimonials />
    </Container>
  );
}

export default Home;
