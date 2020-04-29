const burger = document.querySelector('.header__burger');
const logo = document.querySelector('.header__logo');
const menu = document.querySelector('.header__navigation');

burger.addEventListener('click', function(evt) {
  logo.classList.toggle('header__logo--active');
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__navigation--active');
});