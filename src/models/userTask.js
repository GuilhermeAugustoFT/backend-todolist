const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM ut';
    const [userTask]= await connection.execute(query);
    return userTask;
};

const getTasksByUser = async (userId) => {
    const query = 'SELECT t.title, t.status, t.createdAt FROM tasks t JOIN user_task ut ON t.id = ut.task_id JOIN users u ON ut.user_id = u.id WHERE u.id = ?';
    const [usersTasks] = await connection.execute(query, [userId]);
    return usersTasks;
};

const getUserByTask = async (taskId) => {
    const query = 'SELECT u.name, u.email FROM users u JOIN user_task ut ON u.id = ut.user_id JOIN Tasks t ON ut.task_id = t.id WHERE t.id = ?';
    const [user] = await connection.execute(query, [taskId]);
    return user;
};

const createUserTask = async (userId, taskId) => { // usar internamente na API
    const query = 'INSERT INTO user_task(user_id, task_id) VALUES (?, ?)';
    const [createdUserTask] = await connection.execute(query, [userId, taskId]);
    return createdUserTask;
};

const deleteUserTask = async (userId, taskId) => { // usar internamente na API
    const query = 'DELETE FROM user_task WHERE user_id = ? AND task_id = ?';
    const [deletedUserTask] = await connection.execute(query, [userId, taskId]);
    return deletedUserTask;
};

module.exports = {
    getAll,
    getTasksByUser,
    getUserByTask,
    createUserTask,
    deleteUserTask,
};