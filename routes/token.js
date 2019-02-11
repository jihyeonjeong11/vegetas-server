var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const secret = 'moo'

router.post('/', function(req, res, next) {
  console.log(JSON.stringify(req.body))
  var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + 5,
    data: req.body
  }, secret);
  console.log(token)

  res.json(token)
});

module.exports = router;
