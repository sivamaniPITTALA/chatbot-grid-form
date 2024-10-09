const express = require('express');
const { getAddressForClient } = require('../controllers/addressController');
const router = express.Router();

router.get('/:id', getAddressForClient);

module.exports = router;
