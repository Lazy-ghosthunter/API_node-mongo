const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8081;
const proprietarioController = require('./controllers/ProprietarioControlls.js');

//tratar o json
app.use(bodyParser.json());

//habilitar o cors
app.use(cors());

//rota teste
app.get('/', (req, res) => res.send('Estou aqui'));

//rota do controller
app.use('/proprietario', proprietarioController);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));

