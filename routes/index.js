var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ':) The Jungle!!' });
});

router.get('/hello', function(req, res, next) {
  res.json({ hello: 'world' })
})

module.exports = router;
