const usersModel = require('../models/usersModel');

const getAll = async (req, res) => {
    try {
        const users = await usersModel.getAll();
        return res.status(200).send(users);
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    }
};

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await usersModel.getUserById(id);
        return res.status(200).send(user);
    }
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    }
};

const createUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        await usersModel.createUser(name, email, password);
        return res.status(200).send({ message: 'User successfully created' });
    }
    catch(err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const {name, email, password } = req.body;
        await usersModel.updateUser(id, name, email, password);
        return res.status(200).send({ message: 'User successfully updated' });
    } 
    catch (err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    } 
};

const deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
        await usersModel.deleteUser(id);
        return res.status(200).send({ message: 'User successfully deleted' });
    }
    catch(err) {
        return res.status(500).send({ message: 'Internal Server Error! Try again later' });
    }

};

module.exports = {
    getAll,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};