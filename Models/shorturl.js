const mongoose = require('mongoose');
var ShortUrl = mongoose.model('Urls', {
  originalUrl: {
    type: String,
    required: true,
    minlength: 5
  },
  urlCode: {
    type: String,
    required: true,
    minlength: 2
  },
  shortUrl: {
    type: String,
    required: true,
    minlength: 2
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});
module.exports = {ShortUrl};
