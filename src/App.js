import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import ChatBot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/chatbotConfig'; // Ensure this path is correct

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Community from './pages/Community';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);

  const toggleChatBot = () => {
    setIsChatBotVisible(!isChatBotVisible);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
      <Box sx={{ position: 'fixed', bottom: 20, right: 20 }}>
        {isChatBotVisible ? (
          <Box sx={{ position: 'relative' }}>
            <ChatBot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
            <Button
              onClick={toggleChatBot}
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: 'red',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              &times;
            </Button>
          </Box>
        ) : (
          <Button
            onClick={toggleChatBot}
            sx={{
              backgroundColor: '#004d00', // Dark green color
              color: '#fff',
              borderRadius: '50%', // Round shape
              width: '60px', // Width of the button
              height: '60px', // Height of the button
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for a 3D effect
              ':hover': {
                backgroundColor: '#003300', // Darker green on hover
              },
            }}
          >
            Open ChatBot
          </Button>
        )}
      </Box>
    </Router>
  );
}

export default App;
