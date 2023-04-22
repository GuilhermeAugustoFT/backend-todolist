const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * from users';
    const [users] = await connection.execute(query);
    return users;
};

const getUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    const [user] = await connection.execute(query, [id]);
    return user;
};

const createUser = async (name, email, password) => {
    const query = 'INSERT INTO users(name, email, password, createdAt) VALUES (?, ?, ?, ?)';
    const now = new Date();
    const [createdUser] = await connection.execute(query, [name, email, password, now.toUTCString()]);
    return createdUser;
};

const updateUser = async (id, name, email, password) => {
    const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    const [updatedUser] = await connection.execute(query, [name, email, password, id]);
    return updatedUser;
};

const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = ?';
    const [deletedUser] = await connection.execute(query, [id]);
    return deletedUser;
};

module.exports = {
    getAll,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};