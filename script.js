function toggleMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const body = document.querySelector('body');
  
    menuIcon.classList.toggle('open');
    menuIcon.classList.toggle('close');
    menu.classList.toggle('open');
    body.classList.toggle('fixed-position');
}