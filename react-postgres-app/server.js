const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'your_password',
  port: 5432,
});

// Endpoint to get data from PostgreSQL
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM supplier');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Endpoint to handle login
app.post('/login', (req, res) => {
  const { username, creditCard, isAdmin } = req.body;
  
  // Dummy validation logic for example purposes
  if (username && creditCard) {
    res.json({ message: 'Login successful', isAdmin });
  } else {
    res.status(400).json({ message: 'Login failed' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
