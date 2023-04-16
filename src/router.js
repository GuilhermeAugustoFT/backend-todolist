const express = require('express');
const router = express.Router(); // instancia um router a partir do express

const tasksController = require('./controllers/tasksController'); // importa o controller de tasks
const tasksMiddleware = require('./middlewares/tasksMiddleware'); // importa o controller de tasks


router.get('/tasks', tasksController.getAll); // quando a rota for '/tasks' e GET, chama a função de pegar todas as tasks do controller
router.post('/tasks', tasksMiddleware.validadeBody, tasksController.createTask); // quando a rota for '/tasks' e POST, primeiro valida o body através do middleware, e se tudo ok, chama a função de criar uma nova task

module.exports = router; // exporta o router para os arquivos que precisarem