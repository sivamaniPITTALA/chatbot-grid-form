CREATE TABLE clients (
    PTY_ID UUID PRIMARY KEY,
    PTY_FirstName VARCHAR(50),
    PTY_LastName VARCHAR(50),
    PTY_Phone VARCHAR(20),
    PTY_SSN VARCHAR(20)
);

CREATE TABLE addresses (
    Add_ID UUID PRIMARY KEY,
    Add_Line1 VARCHAR(100),
    Add_Line2 VARCHAR(100),
    Add_City VARCHAR(50),
    Add_State VARCHAR(50),
    Add_Zip VARCHAR(10),
    Add_PartyID UUID REFERENCES clients(PTY_ID)
);
