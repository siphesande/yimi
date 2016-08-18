var express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser');

var recognise = require('./recognise');

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

app.use(bodyParser.urlencoded({ extended: false, limit : '5mb' }));

app.use(bodyParser.json());

app.use(express.static('public'));

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
}

app.get("/login", function(req, res) {
    res.render('login', {
    });
});


app.get("/notifications", function(req, res) {
    res.render('notifications', {
    });
});

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

app.get('/upload', function(req, res){
    res.render('upload');
});

app.post('/upload', function(req, res){

    base64Data = req.body.img.replace(/^data:image\/png;base64,/,"");
    binaryData = new Buffer(base64Data, 'base64').toString('binary');

    var fileName = (new Date()).getTime() + ".png";
    require("fs").writeFile( './public/' +  fileName, binaryData, "binary", function(err) {
        if (err)
            return res.send({status : 'error', error : err})

        var url = 'http://yimi.projectcodex.co/' + fileName;

        //recognise
        recognise(url,
        "1d10b4f2-220c-41ff-833d-0e7aa99fac26", function(err, response){


          if (response && response.faces){
            var modelName = response.faces[0].results[0].name;

            var score = response.faces[0].results[0].score;
            console.log('score : ' + score);

            var scoreThreshold = process.end.SCORE || 0.8;
            console.log('scoreThreshold : ' + scoreThreshold);

            var matched = score > 0.5;


            res.json({status : "success", modelName : modelName, matched : matched});
          }
          else{
            console.log(err);
            console.log(response);
            return res.json({status : "failed", modelName : '', matched : false});
          }

        });
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
