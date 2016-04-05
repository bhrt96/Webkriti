var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');

var app = express();
var api = require('./app/routes/api')(app, express);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', api);

app.use('/services', express.static(__dirname + '/public/app/services/'));
app.use('/controllers', express.static(__dirname + '/public/app/controllers/'));
app.use('/js',  express.static(__dirname + '/public/app/views/js/'));
app.use('/css', express.static(__dirname + '/public/app/views/css/'));
app.use('/images', express.static(__dirname + '/public/app/views/images/'));
app.use('/font', express.static(__dirname + '/public/app/views/font/'));
app.use('/uploads', express.static(__dirname + '/public/app/views/uploads/'));
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/app/views/index.html');
});

app.listen(config.port, function(err) {
	if(err) 
		console.log(err);
	else
		console.log('Connected to port %d', config.port);
});