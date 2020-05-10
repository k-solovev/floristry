$(document).ready(function () {
  // бургер
  $('.header__burger').on('click', function (e) {
    $('.header__logo').toggleClass('header__logo--active');
    $(this).toggleClass('header__burger--active');
    $('.header__navigation').toggleClass('header__navigation--active');
  });

  // модальное окно
  // функция открытия модального окна
  const openPopup = () => {
    $('.overlay').removeClass('visually-hidden');
    $('.document-body').addClass('scroll-hidden');
    $('.main').addClass('blur');
    $('.footer').addClass('blur');
  };

  // функция закрытия модального окна
  const closePopup = () => {
    $('.overlay').addClass('visually-hidden');
    $('.document-body').removeClass('scroll-hidden');
    $('.main').removeClass('blur');
    $('.footer').removeClass('blur');
  };

  // открытие
  $('.sales__btn').on('click', (e) => {
    openPopup();

    // закрытие на крестик
    $('.popup-order__close').on('click', closePopup);

    // закрытие на клик вне окна
    $('.document-body').on('mouseup', (e) => {
      const popupWindow = $('.popup-order');
      if (
        e.target != popupWindow[0] &&
        popupWindow.has(e.target).length === 0
      ) {
        closePopup();
      }
    });

    // закрытие на ESC
    $('.document-body').on('keyup', (e) => {
      if (e.keyCode === 27) {
        closePopup();
      }
    });
  });

  // работа слайдера
  $('.slider').slick({
    mobileFirst: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1919,
        settings: 'unslick',
      },
    ],
  });
});
