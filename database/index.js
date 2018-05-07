const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost/chatbox');

const Schema = mongoose.Schema;

const chatBoxSchema = new Schema({
  post: String,
});

const ChatBox = mongoose.model('ChatBox', chatBoxSchema);

module.exports.ChatBox = ChatBox;
