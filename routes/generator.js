var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */

router.get('/:id', function(req, res, next) {
  res.render('bill', { title: 'Factura SandD Soft Works' });
});

module.exports = router;
