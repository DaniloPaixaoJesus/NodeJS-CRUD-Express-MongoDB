module.exports = function(app){
	var usuarios = app.controllers.usuarios;	
	app.get('/usuarios', usuarios.index); //action index
	app.get('/usuarios/create', usuarios.create); //action create get
	app.post('/usuarios/create', usuarios.insert); //action create post
	app.get('/usuarios/list', usuarios.list);
	app.get('/usuarios/edit/:id', usuarios.edit);
	app.put('/usuarios/edit/:id', usuarios.update);
	app.get('/usuarios/show/:id', usuarios.show);
	app.delete('/usuarios/delete/:id', usuarios.remove);
}