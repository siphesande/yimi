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
app.get('/user_dashboard/:username', function (req, res) {
  var username = req.params.username;
 res.render("users");
});
<<<<<<< HEAD
app.get('/search',function (req, res){
  res.render('search');
});
app.get('/add', function(req, res){
  res.render('add');
});
app.get('/Picture', function (req, res){
  res.render('getPic');
});
app.get('status', function (req, res){
  res.render('progress_status');
});
=======

>>>>>>> 55c3fce8a02f01f51b6713860f9eae83d282da85
app.use(errorHandler);

var port = process.env.PORT || 5000;

var server = app.listen(port, function(){
  var host =server.address().address;
  var port = server.address().port;
  console.log('Node app is running on port http://%s:%s', host, port);
});
