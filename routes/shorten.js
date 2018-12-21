var express = require('express');
var router = express.Router();
var {ShortUrl} = require('../Models/shorturl');
const validUrl = require("valid-url");
const shortid = require("shortid");
const dns = require('dns');

router.get('/:code', async (req, res) => {
  let urlCode = req.params.code.trim();
  if (!urlCode.length>5) {
    return res.send(400).send('Invalid ID');
  } else {
    ShortUrl.findOne({urlCode}).then((link) => {
      if (!link) {
        return res.status(400).send('There is no record of given id');
      }
      res.status(200).send(link.originalUrl);
      return res.redirect(link.originalUrl);
    }).catch((e) => {
      console.log(e);
      res.status(404).send();
    });
  }

});
router.post('/', (req, res) => {
  // let data = { originalUrl: req.body.originalUrl}
  let data = req.body.originalUrl;
  let originalUrl = data;
  dns.lookup(data, (err, address, family) => {
    console.log(err);
    if (!err) {
      console.log('FIND ONE');
      ShortUrl.findOne({originalUrl}).then((doc
      ) => {
        if (doc) {
          console.log('FIND ONE DONE');
          res.status(200).json(doc.shortUrl);
          return res.send(`This url has already been shortened, here is the link `);
        } else {
          let originalUrl = data;
          let urlCode = shortid.generate();
          let shortUrl = `http://localhost:7001/api/${urlCode}`;
          let updatedAt = new Date();
          const saver = new ShortUrl({
            originalUrl,
            shortUrl,
            urlCode,
            updatedAt
          });
          saver.save().then((doc) => {

            return res.status(200).send(doc.shorturl);
          }, (e) => {
            console.log(e);
            return res.status(400).send('error:', e);
          })
        }

      }).catch((e) => {
        console.log(e);
      })
    } else {
      console.log("401 status");
      return res.status(401).send("Invalid Url");
    }
  });
});

module.exports = router;
