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
    $('.index-page').addClass('scroll-hidden');
    $('.main').addClass('blur');
    $('.footer').addClass('blur');
  };

  // функция закрытия модального окна
  const closePopup = () => {
    $('.overlay').addClass('visually-hidden');
    $('.index-page').removeClass('scroll-hidden');
    $('.main').removeClass('blur');
    $('.footer').removeClass('blur');
  };

  // открытие
  $('.sales__btn').on('click', (e) => {
    openPopup();

    // закрытие на крестик
    $('.popup-order__close').on('click', closePopup);

    // закрытие на клик вне окна
    $('.index-page').on('mouseup', (e) => {
      const popupWindow = $('.popup-order');
      if (
        e.target != popupWindow[0] &&
        popupWindow.has(e.target).length === 0
      ) {
        closePopup();
      }
    });

    // закрытие на ESC
    $('.index-page').on('keyup', (e) => {
      if (e.keyCode === 27) {
        closePopup();
      }
    });
  });
});
