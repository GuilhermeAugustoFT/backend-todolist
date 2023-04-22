const tasksModel = require('../models/tasksModel'); // importa a model de tasks
const userTaskModel = require('../models/userTask');

const getAll = async (req, res) => {
    try {
        const tasks = await tasksModel.getAll(); // realiza a pesquisa no banco pelo model
        return res.status(200).json(tasks); // retorna as tasks com o status 200 (OK)
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    }
};

const getTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await tasksModel.getTaskById(id);
        return res.status(200).send(task);
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    }

};

const createTask = async (req, res) => {
    try {
        const { userId } = req.body;
        const createdTask = await tasksModel.createTask(req.body); // pega o body da requisição e passa para o método de criação de tarefas
        await userTaskModel.createUserTask(userId, createdTask.insertId); // adiciona na tabela de relação
        return res.status(201).json(createdTask); // retorna informações sobre a task criada, com o status 201 (CREATED)
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params; // retira o id dos parametros da requisição
        await userTaskModel.deleteUserTask(id);
        await tasksModel.deleteTask(id);
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    }

    return res.status(200).json(); // retorna o status 200 (OK)
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params; // retorna o id da tasks que será atualizada dos parametros da requisição
        await tasksModel.updateTask(id, req.body);
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    }

    return res.status(200).json(); // retorn o status 200 (OK)
};

module.exports = {
    getAll,
    getTaskById,
    createTask,
    deleteTask,
    updateTask,
};