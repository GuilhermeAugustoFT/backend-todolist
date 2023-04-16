const express = require('express');
const router = require('./router');

const app = express(); // cria uma instancia do express para o app

app.use(express.json()); // faz com que a api seja capaz de lidar com objetos json
app.use(router);

module.exports = app; // expora o app para os outros arquivos que precisarem