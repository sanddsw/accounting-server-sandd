var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Asset = mongoose.model('Client');

router.get('/', function(req, res, next) {
  Asset.find().exec(function(err, assets){
    if(err){ return next(err); }

    res.json(assets);
  });
});
router.post('/', function(req, res, next) {
  var asset = new Asset(req.body);
  asset.save(function(err, ass){
    if(err){ console.log(err);return next(err); }

    res.json(ass);
  });
});
router.post('/update/', function(req, res, next) {
  var asset = new Asset(req.body);
  delete req.body["_id"];
  Asset.findOneAndUpdate({_id: asset._id}, req.body, {upsert: true}, function(err, asset) {
    console.log(err);

    res.json(asset);
  })
});
module.exports = router;
