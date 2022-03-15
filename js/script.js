let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); /* activa la x */
    navbar.classList.toggle('active');
}

/* desaparece el menú responsivo al darle click en un link */
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}