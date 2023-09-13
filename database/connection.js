const mysql = require('mysql2/promise');

const bd_usuario = 'usu_tcc_32'; // usuário
const bd_senha = 'curriculo23'; // senha
const bd_servidor = '10.120.168.203'; // servidor
const bd_porta = '3306'; // porta
const bd_banco = 'curriculo'; //nome do banco
let connection;

const config = {
    host: bd_servidor,
    port: bd_porta, //Default: 3306
    user: bd_usuario,
    password: bd_senha,
    database: bd_banco,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}

try {
    connection = mysql.createPool(config);

    console.log ('Chamou conexão MySql!');

} catch (error) {
    console.log (error);
}

module.exports = connection;