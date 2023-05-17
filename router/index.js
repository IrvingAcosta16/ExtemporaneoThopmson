// Importar el módulo body-parser y el framework Express
const bodyParser = require("body-parser");
const express = require("express");

// Crear una instancia de Router
const router = express.Router();

// Importar el modelo de Alumnos de la base de datos
const Alumnos = require("../models/alumnos.js");
const res = require("express/lib/response.js");


let alumno = {};

router.get("/calificaciones", async (req, res)=>{
    res.render("capturar.html");
});
  
// Ruta principal que muestra una página con los datos del array "datos"
router.get("/", async (req, res) => {
    res.render("index.html");
});

router.get("/mostrarTabla",  async(req, res)=>{
    res.render("visualizacion.html")
});



//POST ES PARA PEGAR LOS DATOS
//GET PARA MOSTRATR LOS DATOS
router.post("/agregar", async(req,res) =>{
    const alumno = {
        nombre: req.body.nombre,
        paterno: req.body.paterno,
        materno: req.body.materno,
        edad: req.body.edad,
        procedencia: req.body.procedencia
    };

      // Insertar el alumno en la base de datos
    resultado = await Alumnos.agregar(alumno);
    res.json(resultado);
});

router.get("/mostrarTodos", async(req, res) =>{
    try{
        //Mostrar los registros
        resultado = await Alumnos.mostrarTodos();
        res.json(resultado);
    }catch(error){
        console.error(error);
        res.status(500).send("Error al cargar el listado de alumnos")
    }
});

router.get("/mostrarTodos2", async(req, res) =>{
    try{
        //Mostrar los registros
        resultado = await Alumnos.mostrarTodos2();
        res.json(resultado);
    }catch(error){
        console.error(error);
        res.status(500).send("Error al cargar el listado de alumnos")
    }
});

router.post("/AsignandoCalificaciones", async(req, res) => {
    const alumno = {
        IdAlumno: req.body.IdAlumno,
        promedio: req.body.promedio,
        admision: req.body.admision
    };
    console.log(alumno);
    resultado = await Alumnos.buscarAlumnos(alumno);
    res.json(resultado);
});



// Exportar el módulo Router para que pueda ser utilizado en otros archivos
module.exports = router;