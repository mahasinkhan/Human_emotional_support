import React from 'react';

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      // Check for specific intents using regular expressions
      if (/help|assistance|support/.test(lowerCaseMessage)) {
        this.actionProvider.handleHelp();
      } else if (/mentally ill|depressed|sick|unwell/.test(lowerCaseMessage)) {
        this.actionProvider.handleMentalHealthSupport();
      } else if (/counseling|counsellor|therapy|therapist/.test(lowerCaseMessage)) {
        this.actionProvider.handleCounseling();
      } else if (/hi|hello|hey|greetings/.test(lowerCaseMessage)) {
        this.actionProvider.handleGreetings();
      } else if (/feedback|suggestions|comments/.test(lowerCaseMessage)) {
        this.actionProvider.handleFeedback();
      } else if (/hours|timings|availability/.test(lowerCaseMessage)) {
        this.actionProvider.handleHours();
      } else if (/contact|phone|email/.test(lowerCaseMessage)) {
        this.actionProvider.handleContact();
      } else if (/community|forum|discussion/.test(lowerCaseMessage)) {
        this.actionProvider.handleCommunity();
      } else if (/services|offers|benefits/.test(lowerCaseMessage)) {
        this.actionProvider.handleServices();
      } else if (/appointment|schedule|book/.test(lowerCaseMessage)) {
        this.actionProvider.handleAppointment();
      } else if (/cancel|reschedule/.test(lowerCaseMessage)) {
        this.actionProvider.handleCancellation();
      } else if (/thanks|thank you/.test(lowerCaseMessage)) {
        this.actionProvider.handleThanks();
      } else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
  export default MessageParser;
