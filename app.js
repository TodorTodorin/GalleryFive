//var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//
//var routes = require('./routes/index');
//var users = require('./routes/users');
//
//var app = express();
//
//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
//
//// uncomment after placing your favicon in /public
////app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', routes);
//app.use('/users', users);
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});
//
//
//module.exports = app;

// Load core modules.
var path = require('path');

// Load third-party modules.
var express = require('express');
var bodyParser = require('body-parser');

// Create the Express application object.
var app = express();

// Configure Express to use the EJS view engine.
app.set('view engine', 'ejs');

// Tell Express where to find views.
app.set('views', path.join(__dirname, 'views'));

// Render HTML when the root path is requested.
app.get('/', function(req, res) {
    res.render('index');
});

// Do some addition when JSON is posted to "/add".
app.post('/add', bodyParser.json(), function(req, res) {
    res.json(req.body.a + req.body.b);
});

// Serve static files from the "public" folder.
app.use(express.static(path.join(__dirname, 'public')));

// Start the server on a custom port.
app.listen(process.env.PORT || 1337);