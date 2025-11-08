    // SweetAlert2
    document.getElementById('logoutButton').addEventListener('click', function() {
        Swal.fire({
            title: 'Confirmar Salida',
            text: "¿Deseas cerrar la sesión de CPUCINA?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#dc3545',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sí, Salir'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index.html'; 
            }
        });
    });
    
    // link activo
    const path = window.location.pathname;
    const currentLink = path.substring(path.lastIndexOf('/') + 1);
    
    document.querySelectorAll('.nav-link-item').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentLink) {
            link.classList.add('active');
        }
    });