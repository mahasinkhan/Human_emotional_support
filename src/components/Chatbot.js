import React from 'react';
import ChatBot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

function Chatbot() {
  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, margin: 16 }}>
      <ChatBot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Chatbot;
