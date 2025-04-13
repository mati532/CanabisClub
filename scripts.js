const container = document.querySelector('.falling-buds-container');

function createBud() {
    const bud = document.createElement('div');
    bud.classList.add('bud');
    bud.style.left = Math.random() * 100 + '%';

    const duration = Math.random() * 4 + 6; // entre 6 y 10 segundos
    bud.style.animationDuration = duration + 's';

    container.appendChild(bud);

    setTimeout(() => {
        bud.remove();
    }, duration * 1000); // eliminar después del tiempo real de caída
}

// Crear un nuevo bud cada 200ms (más buds)
setInterval(createBud, 200);
