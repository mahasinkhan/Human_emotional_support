import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <form>
          <TextField label="Name" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Contact;
