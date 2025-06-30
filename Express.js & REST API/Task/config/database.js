const { Sequelize } = require('sequelize');
module.exports = new Sequelize(
  'week2_test',
  process.env.DB_USER || 'demouser',
  process.env.DB_PASS || 'root',
  { host: '5.79.123.17', dialect: 'mysql' }
);
