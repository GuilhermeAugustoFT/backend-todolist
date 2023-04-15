const app = require('./app'); // busca o app exportado do arquivo app.js

require('dotenv').config(); // importa e configura o dotenv para o projeto ter acesso às variaveis de ambiente

const PORT = process.env.SERVER_PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // mostra a porta para o server rodar
