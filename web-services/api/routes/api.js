var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send([
	  'hello',
	  'hi!',
	  'bye!'
  ]);
});

router.put('/', function(req, res, next) {
	res.send('this is a put response...');
})

module.exports = router;
