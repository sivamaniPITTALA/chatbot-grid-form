import axios from 'axios';

const getClients = async () => {
  return await axios.get('/api/clients');
};

export default { getClients };
