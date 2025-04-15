// Contenedor de cogollos que caen
const container = document.querySelector('.falling-buds-container');

// Función para crear un cogollo que cae
function createBud() {
    const bud = document.createElement('div');
    bud.classList.add('bud');
    bud.style.left = Math.random() * 100 + '%';
    bud.style.animationDuration = (Math.random() * 2 + 2) + 's'; // 2-4s aleatorio
    
    container.appendChild(bud);
    
    setTimeout(() => {
        bud.remove();
    }, 4000); // coincide con duración máxima de animación
}

// Crear cogollo cada 400ms
setInterval(createBud, 400);

// Logo interactivo que cambia de página
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    // Hacer que aparezcan muchos cogollos al hacer clic
    for(let i = 0; i < 20; i++) {
        setTimeout(createBud, i * 50);
    }
    
    // Cambiar a index después de un retraso
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
});

// Contador de carrito
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
let count = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
        button.textContent = 'Añadido';
        button.style.background = '#892193';
        
        setTimeout(() => {
            button.textContent = 'Añadir al carrito';
            button.style.background = '#27ae60';
        }, 1000);
    });
});

// Usar el almacenamiento local para mantener el contador del carrito
document.addEventListener('DOMContentLoaded', () => {
    // Recuperar el contador del carrito si existe
    const savedCount = localStorage.getItem('cartCount');
    if (savedCount) {
        count = parseInt(savedCount);
        cartCount.textContent = count;
    }
});

// Guardar contador en almacenamiento local cuando cambia
function updateCartStorage() {
    localStorage.setItem('cartCount', count);
}

// Actualizar almacenamiento cuando se añade un producto
addToCartButtons.forEach(button => {
    button.addEventListener('click', updateCartStorage);
});

// Modo oscuro
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Cambiar los logos
    const lightLogo = document.querySelector('.light-logo');
    const darkLogo = document.querySelector('.dark-logo');
    
    if (document.body.classList.contains('dark-mode')) {
        lightLogo.style.display = 'none';
        darkLogo.style.display = 'block';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        lightLogo.style.display = 'block';
        darkLogo.style.display = 'none';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Verificar al cargar la página
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.light-logo').style.display = 'none';
    document.querySelector('.dark-logo').style.display = 'block';
}