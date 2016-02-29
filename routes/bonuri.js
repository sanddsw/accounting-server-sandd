var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bon = mongoose.model('Bon');

router.get('/', function(req, res, next) {
    Bon.find().exec(function(err, assets){
    if(err){ return next(err); }

    res.json(assets);
  });
});

router.post('/', function(req, res, next) {
  var asset = new Bon(req.body);
  asset.save(function(err, ass){
    if(err){ console.log(err);return next(err); }

    res.json(ass);
  });
});

router.post('/update/', function(req, res) {
  var asset = new Bon(req.body);
  Bon.findOneAndUpdate({_id: asset._id}, req.body, {upsert: true}, function(err, asset) {
    console.log(err);
    res.json(asset);
  })
});

//router.post('/upload/', upload.single('file'), function(req, res, next) {
//  res.json(req.file.filename).end();
//});

module.exports = router;
