const express = require('express');
const router = express.Router();

let users = [];
let nextId = 1;

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'Cant return as user does not exist' });
  res.json(user);
});

router.post('/', (req, res) => {
  const { name, age, email } = req.body;
  const newUser = { id: nextId++, name, age, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'User is not found' });
  const { name, age, email } = req.body;
  if (name !== undefined) user.name = name;
  if (email !== undefined) user.email = email;
  if (age !== undefined) user.age = age;
  res.json(user);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Cant delete, user doesnt exist' });
  users.splice(idx, 1);
  res.status(204).end();
});

module.exports = router;