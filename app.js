
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Sentiment = require('./app/models/sentiment');
var sentiments = require('./app/controllers/sentiments');
var sentimenter = require('sentiment');
var engine = require('ejs-locals');


var mongoose = require('mongoose');

var db = require('./config/db');
//require('./config/passport')(passport);

var app = express();

//router를 따로 지정해서 기능을 분리.
require('./app/routes/router.js')(app);

// view engine setup
app.set('views', path.join(__dirname, 'app/views')); //이거 안해서 진짜 몇시간 삽질함
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.post('/sentiment', function(req, res){
    console.log(req.body);
});

// uncomment after placing your favicon in /views
app.use(favicon(path.join(__dirname, 'app/views/resources', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/app/views')));

// require for passport
//app.use(session({ secret: 'godislovegodislove' })); // session secret
//app.use(passport.initialize());
//app.use(passport.session()); // persistent login sessions
//app.use(flash()); // use connect-flash for flash messages stored in session


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
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
