var express = require('express');
var router = express.Router();
var app = require('../app');

var uniqId = 0;
/* GET home page. */
router.post('/', function(req, res, next) {
  
  console.log(req.body)
  
  storage[uniqId] = {
      uniqId: uniqId,
      email: req.body.email,
      password: req.body.password,
  }

  uniqId++;
  console.log(storage)
});

module.exports = router;
