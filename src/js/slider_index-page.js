$(document).ready(function () {
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
})