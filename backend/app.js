const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // Load environment variables
const { connectDB } = require('./config/db');  // PostgreSQL connection
const clientRoutes = require('./routes/clientRoutes');
const addressRoutes = require('./routes/addressRoutes');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/addresses', addressRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define the port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
