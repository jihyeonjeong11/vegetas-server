var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(JSON.stringify(req.body))
  res.send(JSON.stringify(req.body))
      
  
});

module.exports = router;
