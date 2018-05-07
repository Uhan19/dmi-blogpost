const express = require('express');
const router = express.Router();
const data = require('../sample_data');
const ChatBox = require('./../database/index');
let num = 0;

router.post('/', (req, res) => {
  console.log(req.body);
  const storage = {};
  storage.id = num;
  num++;
  storage.post = req.body.post;
  const chatBoxList = new ChatBox.ChatBox(storage);
  chatBoxList.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('saved!');
    }
  });
  res.send('success');
});

router.get('/', (req, res) => {
  console.log('request got to the router!');
  res.send(data);
});

module.exports = router;
