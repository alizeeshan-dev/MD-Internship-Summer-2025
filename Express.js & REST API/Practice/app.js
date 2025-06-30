const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Checking: Express running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const logger = require('./middleware/logger');
const userRouter = require('./routes/users');
const exampleRouter = require('./routes/route_queryparameter');
const custom = require('./middleware/custom');
const error = require('./middleware/error');

app.use(error);
app.use(custom);
app.use(logger);
app.use('/api/users',userRouter);
app.use('/api/examples', require('./routes/route_queryparameter'));

module.exports = app;