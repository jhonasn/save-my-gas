var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send([
	  'valor 1',
	  'valor 2',
	  'valor 3'
  ])
});

router.get('/teste', function(req, res, next) {
  return 'retorno do teste'
});

module.exports = router;
