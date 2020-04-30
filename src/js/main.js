const burger = document.querySelector('.header__burger');
const logo = document.querySelector('.header__logo');
const menu = document.querySelector('.header__navigation');
const orderBtn = document.querySelector('.sales__btn');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.document-body');
const popupWindow = document.querySelector('.popup-order');
const popupCloseBtn = document.querySelector('.popup-order__close');

// бургер
burger.addEventListener('click', function(evt) {
  logo.classList.toggle('header__logo--active');
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__navigation--active');
});

//модальное окно
orderBtn.addEventListener('click', function(evt) {
  overlay.classList.remove('visually-hidden');
  body.classList.add('scroll-hidden');

  popupCloseBtn.addEventListener('click', function(evt) {
    overlay.classList.add('visually-hidden');
    body.classList.remove('scroll-hidden');
  });
})

// body.addEventListener('click', function(evt) {
//   if (evt.target != popupWindow) {
//     overlay.classList.add('visually-hidden');
//     body.classList.remove('scroll-hidden');
//   }
// });