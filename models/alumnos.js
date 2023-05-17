// Se importa el módulo 'response' de 'express'
const json = require('express/lib/response');

// Importa el módulo que contiene la conexión a la base de datos
const promise = require('../models/conexion.js');

// Importa el módulo que contiene la conexión a la base de datos
const conexion = require('../models/conexion.js');
const { resolve } = require('path');
const res = require('express/lib/response');

// Crea un objeto vacío llamado AlumnosDb
var Alumnos = {};

//Funcion agregar o crear
Alumnos.agregar = function agregar(alumno){
    return new Promise((resolve,reject)=>{
        var sqlConsulta = "insert into alumnos set ?";
        conexion.query(sqlConsulta,alumno,function(err,res){
            if(err){
                console.log('Surgio un error' + err.message);
                reject(err);
            } else{
                resolve({
                    id:res.insertId,
                    nombre:alumno.nombre,
                    paterno:alumno.paterno,
                    materno:alumno.materno,
                    edad:alumno.edad,
                    procedencia:alumno.procedencia
                });
            }
        });
    });
}

Alumnos.mostrarTodos = function mostrarTodos(){
    return new Promise ((resolve, reject)=>{
        var sqlConsulta = "select * from alumnos";
        conexion.query(sqlConsulta,null,function(err,res){
            if (err){
                console.log('Surgio un error ' + err.message);
                reject(err);
            }else {
                resolve(res);
            }
        });
    });
}

Alumnos.mostrarTodos2 = function mostrarTodos2(){
    return new Promise ((resolve, reject)=>{
        var sqlConsulta = "select * from alumnos";
        conexion.query(sqlConsulta,null,function(err,res){
            if (err){
                console.log('Surgio un error ' + err.message);
                reject(err);
            }else {
                resolve(res);
            }
        });
    });
}


// Función para obetner las calificaciones y mosyrasla en la base de datos y determinar si son aceptados o no.
Alumnos.buscarAlumnos = function buscarAlumnos(alumno) {
  return new Promise((resolve, reject) => {
    const sqlConsulta = "UPDATE alumnos SET promedio = ?, admision = ? WHERE id = ?";

    conexion.query(sqlConsulta, [alumno.promedio, alumno.admision, alumno.IdAlumno], function(err, results) {
      if (err) {
        console.log('Surgió un error: ' + err.message);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}





// Exportar el módulo AlumnosDb para que pueda ser utilizado en otros archivos
module.exports = Alumnos;