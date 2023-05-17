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
  axios.get('/mostrarTodos').then(function (response){
    const alumnos = response.data;

    mostrarAlumnos(alumnos);
  })
  .catch(function (error){
    console.log(error)
  });
});

document.addEventListener('DOMContentLoaded', function(){
  axios.get('/mostrarTodos2').then(function (response){
    const alumnos = response.data;

    mostrarAlumnos2(alumnos);
  })
  .catch(function (error){
    console.log(error)
  });
});

//Funcion para agregar alumnos mediante axios
function agregar(){
    leerInputs();
    if (nombre == '' || paterno == '' || materno == '' || edad == '' || procedencia == '') {
        window.alert('Faltaron campos por rellenar')
    } else {
        datosAAgregar = {nombre, paterno, materno , edad, procedencia}
        axios.post('/agregar', datosAAgregar)
        .then(function (response) {
          location.reload()
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}

//Funcion para mostrar los alumnos
function mostrarAlumnos(alumnos) {
    const tabla = document.getElementById("alumnos_lista");
    const template = document.getElementById("alumnos_fila");
    
    // Recorre la lista de alumnos y crea elementos HTML para cada uno
    for (let i = 0; i < alumnos.length; i++) {
      const alumno = alumnos[i];
      
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
        // Crea el botón y configura sus atributos
      const boton = document.createElement("button");
      boton.type = "button";
      //asigna el boton al id
      boton.value = alumno.id;
      boton.className = "btn btn-primary";
      boton.dataset.bsToggle = "modal";
      boton.dataset.bsTarget = "#exampleModal";
      boton.textContent = "Editar Calificaciones";
      boton.onclick = function() {
        AsignarIdAlumno(this);
      };

      // Agrega el botón a la celda
      celdas[6].appendChild(boton);
      
      // Agrega la fila a la tabla
      tabla.appendChild(fila);
    }
  }

  function mostrarAlumnos2(alumnos) {
    const tabla = document.getElementById("alumnos_lista2");
    const template = document.getElementById("alumnos_fila2");
    
    // Recorre la lista de alumnos y crea elementos HTML para cada uno
    for (let i = 0; i < alumnos.length; i++) {
      const alumno = alumnos[i];
      
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
    }
  }


 const AsignarIdAlumno = (id) => {
  document.getElementById('promedio').value = "";
  document.getElementById('admision').value = "";

  IdAlumno = id.value
 }
  
  function ejemplo(){
    const promedio = document.getElementById('promedio').value;
    const admision = document.getElementById('admision').value;
    
    if (promedio == '' || admision == '') {
      window.alert('Faltaron campos por rellenar')
  } else {
      calificaciones = {IdAlumno, promedio, admision}
      axios.post('/AsignandoCalificaciones', calificaciones)
      .then(function (response) {
        location.reload()
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  }

  

  document.getElementById('btnAgregar').addEventListener('click', agregar);
  //document.getElementById('btnCapturar').addEventListener('click', buscarAlumnos);