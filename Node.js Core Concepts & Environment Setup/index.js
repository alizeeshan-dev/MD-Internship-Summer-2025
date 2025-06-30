// index.js
require('dotenv').config();
const express = require('express');

const app  = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const db = require('./models');
const { Data } = db;

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connected');

    await db.sequelize.sync({ alter: true });
    console.log('Schema in sync');

    app.get('/select', async (_req, res) => {
      const rows = await Data.findAll();
      res.json(rows);
    });

    app.post('/insert', async (req, res) => {
      const row = await Data.create(req.body);
      res.status(201).json(row);
    });

    app.delete('/delete', async (_req, res) => {
      await Data.destroy({ truncate: true });
      res.send('All rows deleted');
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Startup error:', err);
  }
})();
