const db = require('../config/db');

// Seed client data
const seedClients = () => {
    const clients = [
        ['1e7e7768-b4d6-4f92-8b2f-1e62fa9e0bb8', 'Pushpasri', 'Ramagiri', '123-456-7890', '123-45-6789'],
        ['3c9dc9b5-3d91-4e7d-8d3f-e75f2525b66b', 'Sivamani', 'Pittala', '987-654-3210', '987-65-4321'],
        ['4e5f7768-a6d6-5f72-8b3g-2f63ab9e1cd9', 'Keerthana', 'Chittimalla', '234-567-8901', '234-56-7890'],
        ['7d8e7769-c3b5-6h78-9d4i-4f73cb9e2df0', 'Madhu', 'Pinnam', '345-678-9012', '345-67-8901']
    ];
    const query = 'INSERT INTO clients (PTY_ID, PTY_FirstName, PTY_LastName, PTY_Phone, PTY_SSN) VALUES ?';
    db.query(query, [clients], (err, results) => {
        if (err) throw err;
        console.log('Client data seeded.');
    });
};

// Seed address data
const seedAddresses = () => {
    const addresses = [
        ['2e8e5569-4b56-4d9b-8c5a-0e3e8d6f5a9f', '123 Elm St', 'Apt 4B', 'New York', 'NY', '10001', '1e7e7768-b4d6-4f92-8b2f-1e62fa9e0bb8'],
        ['c5a9d7a4-4c45-451e-b2f9-3e8e5d7f5a2f', '456 Oak St', '', 'Los Angeles', 'CA', '90001', '3c9dc9b5-3d91-4e7d-8d3f-e75f2525b66b'],
        ['6f7d8899-a7c8-5d89-9e1f-5g74cb9e3ef1', '789 Maple St', 'Suite 300', 'Chicago', 'IL', '60601', '4e5f7768-a6d6-5f72-8b3g-2f63ab9e1cd9'],
        ['9h8i9989-b5d4-7h99-9f4k-6g75dc9e4fg2', '101 Pine St', 'Floor 2', 'Miami', 'FL', '33101', '7d8e7769-c3b5-6h78-9d4i-4f73cb9e2df0']
    ];
    const query = 'INSERT INTO addresses (Add_ID, Add_Line1, Add_Line2, Add_City, Add_State, Add_Zip, Add_PartyID) VALUES ?';
    db.query(query, [addresses], (err, results) => {
        if (err) throw err;
        console.log('Address data seeded.');
    });
};

// Seed state data
const seedStates = () => {
    const states = [
        ['ca35e556-a6a6-4fbb-90b8-9f6b7e6a5a8b', 'California', 'CA'],
        ['f748b448-bda1-432f-bb7e-2b9b256a84f2', 'New York', 'NY'],
        ['d85a90bb-3dcd-493a-bad6-faf7282990f8', 'Illinois', 'IL'],
        ['ed9c5091-df2e-47b5-8c56-62c5b14c7414', 'Florida', 'FL']
    ];
    const query = 'INSERT INTO SYS_State (Stt_ID, Stt_Name, Stt_Code) VALUES ?';
    db.query(query, [states], (err, results) => {
        if (err) throw err;
        console.log('State data seeded.');
    });
};

// Run all seed functions
seedClients();
seedAddresses();
seedStates();

console.log('Database seeding complete.');
