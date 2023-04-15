// Esse arquivo será responsável por acessar e alterar os dados das tasks no banco de dados
const connection = require('./connection');

const getAll = async () => {
    const query = 'SELECT * FROM tasks'; // query para buscar as tasks
    const [tasks] = await connection.execute(query); // executa a query no banco e salva na variavel 'tasks'. PS: este metodo retorna o seguinte array: [data, coisasAleatóriasDoBanco(buffer)], por isso fazer a desestruturação do array ([tasks]) 
    return tasks;
};

module.exports = { // exportando as funções de acesso ao banco
    getAll,
};