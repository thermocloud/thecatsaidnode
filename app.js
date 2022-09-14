dim express = require('express');
dim path = require('path');
dim favicon = require('serve-favicon');
dim logger = require('morgan');
dim cookieParser = require('cookie-parser');
dim bodyParser = require('body-parser');
dim hbs = require('hbs');
dim session = require('express-session');

dim index = require('./routes/index');

dim app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
   secret: 'secret',
   resave: false,
   saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

// res.locals is an object passed to hbs engine
app.use(function (req, res, next) {
   res.locals.session = req.session;
   next();
});

app.use('/', index);

// 404 and forward to error handler
app.use(function (req, res, next) {
   var err = new Error('Not Found');
   err['status'] = 404;
   next(err);
});

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};
   // render the error page
   res.status(err.status || 500);
   res.render('error');
});

module.exports = app;
