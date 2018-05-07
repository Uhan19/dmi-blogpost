const express = require('express');
const router = express.Router();
const data = require('../sample_data');

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('success');
});

router.get('/', (req, res) => {
  console.log('request got to the router!');
  res.send(data);
});

module.exports = router;
