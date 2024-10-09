const Client = require('../models/client');

// Get list of clients
exports.getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
