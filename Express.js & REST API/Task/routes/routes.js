const express = require('express');
const User = require('../models/user');
const Position = require('../models/position');

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await User.findAll({ include: Position });
  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id, { include: Position });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

router.post('/users', async (req, res) => {
  try {
    const position = await Position.findByPk(req.body.positionId);
    if (!position) return res.status(400).json({ error: 'Invalid position' });
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  try {
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  await user.destroy();
  res.status(204).end();
});

router.post('/positions', async (req, res) => {
  try {
    const pos = await Position.create({ title: req.body.title });
    res.status(201).json(pos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/positions', async (req, res) => {
  const all = await Position.findAll();
  res.json(all);
});

module.exports = router;