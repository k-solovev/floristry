const burger = document.querySelector('.header__burger');
const logo = document.querySelector('.header__logo');
const menu = document.querySelector('.header__navigation');
const orderBtn = document.querySelector('.sales__btn');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.document-body');
const popupWindow = document.querySelector('.popup-order');
const popupCloseBtn = document.querySelector('.popup-order__close');
const mouseIcon = document.querySelector('.promo__mouse');
const mouseWheelIcon = document.querySelector('.promo__mouse svg path');

// бургер
burger.addEventListener('click', function(evt) {
  logo.classList.toggle('header__logo--active');
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__navigation--active');
});

$(document).ready(function() {
  // модальное окно
  // функция открытия модального окна
  const openPopup = e => {
    $('.overlay').removeClass('visually-hidden');
    $('.document-body').addClass('scroll-hidden');
    $('.main').addClass('blur');
    $('.footer').addClass('blur');
  }

  // функция закрытия модального окна
  const closePopup = function () {
    $('.overlay').addClass('visually-hidden');
    $('.document-body').removeClass('scroll-hidden');
    $('.main').removeClass('blur');
    $('.footer').removeClass('blur');
  }

  console.log(openPopup);



  // открытие
  $('.sales__btn').on('click', function(e) {
    $('.overlay').removeClass('visually-hidden');
    $('.document-body').addClass('scroll-hidden');
    $('.main').addClass('blur');
    $('.footer').addClass('blur');
  
    // закрытие на крестик
    $('.popup-order__close').on('click', function(e) {
      $('.overlay').addClass('visually-hidden');
      $('.document-body').removeClass('scroll-hidden');
      $('.main').removeClass('blur');
      $('.footer').removeClass('blur');
    })

    // закрытие на клик вне окна
    $('.document-body').on('mouseup', function(e) {
      const popupWindow = $('.popup-order');
      if (e.target != popupWindow[0] && popupWindow.has(e.target).length === 0) {
        $('.overlay').addClass('visually-hidden');
        $('.document-body').removeClass('scroll-hidden');
        $('.main').removeClass('blur');
        $('.footer').removeClass('blur');
      }
    })

    // закрытие на ESC
    $('.document-body').on('keyup', function(e) {
      if (e.keyCode === 27) {
        $('.overlay').addClass('visually-hidden');
        $('.document-body').removeClass('scroll-hidden');
        $('.main').removeClass('blur');
        $('.footer').removeClass('blur');
      }
    })
  })

  // работа слайдера
  $('.slider').slick({
    mobileFirst: true,
    arrows:false,
    dots:true,
    slidesToShow:1,

    responsive:[
      {
        breakpoint: 767,
        settings: {
          slidesToShow:2,
          slidesToScroll:2
        }
      },
      {
        breakpoint: 1919,
        settings: 'unslick'
      }
    ]
  });
});

// анимация иконки мыши при наведении
mouseIcon.addEventListener('mouseover', evt => mouseWheelIcon.setAttribute('d', 'M19 29.46484L19 18.9296'));
mouseIcon.addEventListener('mouseout', evt => mouseWheelIcon.setAttribute('d', 'M19 9.46484L19 18.9296'));
