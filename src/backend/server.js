const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require("cors");

const app = express();
const port = 3002;

// Create a PostgreSQL client
const pool = new Pool({
    user: 'divitkalathil',
    host: 'db',
    database: 'test_db',
    password: 'root',
    port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// Define API endpoints
app.get('/farms', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM farms');
        res.json(rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/movements', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM movements');
        res.json(rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});