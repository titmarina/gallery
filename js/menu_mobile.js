const humburger = document.querySelector('.header_humburger');
const mobileMenu = document.querySelector('.header__mobile-menu');


humburger.addEventListener('click', openMenu);


function openMenu() {
    mobileMenu.classList.toggle('header__mobile-menu--active');
   
}
