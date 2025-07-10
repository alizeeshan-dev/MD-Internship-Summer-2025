
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../user');              
const protectRoutes = require('../middleware/protectroutes');

const JWT_SECRET = process.env.JWT_SECRET || 'jwtkey';

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Email and password required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(401)
        .json({ message: 'Invalid credentials' });
    }

    const payload = { userId: user._id, email: user.email };
    const token   = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });

  } catch (err) {
    console.error('Login error:', err);
    res
      .status(500)
      .json({ message: err.message });
  }
});

router.get('/me', protectRoutes, async (req, res) => {
  try {
    const me = await User
      .findById(req.user.userId)
      .select('-password');
    res.json(me);
  } catch (err) {
    console.error('Me route error:', err);
    res.status(500).json({ message: 'some error in jwt or server' });
  }
});

module.exports = router;
