import React, { useEffect, useState } from 'react';
import clientService from '../services/clientService';

const Grid = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const result = await clientService.getClients();
      setClients(result.data);
    };
    fetchClients();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {clients.map(client => (
          <tr key={client.PTY_ID}>
            <td>{client.PTY_ID}</td>
            <td>{client.PTY_FirstName}</td>
            <td>{client.PTY_LastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
