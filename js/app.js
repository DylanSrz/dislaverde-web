/* ======================================
DISLAVERDE SAS - INTERACTIVIDAD
Paso 3 - JavaScript
====================================== */


// Esperar a que cargue todo el DOM
document.addEventListener('DOMContentLoaded', () => {


    const form = document.querySelector('.agenda-form');


    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();


            const nombre = form.querySelector('input[type="text"]').value.trim();
            const telefono = form.querySelector('input[type="tel"]').value.trim();
            const servicio = form.querySelector('select').value;


            if (nombre === '' || telefono === '' || servicio === '') {
                alert('Por favor completa todos los campos');
                return;
            }


            // Número de WhatsApp (REEMPLAZA con el real si deseas)
            const whatsapp = '573016540211';


            const mensaje = `Hola, soy ${nombre}.%0AQuiero agendar el servicio de: ${servicio}.%0AMi contacto es: ${telefono}`;


            const url = `https://wa.me/${whatsapp}?text=${mensaje}`;


            window.open(url, '_blank');


            form.reset();
        });
    }
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const elements = document.querySelectorAll('section, .card, .producto-card');
elements.forEach(el => observer.observe(el));