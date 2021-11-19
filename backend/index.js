const config = require('./config/express');

const app = config();

app.listen(app.get(PORT), function() {
	console.log(`O Servidor está rodando na porta: ${PORT}`);
});
