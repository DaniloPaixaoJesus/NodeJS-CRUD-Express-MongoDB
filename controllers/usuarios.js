module.exports = function(app){
	
	var Usuario = app.models.usuarios;
	
	var UsuarioController = {
		index: function(req, res){
			Usuario.find(function(err, data){
				if(err){
					console.log(err);
				}
				res.render('usuarios/index', {listUser: data});
			});
		},
		create: function(req, res){
			//res.send("respond with a create");
			res.render('usuarios/create');
		},
		insert: function(req, res){
			//res.send("respond with a create");
			var model = new  Usuario(req.body);
			model.save(function(err, data){
				if(err){
					console.log(err);
				}else{
					//res.json(data);
					res.redirect('/usuarios');
				}
			});
		},
		edit: function(req, res){
			//Usuario.findOne({_id: req.params.id});			
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
				res.render('usuarios/edit', {user: data});
				}
			});
		},
		show: function(req, res){
			//Usuario.findOne({_id: req.params.id});			
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
				res.render('usuarios/show', {user: data});
				}
			});
		},
		remove: function(req, res){
			//Usuario.findOne({_id: req.params.id});			
			Usuario.remove({_id:req.params.id}, function(err, data){
				if(err){
					console.log(err);
				}else{
					res.redirect('/usuarios');
				}
			});
		},
		update: function(req, res){
			//res.render('usuarios/edit');
			//Usuario.findOne({_id: req.params.id});
			
			Usuario.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					var model = data;
					model.name = req.body.name;
					model.login = req.body.login;
					model.password = req.body.password;
					
					model.save(function(err, data){
						if(err){
							console.log(err);
						}else{
							res.render('usuarios');
						}
					});
				}
			});
		},
		list: function(req, res){
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