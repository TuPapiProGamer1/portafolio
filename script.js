// Modo oscuro/claro
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.className = 'fas fa-sun';
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        darkModeIcon.className = 'fas fa-moon';
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }
    
    // Guardar preferencia
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Cargar preferencia de modo oscuro
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
}

// Scroll suave
document.querySelectorAll('nav a, .hero-buttons a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Cambio de color del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animaciones al hacer scroll
const elementos = document.querySelectorAll('.fade-in');

const mostrarElemento = () => {
    elementos.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', mostrarElemento);
mostrarElemento(); // Ejecutar en carga inicial