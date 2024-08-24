import React from 'react';
import { Container, Typography, Box, Button, TextField, Paper } from '@mui/material'; 

function Community() {
  return (
    <Container maxWidth="md">
      {/* Header Section */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#004d40' }}>
          Community Support
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 4, color: '#555' }}>
          Join our community to share your experiences and support others. Together, we can make a difference!
        </Typography>
      </Box>

      {/* Feedback Form Section */}
      <Box sx={{ my: 6, display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3, width: '100%', maxWidth: '600px' }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 4, color: '#004d40' }}>
            Share Your Feedback
          </Typography>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              sx={{ mb: 4 }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              sx={{ mt: 2, borderRadius: '20px', padding: '10px 20px' }}
            >
              Send
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default Community;
