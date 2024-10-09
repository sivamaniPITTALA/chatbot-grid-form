import React, { useState } from 'react';
import nlpService from '../services/nlpService';

const Chatbox = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await nlpService.processMessage(message);
    setResponse(result.data.response);  // Assuming response comes from the backend
    setMessage('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Ask a question"
        />
        <button type="submit">Send</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
};

export default Chatbox;
