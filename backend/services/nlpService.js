import axios from 'axios';

const processMessage = async (message) => {
  return await axios.post('/api/nlp', { message });
};

export default { processMessage };
