module.exports = function(app){
	var UserController = app.controllers.ControllerUser;	
	app.get('/user', UserController.index); //action index
	app.get('/user/create', UserController.create); //action create get
	app.post('/user/create', UserController.insert); //action create post
	app.get('/user/list', UserController.list);
	app.get('/user/edit/:id', UserController.edit);
	app.put('/user/edit/:id', UserController.update);
	app.get('/user/show/:id', UserController.show);
	app.delete('/user/delete/:id', UserController.remove);
}