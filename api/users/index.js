var express = require('express');
var users = require('../../data/users.json');
const router = express.Router();
var { validate, GET_REQUEST_ARG } = require('../../common/validate');
const schema = require('./schema');


/* GET users listing. */
router.get('/',
  (req, res, next) => {
    res.send(users);
  }
);


router.get('/:id',
  validate(schema.getUserSchema, GET_REQUEST_ARG),
  (req, res, next) => {
    res.send({ user: users.filter(eachUser => eachUser._id === req.params.id) });
  }
);


module.exports = router;
