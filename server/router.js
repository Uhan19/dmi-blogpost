const express = require('express');
const router = express.Router();
const data = require('../sample_data');

router.get('/', (req, res) => {
  console.log('request got to the router!');
  res.send(data);
});

module.exports = router;
