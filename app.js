// 'use strict'

var express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser');

var dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'coder123',
    port: 3306,
    database: 'yimi'
};

app.set('port', (process.env.PORT || 3000));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//setup middleware
//app.use(myConnection(mysql, dbOptions, 'single'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(express.static('public'));


function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
}


app.get("/", function(req, res) {
    res.render('index', {
    });
});

app.get('/users', function (req, res) {
 res.render("users");
});

app.get('/user_dashboard/:username', function (req, res) {
  var username = req.params.username;
 res.render("users");
});

app.use(errorHandler);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
