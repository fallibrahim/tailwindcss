const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === "true";

  menuButton.setAttribute("aria-expanded", !expanded);
  mobileMenu.classList.toggle("hidden");

  // switch icon
  if (expanded) {
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.add('bx-menu');
  } else {
    menuIcon.classList.remove('bx-menu');
    menuIcon.classList.add('bx-x');
  }
});
