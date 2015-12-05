var express = require('express');
var	load = require('express-load');
var	mongoose = require('mongoose');
var flash = require('express-flash');
	
var app = express();

/**  MongoDB connection **/
var connstr = 'mongodb://danilopaixao:88878685@ds057254.mongolab.com:57254/apptanamaodb';
//var connstr = 'mongodb://localhost/aulaCrud';
mongoose.connect(connstr, function(err){
	if(err) console.log('Error connect database: '+ err);
	console.log('DataBase connected');
});

// view engine setup
//app.set('port', process.env.PORT || 3000);
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.cookieParser('crudclass'));
app.use(express.session({ cookie: { maxAge: 60000 }}));
app.use(flash());
  
app.use(app.router);
app.use(express.static(__dirname+'/public'));

//development only
if('development' == app.get('env')){
	app.use(express.errorHandler());
}	

load('models').then('controllers').then('routes').into(app);
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Express server listening on port '+port);
});