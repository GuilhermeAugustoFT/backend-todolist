// Esse arquivo será responsável por acessar e alterar os dados das tasks no banco de dados
const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM tasks'; // query para buscar as tasks
    const [tasks] = await connection.execute(query); // executa a query no banco e salva na variavel 'tasks'. PS: este metodo retorna o seguinte array: [data, coisasAleatóriasDoBanco(buffer)], por isso fazer a desestruturação do array ([tasks]) 
    return tasks;
};

const createTask = async (task) => {
    const { title } = task; // retira o status da task e salva na variavel title
    const query = 'INSERT INTO tasks(title, status, createdAt) VALUES (?, ?, ?)';

    const now = new Date(); // salvar a data de criação da task

    const [createdTask] = await connection.execute(query, [title, 'pending', now.toUTCString()]); // vetor preenche as '?' da query com os valores

    return {insertId: createdTask.insertId}; // retorna apenas o id da task criada
};

module.exports = { // exportando as funções de acesso ao banco
    getAll,
    createTask,
};