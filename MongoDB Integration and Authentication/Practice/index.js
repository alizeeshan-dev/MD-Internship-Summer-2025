const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/routes');
const jwtroutes = require('./routes/jwttest');

const app = express();
const PORT = 3000;
app.use(express.json());

const uri = "mongodb+srv://alizeeshan:ali28122005@test.vsvby1s.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'test'
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/api', userRoutes);
app.use('/api', jwtroutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
