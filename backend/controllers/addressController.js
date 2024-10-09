const Address = require('../models/address');

// Get address for a specific client
exports.getAddressForClient = async (req, res) => {
    try {
        const address = await Address.findOne({ where: { Add_PartyID: req.params.id } });
        if (!address) {
            return res.status(404).json({ message: 'Address not found' });
        }
        res.json(address);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
