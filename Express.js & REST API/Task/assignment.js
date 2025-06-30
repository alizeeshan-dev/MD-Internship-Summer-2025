const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const routes = require('./routes/routes');
const logger = require('./middleware/logger');
const Position = require('./models/position');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use('/api', routes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();