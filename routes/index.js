var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/musix', function(req, res, next) {
  res.set({'Content-Type': 'audio/mpeg'});
  var readStream = fs.createReadStream('audio/song.mp3');
  readStream.pipe(res);
});

module.exports = router;
