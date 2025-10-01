// Arrays con usuarios y contraseñas
let usuarios = ["123@gmail.com", "jesus@gmail.com"]; // La lista de correos válidos
let contrasenas = ["1234", "abcde"]; // La lista de claves, ¡cada una debe ir con su correo!

// Obtenemos todos los pedazos del HTML para controlarlos
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
// Ya no necesitamos loginView, welcomeView, ni welcomeMessage para la redirección

// Evento de login: ¡Escuchamos cuando el usuario hace clic en "Ingresar"!
loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); // ¡Importante! Evita que la página se recargue al enviar el formulario

  let email = document.getElementById("email").value.trim(); // Pilla el email que escribieron
  let password = document.getElementById("password").value.trim(); // Pilla la clave que escribieron

  // Verificamos si el usuario existe en nuestra lista secreta
  let index = usuarios.indexOf(email); 

  if (index !== -1 && contrasenas[index] === password) {
    
    // Construimos la URL de la página de bienvenida, adjuntando el correo como parámetro
    const urlRedireccion = `segundaPagg.html?correo=${encodeURIComponent(email)}`;
    
    // Redirigimos al usuario
    window.location.href = urlRedireccion;

  } else {
    // Incorrecto: Si no es un usuario válido o la clave no pega
    errorMessage.textContent = "Correo o contraseña incorrectos."; 
  }
});