var express = require('express');
var	load = require('express-load');
var	mongoose = require('mongoose');
	
var app = express();

/**  MongoDB connection **/
mongoose.connect('mongodb://localhost/aulaCrud', function(err){
	if(err) console.log('Error connect database: '+ err);
	console.log('DataBase connected');
});
//mongoose.connect('mongodb://username:password@host:port/database?options...');

// view engine setup
//app.set('port', process.env.PORT || 3000);
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname+'/public'));

//development only
if('development' == app.get('env')){
	app.use(express.errorHandler());
}	

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});