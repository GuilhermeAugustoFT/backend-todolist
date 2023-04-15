const express = require('express');
const router = express.Router(); // instancia um router a partir do express

const tasksController = require('./controllers/tasksController'); // importa o controller de tasks


router.get('/tasks', tasksController.getAll); // quando a rota for '/tasks', chama a função de pegar todas as tasks do controller

module.exports = router; // exporta o router para os arquivos que precisarem