var express = require('express');
var router = express.Router();

//var app = require('../app');

/* GET home page. */
router.get('/a/b', function(req, res, next) {
  console.log(req);
    res.render('userProfile', {
        id: 10001, 
        name: 'Rakesh Venkat',
        role: 'lead developer',
        status: 'Active'
  });
});

module.exports = router;
