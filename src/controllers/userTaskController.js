const userTaskModel = require('../models/userTask');

const getAll = async (req, res) => {
    try {
        const userTask = await userTaskModel.getAll();
        return res.status(200).send(userTask);
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later.' });
    }
};

const getTasksByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const tasks = await userTaskModel.getTasksByUser(userId);
        return res.status(200).send(tasks);
    }
    catch(err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later.' });
    }
};

const getUserByTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const user = await userTaskModel.getUserByTask(taskId);
        return res.status(200).send(user);
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later.' });
    }
};

module.exports = {
    getAll,
    getTasksByUser,
    getUserByTask,
};