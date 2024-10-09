const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

// Client model
const Client = sequelize.define('Client', {
    PTY_ID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    PTY_FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PTY_LastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PTY_Phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    PTY_SSN: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
});

module.exports = Client;
