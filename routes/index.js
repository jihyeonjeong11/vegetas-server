var express = require('express');
var router = express.Router();
const user = require('../models').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(user.findAll().then(result=>(console.log(result[0].dataValues))))
  res.send(JSON.stringify({a:1}));
});

module.exports = router;
