require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/routes');
const { router: authRoutes, verifyToken } = require('./routes/jwt');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'FINALPROJECT'
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.get('/api/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Profile access granted',
    user: req.user
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
