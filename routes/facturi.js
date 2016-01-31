var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var Factura = mongoose.model('Facturi');
var multer  = require('multer');
var upload = multer({ dest: './uploads/' });
var phantom = require('phantom');

router.get('/', function(req, res, next) {
  Factura.find().exec(function(err, assets){
    if(err){ return next(err); }

    res.json(assets);
  });
});

router.get('/download/:id', function (req, res) {
    phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.open("views/index.html", function (status) {
                console.log("opened google? ", status);
                var cale = path.join(__dirname, '/github.png');
                page.render('github.pdf');
                console.log(cale);
                res.sendFile(path.join(__dirname, '/../github.pdf'));
            });
        });
    });
});

router.post('/', function(req, res, next) {
  var asset = new Factura(req.body);
  asset.save(function(err, ass){
    if(err){ console.log(err);return next(err); }

    res.json(ass);
  });
});
router.post('/update/', function(req, res, next) {
  var asset = new Factura(req.body);
  delete req.body["_id"];
  Factura.findOneAndUpdate({_id: asset._id}, req.body, {upsert: true}, function(err, asset) {
    console.log(err);

    res.json(asset);
  })
});
router.post('/upload/', upload.single('file'), function(req, res, next) {
  res.json(req.file.filename).end();
});
module.exports = router;
