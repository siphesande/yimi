var express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser');

var dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'nelisa',
    port: 3306,
    database: 'yimi'
};

app.set('port', (process.env.PORT || 5000));

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
    res.render('users_tony', {
    });
});


app.get("/alan", function(req, res) {
    res.render('users_alan', {
    });
});

app.get("/", function(req, res) {
    res.render('users2', {
    });
});




app.get('/user_dashboard/:username', function (req, res) {
  var username = req.params.username;
 res.render("users1");
});
app.get('/search',function (req, res){
  res.render('search');
});
app.get('/add', function(req, res){
  res.render('add');
});
app.get('/image', function (req, res){
  res.render('snapShot');
});
app.get('status', function (req, res){
  res.render('progress_status');
});

app.get('/progress_tony', function (req, res){
  res.render('progress_tony');
});

app.get('/progress_alan', function (req, res){
  res.render('progress_alan');
});

app.get('/forms', function (req, res){
  res.render('forms');
});

app.use(errorHandler);

var port = process.env.PORT || 5000;

var server = app.listen(port, function(){
  var host =server.address().address;
  var port = server.address().port;
  console.log('Node app is running on port http://%s:%s', host, port);
});
