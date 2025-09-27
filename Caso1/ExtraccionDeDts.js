let alumnos = [];

function agregarAlumno() {
    const nombre = document.getElementById('nombre').value;
    const matricula = document.getElementById('matricula').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;

    const alumno = {
        nombre: nombre,
        matricula: matricula,
        correo: correo,
        telefono: telefono
    };

    // Agregar el alumno al array
    alumnos.push(alumno);

    // Actualizar la tabla con todos los alumnos
    actualizarTabla();

    // Limpiar los campos del formulario
    document.getElementById('alumnoForm').reset();
}

// Función para actualizar la tabla con los alumnos del array
function actualizarTabla() {

    //limpiar,agregar y dibujar... esplicacion del profe

    
    // Obtener el cuerpo de la tabla
    const tabla = document.getElementById('alumnoTabla').getElementsByTagName('tbody')[0];

    // Limpiar la tabla
    tabla.innerHTML = '';

    // Insertar filas para cada alumno
    alumnos.forEach(alumno => {
        const nuevaFila = tabla.insertRow();
        nuevaFila.insertCell(0).textContent = alumno.nombre;
        nuevaFila.insertCell(1).textContent = alumno.matricula;
        nuevaFila.insertCell(2).textContent = alumno.correo;
        nuevaFila.insertCell(3).textContent = alumno.telefono;
    });
}