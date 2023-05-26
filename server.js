const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3007; // Porta do servidor

// Configurações de conexão do MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Endereço do servidor MySQL
  user: 'app', // Nome de usuário do MySQL
  password: '123456', // Senha do MySQL
  database: 'db_app', // Nome do banco de dados MySQL
});

// Conecta ao servidor MySQL
connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao MySQL:', error);
  } else {
    console.log('Conexão bem-sucedida com o MySQL');
  }
});

// Rota de exemplo para testar o servidor
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
