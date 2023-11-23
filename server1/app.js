var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser'); // Import body-parser

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addRouter = require('./routes/add');
var editRouter = require('./routes/edit');
var mondbRouter = require('./routes/mondb');
var signsRouter = require('./routes/signs');
var connectDB = require('./config/db');

const cors = require('cors');

var app = express();

app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json({ limit: '5mb' })); // Increase the payload size limit to 5mb or as needed
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
connectDB();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add', addRouter);
app.use('/edit',editRouter);
app.use('/mondb',mondbRouter);
app.use('/signs',signsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
