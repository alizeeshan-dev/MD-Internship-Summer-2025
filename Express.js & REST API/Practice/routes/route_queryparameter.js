const express = require('express');
const router = express.Router();

router.get('/user/:name/:email', (req, res) => {
  const { name, email } = req.params;
  res.json({ 
    message: "This will run when root parameters are passed." ,
    name, 
    email });
});

router.get('/user', (req, res) => {
  const { name, email } = req.query;
  res.json({ 
    message: "This will run when query parameters are passed." ,
    name, 
    email });
});

module.exports = router;
