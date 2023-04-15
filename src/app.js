const express = require('express');
const router = require('./router');

const app = express(); // cria uma instancia do express para o app

app.use(router);

module.exports = app; // expora o app para os outros arquivos que precisarem