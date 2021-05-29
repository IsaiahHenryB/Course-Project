const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    minlength:[10, "You need at least 10 characters in your password"]
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;