var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const secret = 'moo'
router.post('/', function(req, res, next) {
    console.log(req.body)
    var decoded = jwt.verify(req.body.token, secret);
    console.log(decoded)
    if(decoded){
     res.status(201).send('token exists')
    }
    else{ res.status(401).send('token expired')}
});

module.exports = router;
