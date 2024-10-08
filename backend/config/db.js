const { Sequelize } = require('sequelize');
require('dotenv').config();  // Load environment variables

// Create a new instance of Sequelize for PostgreSQL
const sequelize = new Sequelize(process.env.PG_DB, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT || 5432,  // Default PostgreSQL port is 5432
    dialect: 'postgres',  // Use PostgreSQL as the dialect
    logging: false,  // Disable logging SQL queries (optional)
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connected successfully');
    } catch (error) {
        console.error('PostgreSQL connection error:', error);
        process.exit(1);  // Exit the process if the connection fails
    }
};

module.exports = {
    sequelize,
    connectDB
};
