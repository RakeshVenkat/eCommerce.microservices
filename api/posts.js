var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/:x', function(req, res, next) {
  console.log(req.params, req.query);
  res.send('Get all posts');
});


router.post('/create', function(req, res, next) {
  console.log(req.body);
  res.send('working?',req.body);
})

module.exports = router;
