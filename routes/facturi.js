var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var mongoose = require('mongoose');
var Factura = mongoose.model('Facturi');
var multer  = require('multer');
var upload = multer({ dest: './uploads/' });
var wkhtmltopdf = require('wkhtmltopdf');

router.get('/', function(req, res, next) {
  Factura.find().exec(function(err, assets){
    if(err){ return next(err); }

    res.json(assets);
  });
});

router.get('/download/:id', function (req, res) {
    wkhtmltopdf('http://localhost:8080/facturi/generate/:' + req.params.id , { pageSize: 'A4', marginTop: '0mm', marginBottom: '0mm', marginLeft: '0mm', marginRight: '0mm' })
        .pipe(fs.createWriteStream(path.join(__dirname, '../out.pdf')).on('close', function() {
            res.sendFile(path.join(__dirname, '../out.pdf'))
    }));
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
router.get('/pdf/:fileName', function(req, res) {
    res.sendFile(path.join(__dirname, '../', req.params.fileName));
});

router.post('/upload/', upload.single('file'), function(req, res, next) {
  res.json(req.file.filename).end();
});

router.get('/generate/', function(req, res, next) {
    res.render('bill', { title: 'Factura SandD Soft Works' });
});
module.exports = router;
