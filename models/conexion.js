const mysql = require('mysql2');

//Crear una conexión a la base de datos MySQL utilizando los datos de conexión adecuados
var sqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "extempo"
  });

    //Conectar a la base de datos
  sqlConnection.connect(function (error){
    if (error) {
      console.error('Error de conexión: ' + err);
      return;
    }else{
      console.log('Conectado a la base de datos MySQL.');
    }
 });

  module.exports = sqlConnection;