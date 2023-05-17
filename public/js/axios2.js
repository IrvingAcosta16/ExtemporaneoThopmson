//variables de la base de datos
let nombre = '';
let paterno = '';
let materno = '';
let edad = '';
let procedencia = '';


let IdAlumno = "";


//funcion general para estarlas mandando a llamar en las otras funciones
function leerInputs(){
    nombre = document.getElementById('nombre').value;
    paterno = document.getElementById('paterno').value;
    materno = document.getElementById('materno').value;
    edad = document.getElementById('edad').value;
    procedencia = document.getElementById('procedencia').value;
}


document.addEventListener('DOMContentLoaded', function(){
    axios.get('/mostrarTodos2').then(function (response){
      const alumnos = response.data;
  
      mostrarAlumnos2(alumnos);
    })
    .catch(function (error){
      console.log(error)
    });
  });

  function mostrarAlumnos2(alumnos) {
    const tabla = document.getElementById("alumnos_lista2");
    const template = document.getElementById("alumnos_fila2");
    // Recorre la lista de alumnos y crea elementos HTML para cada uno
    for (let i = 0; i < alumnos.length; i++) {
      const alumno = alumnos[i];
      console.log(alumno.id);
      
      // Clona el template de la fila de alumno y obtiene las celdas de la fila
      const fila = template.content.cloneNode(true);
      const celdas = fila.querySelectorAll("td");
      
      // Asigna los valores de cada propiedad del alumno a las celdas de la fila
      celdas[0].textContent = alumno.id;
      celdas[1].textContent = alumno.nombre;
      celdas[2].textContent = alumno.paterno;
      celdas[3].textContent = alumno.materno;
      celdas[4].textContent = alumno.edad;
      celdas[5].textContent = alumno.procedencia;
      celdas[6].textContent = alumno.promedio;
      celdas[7].textContent = alumno.admision;
      celdas[8].textContent = alumno.estado;

    // Agrega la fila clonada a la tabla
    tabla.appendChild(fila);
    }
  }