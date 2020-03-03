var createError = require('http-errors');
import express from 'express';
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hoganMiddleware = require('hogan-middleware');
const bodyparser = require('body-parser');

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

var indexRouter = require('./api/index');
var usersRouter = require('./api/users');
var postsRouter = require('./api/posts');
const cartsRouter = require('./api/cart');

var app = express();
app.use(bodyparser.json());

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts',postsRouter);
app.use('/cart',cartsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
/*
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

const CWD = process.cwd();
const PATH = CWD + '/data'; 
export const cartFs = PATH + '/cart.json';
import fs from 'fs';
/*fs.open(cartFs, 'w', function (err, file) {
  if (err) throw err;
  console.log(`File ${cartFs} is opened in write mode.`);
});
*/
const swaggerOptions = {
  swaggerDefinitions : {
    info: {
      title: 'eCommerce API',
      description: 'eCommerce API Definition',
      contact : {
        name: 'Rakesh venkat'
      },
      server: 'http://localhost:3000'
    }
  },
  apis: ['./api/users/*.js']
}

//const swaggerDocs = swaggerJsDoc(swaggerOptions);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
