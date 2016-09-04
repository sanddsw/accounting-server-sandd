var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    ejs = require('ejs'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
var scribe = require('scribe-js')(); //loads Scribe
var console = process.console;

require('./models/Client');
require('./models/Bon');
require('./models/Facturi');
require('./models/User');

var mongoUrl = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT;
var mongoDb = process.env.MONGO_DB;
var mongoUser = process.env.MONGO_USER;
var mongoPass = process.env.MONGO_PASS;
mongoose.connect('mongodb://' + mongoUrl + ':' + mongoPort + '/' + mongoDb, {
  user: mongoUser,
  pass: mongoPass
});

var routes = require('./routes/index');
var bonRoute = require('./routes/bonuri');
var client = require('./routes/clients');
var facturi = require('./routes/facturi');
var generator = require('./routes/generator');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(scribe.express.logger());
app.use('/', routes);
app.use('/clients', client);
app.use('/bonuri', bonRoute);
app.use('/generator', generator);
app.use('/facturi', facturi);
app.use('/users', users);
app.use('/logs', scribe.webPanel());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('404', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('404', {
    message: err.message,
    error: {}
  });
});

console.info("Server started...");


module.exports = app;
