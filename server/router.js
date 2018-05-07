const express = require('express');
const router = express.Router();
// const data = require('../sample_data');
const ChatBox = require('./../database/index');

router.post('/', (req, res) => {
  const storage = {};
  storage.post = req.body.post;
  const chatBoxList = new ChatBox.ChatBox(storage);
  chatBoxList.save((err) => {
    if (err) {
      print(err);
    }
  });
  res.send('success');
});

router.get('/', (req, res) => {
  ChatBox.ChatBox.find({}).then((results) => {
    res.send(results);
  });
});

module.exports = router;
