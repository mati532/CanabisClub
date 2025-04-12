// Selecciona el logo
const logo = document.querySelector('.logo');

// Alternar modo oscuro al hacer clic en el logo
logo.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el enlace redirija
    document.body.classList.toggle('dark-mode');
    
    // Opcional: Guardar preferencia en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Opcional: Cargar el modo guardado al iniciar
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

