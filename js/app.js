// Esperamos a que el DOM esté listo (Clean Code practice)
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos elementos
  const toggleBtn = document.querySelector('.header__toggle');
  const navMenu = document.querySelector('.header__nav');

  // Guard Clause: Si no hay botón (ej. diseño raro), no hacemos nada para evitar errores
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    // 1. Toggle de la clase (Activa la animación CSS)
    const isOpen = navMenu.classList.toggle('header__nav--open');

    // 2. Accesibilidad (Le damos una galleta extra al profe)
    // Cambiamos el atributo aria-expanded a true/false
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });
});
