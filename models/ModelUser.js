module.exports = function(){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var usuario = new Schema({
		name: String, 
		login: String, 
		password: String, 
		date_cad:{
			type:Date, 
			default: Date.now
			}
		}
	);
	return mongoose.model('user', usuario);
}

/*
var db = mongoose.connect;
var UserSchema = mongoose.Schema({name: String});
var User = mongoose.model('User', UserSchema);
var testUser = new User({name:'Danilo Paixao'});
testUser.save(function(err, fluffy){
	if(err) return console.error(err);
	console.log('Collect inserted succeed');
});
*/