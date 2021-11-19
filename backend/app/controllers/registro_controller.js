import registrosModel from '../models/registros';

const controller = {};

module.exports = function() {
	const registros = registrosModel();
	const registro_id = 1;

	controller.create = function(req, res) {
		const nome1 = req.body.nome;
		const email1 = req.body.email;
		const pessoa = { _id: registro_id++, nome: nome1, email: email1 };
		console.log('adicionar: ' + pessoa);
		registros.push(pessoa);
		// res.json(registros);
		res.json({ "status": "OK"}) ;
	};

	controller.update = function(req, res) {
		const id1 = req.body.id;
		const nome1 = req.body.nome;
		const email1 = req.body.email;

		registros[id1] = { nome: nome1, email: email1 };

		res.redirect('/') ;
	};

	controller.delete = function(req, res) {
		const pos = -1;
		id = parseInt(req.params.id);
		console.log("id: " + id);
		console.log("type id: " + typeof(id));
		var deleted = false;
		for (var i=0; i<registros.length; i++) {
			console.log("registro_id: " + registros[i]._id);
			console.log("type registro_id: " + typeof(registro_id));
			if (registros[i]._id === id) {
				registros.splice(i, 1);
				deleted = true;
				break;
			}
		} 
		if (deleted)
			res.json(registros);
		else {
			res.json({ "status": "Could not find element to delete with _id:" + id});
		}

	};

	controller.registros = function(req,res) {
		res.json(registros);
	};

	return controller;
};
