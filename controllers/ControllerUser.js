
var moment = require('moment');

module.exports = function(app){
	
	var UserModel = app.models.ModelUser;
	
	var UserController = {
		index: function(req, res){
			UserModel.find(function(err, data){
				if(err){
					console.log(err);
				}
				res.render('user/index', {listUser: data, moment:moment});
			});
		},
		create: function(req, res){
			//res.send("respond with a create");
			res.render('user/create');
		},
		insert: function(req, res){
			//res.send("respond with a create");
			var model = new  UserModel(req.body);
			model.save(function(err, data){
				if(err){
					console.log(err);
				}else{
					//res.json(data);
					req.flash('info', 'User created successfuly');
					res.redirect('/user');
				}
			});
		},
		edit: function(req, res){
			//UserModel.findOne({_id: req.params.id});			
			UserModel.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
				res.render('user/edit', {user: data});
				}
			});
		},
		show: function(req, res){
			//UserModel.findOne({_id: req.params.id});			
			UserModel.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
				res.render('user/show', {user: data, moment:moment});
				}
			});
		},
		remove: function(req, res){
			//UserModel.findOne({_id: req.params.id});			
			UserModel.remove({_id:req.params.id}, function(err, data){
				if(err){
					console.log(err);
				}else{
					req.flash('info', 'User removed successfuly');
					res.redirect('/user');
				}
			});
		},
		update: function(req, res){
			//res.render('user/edit');
			//UserModel.findOne({_id: req.params.id});
			
			UserModel.findById(req.params.id, function(err, data){
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
							req.flash('info', 'User udated successfuly');
							res.redirect('/user');
						}
					});
				}
			});
		},
		list: function(req, res){
			UserModel.find(function(err, data){
				if(err){
					console.log(err);
				}else{
					res.json(data);
				}
			});
		}
	}
	return UserController;
}