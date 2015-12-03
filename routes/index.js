/* GET home page. */
exports.index = function(req, res) {
  res.render('index', { title: 'Rota Index' });
};

exports.teste = function(req, res) {
  res.render('teste', { title: 'Rota Teste' });
};