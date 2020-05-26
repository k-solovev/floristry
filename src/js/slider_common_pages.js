$(document).ready(function () {
  $('.secondary-page__slider').slick({
    mobileFirst: true,
    arrows: false,
    slidesToShow: 3,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1919,
        settings: {
          arrows: true
        }
      },
    ],
  });
});