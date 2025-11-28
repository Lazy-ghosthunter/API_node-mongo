const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/estacionamento', {
});


const db = mongoose.connection;

//listener para erros
db.on('Error', console.error.bind(console, 'Erro de conexão com o banco: '));

//listener de sucesso
db.once('open', function() {
    console.log('Conexão com o mongoDB estabelecida com sucesso!');
});


module.exports = db;