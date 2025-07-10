const mongoose = require('mongoose');

const uri = "mongodb+srv://alizeeshan:ali28122005@test.vsvby1s.mongodb.net/?retryWrites=true&w=majority&appName=test";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'test' 
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
});
