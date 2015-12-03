module.exports = function(app){
	var UsuarioController = {
		index: function(req, res){
			res.render('usuarios/index');
		},
		cadastro: function(){
			//do something
		}
	}
	return UsuarioController;
}