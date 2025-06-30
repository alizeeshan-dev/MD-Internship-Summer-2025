const express = require('express');
const bodyParser = require('body-parser');
const crud = express();
const crudRoutes = require('./routes/crudroutes');

crud.use(bodyParser.json());
crud.use('/users', crudRoutes);

const port = process.env.PORT || 3000;
crud.listen(port, () => {
  console.log(`CRUD API listening on port ${port}`);
});
