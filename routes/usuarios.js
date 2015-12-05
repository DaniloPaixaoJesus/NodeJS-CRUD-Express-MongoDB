module.exports = function(app){
	var usuarios = app.controllers.usuarios;	
	app.get('/usuarios', usuarios.index); //action index
	app.get('/usuarios/create', usuarios.create); //action cadastro
	app.get('/usuarios/list', usuarios.list);
}