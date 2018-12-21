const mongoose = require('mongoose');
let db = process.env.MONGOLAB_URI ||'mongodb://localhost:27017/shorturl' || 'mongodb://yummy:runner61@ds257851.mlab.com:57851/fccmongo1';
mongoose.connect(db, (err, db) => {
  if (err) {
    return console.log(err);
  }
  return console.log('Connected to DB');
}).catch((e) => {
  console.log('Db Connection Error:', e);
});

module.exports = {mongoose};
