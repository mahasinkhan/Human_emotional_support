import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import Mahasin1 from '../assets/images/Mahasin1.jpg';
import Mahasin2 from '../assets/images/Mahasin2.jpg';
import Mahasin3 from '../assets/images/Mahasin3.jpg';

function About() {
  const team = [
    { name: "Mahasin Khan", role: "Founder", image: Mahasin1 },
    { name: "Souvik Kundu", role: "Lead Counselor", image: Mahasin2 },
    { name: "Sounak Ghosal", role: "Community Manager", image: Mahasin3 }
  ];

  return (
    <Container>
      {/* About Us Section */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#003366' }}>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 4, color: '#333' }}>
          Our mission is to provide emotional support to individuals who need it through resources, counseling, and a strong community.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 4, color: '#333' }}>
          We believe in the power of connection and understanding. Our vision is to create a world where everyone has access to the emotional support they need.
        </Typography>
      </Box>

      {/* Team Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center', color: '#003366' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 3, borderRadius: 2, textAlign: 'center', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', borderRadius: '50%', marginBottom: '1rem', border: '4px solid #003366' }} 
                />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#003366' }}>{member.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{member.role}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
