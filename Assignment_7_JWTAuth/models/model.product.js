// models/model.product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true,
  versionKey:false
});

module.exports = mongoose.model('Product', productSchema);
