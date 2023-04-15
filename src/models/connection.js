const mysql = require('mysql2/promise');

require('dotenv').config(); // importa e configura o dotenv para o projeto ter acesso às variaveis de ambiente

const connection = mysql.createPool({ // criando uma conexão com o banco
    host: process.env.MYSQL_HOST, // porque o banco vai estar rodando na própria maquina
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

module.exports = connection; // exportando a conexão