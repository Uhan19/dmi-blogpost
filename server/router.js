const express = require('express');
const router = express.Router();
const data = require('../sample_data');

router.get('/', (req, res) => {
  console.log(req.query);
  res.send(data);
});

module.exports = router;
