/* import modules, set constants, load express module */
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    root = __dirname,
    port = 3001,
    app = express(),
    routes_setter = require('./server/config/routes.js');

/* use modules */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* set ejs templating view */
app.set('views', root + '/views');
app.set('view engine', 'ejs');

/* cross origin */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* get our routes */
routes_setter(app);

/* start server */
var server = app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
