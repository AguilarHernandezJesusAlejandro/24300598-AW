let usuariosGuardados = [];
try {
    let datosGuardados = localStorage.getItem("Usuarios"); 
    
    if (datosGuardados) {
    usuariosGuardados = JSON.parse(datosGuardados);
        
      if (!Array.isArray(usuariosGuardados)) {
            usuariosGuardados = [];
        }
    }
} catch (error) {
    console.log("Error al cargar usuarios, limpiando localStorage");
    localStorage.removeItem("Usuarios");
    usuariosGuardados = [];
}

let formu = document.getElementById("formLogin");

formu.addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("pass").value;

    if (!correo || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor rellena todos los campos',
            confirmButtonColor: '#dc143c', 
            confirmButtonText: 'Ok'
        });
        return; 
    }

    let usuarioEncontrado = usuariosGuardados.find(u => u.correo === correo && u.password === password);

    if (!usuarioEncontrado) {
        Swal.fire({
            icon: 'error',
            title: 'Error al iniciar sesión',
            text: 'Correo o contraseña incorrectos',
            confirmButtonColor: '#dc143c',
            confirmButtonText: 'Intentar de nuevo'
        });
        return;
    }
    localStorage.setItem("UsuarioActivo", JSON.stringify({
        usuario: usuarioEncontrado.usuario,
        correo: usuarioEncontrado.correo,
        telefono: usuarioEncontrado.telefono,
        direccion: usuarioEncontrado.direccion
    }));

    Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: 'Inicio de sesión exitoso',
        confirmButtonColor: '#1e40af', 
        confirmButtonText: 'Continuar'
    }).then(() => {
        window.location.href = "index.html"; 
    });
});