// models/model.user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phoneNo: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
  versionKey:false
});

module.exports = mongoose.model('User', userSchema);
