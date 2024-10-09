const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Client = require('./client');  // Import the Client model

// Address model
const Address = sequelize.define('Address', {
    Add_ID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    Add_Line1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Add_Line2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Add_City: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Add_State: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Add_Zip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

// Foreign Key Relationship
Address.belongsTo(Client, { foreignKey: 'Add_PartyID' });

module.exports = Address;
