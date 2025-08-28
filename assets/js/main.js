// Navegación móvil y validación de formulario
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Menú hamburguesa accesible
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });
}

// Validación básica del formulario (el demo; no envía datos)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    // Limpia errores
    ['error-nombre','error-email','error-mensaje'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });

    if (!nombre.value.trim()) {
      document.getElementById('error-nombre').textContent = 'Por favor escribe tu nombre.';
      ok = false;
    }
    if (!email.value.includes('@')) {
      document.getElementById('error-email').textContent = 'Introduce un email válido.';
      ok = false;
    }
    if (mensaje.value.trim().length < 10) {
      document.getElementById('error-mensaje').textContent = 'Cuéntame un poco más (mín. 10 caracteres).';
      ok = false;
    }

    if (ok) {
      document.getElementById('formOk').hidden = false;
      form.reset();
    }
  });
}
