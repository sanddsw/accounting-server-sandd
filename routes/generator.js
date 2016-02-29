var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('bill', { title: 'Factura SandD Soft Works' });
});

module.exports = router;
