const tasksModel = require('../models/tasksModel'); // importa a model de tasks

const getAll = async (req, res) => {

    const tasks = await tasksModel.getAll(); // realiza a pesquisa no banco pelo model

    return res.status(200).json(tasks); // retorna as tasks com o status 200 (OK)
};

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask(req.body); // pega o body da requisição e passa para o método de criação de tarefas

    return res.status(201).json(createdTask); // retorna informações sobre a task criada, com o status 201 (CREATED)
};

module.exports = {
    getAll,
    createTask,
};