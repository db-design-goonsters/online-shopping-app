const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json()); // Ensure body-parser is set to parse JSON

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'ary_password',
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
app.post('/login', async (req, res) => {
  try {
    console.log('Received login request:', req.body); // Log the request body
    const { username, accountBalance, shippingAddress, isAdmin, warehouseId, adminName, adminAddress, adminSalary, adminTitle } = req.body;
  
    if (isAdmin) { 
      // insert into staff table if user is admin
      await pool.query(`insert into staff (warehouseId, name, address, salary, title) values (${warehouseId}, '${adminName}', '${adminAddress}', ${adminSalary}, '${adminTitle}')`);
      res.json({ message: 'Login successful ', isAdmin });
    } else { 
      // insert into customer table if user is NOT admin
      await pool.query(`insert into customer (name, accountBalance, shipAddress) values ('${username}', ${accountBalance}, '${shippingAddress}')`);
      res.json({ message: 'Login successful ', isAdmin });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
