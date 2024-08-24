class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    handleHelp = () => {
      const message = this.createChatBotMessage('I am here to help. What do you need assistance with?');
      this.addMessageToState(message);
    };
  
    handleMentalHealthSupport = () => {
      const message = this.createChatBotMessage('It sounds like you may be going through a tough time. Please reach out to a mental health professional for support. If you need immediate help, contact our crisis hotline.');
      this.addMessageToState(message);
    };
  
    handleCounseling = () => {
      const message = this.createChatBotMessage('Our counseling services are available by appointment. Contact us to schedule a session.');
      this.addMessageToState(message);
    };
  
    handleGreetings = () => {
      const message = this.createChatBotMessage('Hello! How can I assist you today?');
      this.addMessageToState(message);
    };
  
    handleFeedback = () => {
      const message = this.createChatBotMessage('We value your feedback. Please let us know your thoughts or suggestions.');
      this.addMessageToState(message);
    };
  
    handleHours = () => {
      const message = this.createChatBotMessage('Our support hours are Monday to Friday, 9 AM to 5 PM.');
      this.addMessageToState(message);
    };
  
    handleContact = () => {
      const message = this.createChatBotMessage('You can contact us at support@example.com or call us at 123-456-7890.');
      this.addMessageToState(message);
    };
  
    handleCommunity = () => {
      const message = this.createChatBotMessage('Join our community forum to connect with others and share experiences!');
      this.addMessageToState(message);
    };
  
    handleServices = () => {
      const message = this.createChatBotMessage('We offer a range of services including counseling, support groups, and educational resources.');
      this.addMessageToState(message);
    };
  
    handleAppointment = () => {
      const message = this.createChatBotMessage('To schedule an appointment, please visit our website or contact us directly.');
      this.addMessageToState(message);
    };
  
    handleCancellation = () => {
      const message = this.createChatBotMessage('To cancel an appointment or service, please contact us at your earliest convenience.');
      this.addMessageToState(message);
    };
  
    handleThanks = () => {
      const message = this.createChatBotMessage('You’re welcome! If you need further assistance, just let me know.');
      this.addMessageToState(message);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage('I am not sure how to help with that. Can you please provide more details?');
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
