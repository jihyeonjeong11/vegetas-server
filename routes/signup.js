var express = require('express');
var router = express.Router();
var app = require('../app');
const crypto = require('crypto');

const secret = 'abcdefg';


var uniqId = 0;
/* GET home page. */
router.post('/', function(req, res, next) {
  
  console.log(req.body.password)

  const hash = crypto.createHmac('sha256', secret)
  .update(req.body.password)
  .digest('hex');
  console.log(hash.length)
  
});

module.exports = router;
