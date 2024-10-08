const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // For environment variables

const clientRoutes = require('./routes/clientRoutes');
const addressRoutes = require('./routes/addressRoutes');
const { connectDB } = require('./config/db');  // Import the PostgreSQL connection

// Create the Express app
const app = express();

// Middlewares
app.use(bodyParser.json());  // To parse JSON requests
app.use(cors());  // To allow cross-origin requests

// Connect to PostgreSQL database
connectDB();

// Routes
app.use('/api/clients', clientRoutes);  // Use the client routes for /api/clients
app.use('/api/addresses', addressRoutes);  // Use the address routes for /api/addresses

// Root route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
