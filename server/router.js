const express = require('express');
const router = express.Router();
const data = require('../sample_data');
const ChatBox = require('./../database/index');

router.post('/', (req, res) => {
  const storage = {};
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
  ChatBox.ChatBox.find({}).then((results) => {
    console.log(results);
    res.send(results);
  });
  // res.send(data);
});

module.exports = router;
