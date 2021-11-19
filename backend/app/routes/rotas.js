// import controller from '../controllers/registro_controller';
const controller = require('../controllers/registro_controller')();

module.exports = function(app) {
	app.get('/registros', controller.registros);

	app.post('/registros', controller.novo);

	app.post('/registros/atualiza', controller.atualiza_salva);

	app.delete('/registros/:id', controller.deleta);
}