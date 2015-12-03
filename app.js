var express = require('express'),
	load = require('express-load'),
	//ROTAS (ANTES DE VERMOS CONTROLLERS)
	//routes = require('./routes');
	//user = require('./routes/users');
	http = require('http');
	path = require('path');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//development only
if('development' == app.get('env')){
	app.use(express.errorHandler());
}	

//app.get('/', routes.index);
//app.get('/teste', routes.teste);
//app.get('/users', user.list);

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});