'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var chalk = require('chalk');
var port = process.env.PORT || 4000;

var nav = [
    {
        link: '/', Text:'Blog'
    },
    {
        link: '/about', Text:'About'
    },
    {
        link: '/contact', Text:'Contact'
    },
    {
        link: '/admin', Text:'Admin'
    },
    {
        link: '/post-entry', Text:'Post-entry'
    }
];

var routes = require('./routes/indexRoutes');

var indexRouter = require('./routes/indexRoutes')(nav);
var postRouter = require('./routes/postRoutes')(nav);
var aboutRouter = require('./routes/aboutRoutes')(nav);
var contactRouter = require('./routes/contactRoutes')(nav);

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
//app.engine('ejs', require('ejs').__express);
//app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', './routes/index');
//app.use('/users', users);
app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

//app.use('/', './routes/indexRouter');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'İlteriş Blog',
        nav: nav
    });
});

app.get('/post', function (req, res) {
    res.render('post', {
        title: 'İlteriş Blog',
        nav: nav
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        title: 'İlteriş Blog',
        nav: nav
    });
});

app.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'İlteriş Blog',
        nav: nav
    });
});



//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});


//app.use(function (err, req, res, next) {
//    res.status(err.status || 500);
//    res.send(err, {
//        message: err.message,
//        error: {}
//    });
//});

app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
    console.log('Express server listening on port ' + chalk.cyan(server.address().port));

});
