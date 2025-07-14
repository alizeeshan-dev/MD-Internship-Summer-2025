const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Joi = require('joi');

let userIdCounter = 0;

User.countDocuments().then(count => {
  userIdCounter = count;
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const schema = Joi.object({
      username: Joi.string().required().min(3).messages({
        'string.empty': 'Username is required',
        'string.min': 'Username must be at least 3 characters long'
      }),
      email: Joi.string().required().email().messages({
        'string.empty': 'Email is required',
        'string.email': 'Please provide a valid email address'
      }),
      password: Joi.string().required().min(6).messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 6 characters long'
      }),
      firstName: Joi.string().allow(''),
      lastName: Joi.string().allow('')
    });
        
    const { error } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({ 
        message: error.details[0].message 
      });
    }
    
    userIdCounter++;
    const userId = String(userIdCounter).padStart(3, '0');
    
    const userData = {
      ...req.body,
      userId: userId
    };
    
    const user = new User(userData);
    const newUser = await user.save();
    
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
