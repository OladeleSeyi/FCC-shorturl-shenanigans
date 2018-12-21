const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const cors = require('cors');
const dns = require('dns');
// File Inclusions
var {mongoose} = require('./db/dbconnect');
var {ShortUrl} = require('./Models/shorturl');
var shorten = require('./routes/shorten');


// Express
var app = express ();
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/public/index.html');
});

// Env Variables
var port = process.env.PORT || 7001;

// Routes
app.use('/api', shorten);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
  console.log('app is listening on ', port);
});
module.exports= {app};
