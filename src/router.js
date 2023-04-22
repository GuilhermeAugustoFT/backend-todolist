const express = require('express');
const router = express.Router(); // instancia um router a partir do express

const tasksController = require('./controllers/tasksController'); // importa o controller de tasks
const tasksMiddleware = require('./middlewares/tasksMiddleware'); // importa o controller de tasks
const usersController = require('./controllers/usersController');
const usersMiddleware = require('./middlewares/usersMiddleware'); 

// TASKS
router.get('/tasks', tasksController.getAll); // quando a rota for '/tasks' e GET, chama a função de pegar todas as tasks do controller
router.get('/tasks/:id', tasksController.getTaskById);
router.post('/tasks', tasksMiddleware.validateTitle, tasksController.createTask); // quando a rota for '/tasks' e POST, primeiro valida o body através do middleware, e se tudo ok, chama a função de criar uma nova task
router.delete('/tasks/:id', tasksController.deleteTask); // quando a rota for '/tasks' e delete, recebe um id no parametro e chama a função de deletar uma task
router.put('/tasks/:id', tasksMiddleware.validateTitle, tasksMiddleware.validateStatus, tasksController.updateTask); // quando a rota for '/tasks' e put, recebe um id no parametro, valida se o titulo está ok, valida se o status está ok e chama a função de atualizar uma task

// USERS
router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersMiddleware.validadeBody, usersController.createUser);
router.put('/users/:id', usersMiddleware.validadeBody, usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router; // exporta o router para os arquivos que precisarem