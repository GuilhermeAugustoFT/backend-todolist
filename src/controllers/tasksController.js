const tasksModel = require('../models/tasksModel'); // importa a model de tasks

const getAll = async (req, res) => {

    const tasks = await tasksModel.getAll(); // realiza a pesquisa no banco pelo model

    return res.status(200).json(tasks); // retorna as tasks com o status 200 (OK)
};

module.exports = {
    getAll,
};