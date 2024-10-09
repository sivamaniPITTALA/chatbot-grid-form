const { Sequelize } = require('sequelize');
require('dotenv').config({ path: '/workspaces/chatbot-grid-form/backend/.env' });
console.log('Environment variables loaded:', process.env.PG_HOST ? 'Yes' : 'No');

console.log("Database connection settings:");
console.log("Host:", process.env.PG_HOST);
console.log("Port:", process.env.PG_PORT);
console.log("Database:", process.env.PG_DB);
console.log("User:", process.env.PG_USER);
console.log("Password Type:", typeof process.env.PG_PASSWORD);
console.log("Password:", process.env.PG_PASSWORD);

// Use environment variables from .env instead of hardcoded values
const sequelize = new Sequelize(
  process.env.PG_DB,       // Database name from .env
  process.env.PG_USER,     // User from .env
  process.env.PG_PASSWORD, // Password from .env
  {
    host: process.env.PG_HOST,    // Host from .env
    port: process.env.PG_PORT,    // Port from .env
    dialect: 'postgres',
    logging: false,               // Disable logging
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected successfully');
  } catch (error) {
    console.error('PostgreSQL connection error:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
