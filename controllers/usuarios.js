module.exports = function(app){
	
	var Usuario = app.models.usuarios;
	
	var UsuarioController = {
		index: function(req, res){
			res.render('usuarios/index');
		},
		create: function(req, res){
			//res.send("respond with a create");
			var model = new  Usuario({
				name: 'Danilo fixo user',
				login: 'danilo',
				password: '12345'
			});
			model.save(function(err, data){
				if(err){
					console.log(err);
				}else{
					res.json(data);
				}
			});
		},
		list: function(req, res){
			//res.send("respond with a list");
			Usuario.find(function(err, data){
				if(err){
					console.log(err);
				}else{
					res.json(data);
				}
			});
		}
	}
	return UsuarioController;
}