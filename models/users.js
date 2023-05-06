const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userName: { type: String, default: '' },
    password: { type: String,  default: ''},
});

module.exports = mongoose.model('users', userSchema);