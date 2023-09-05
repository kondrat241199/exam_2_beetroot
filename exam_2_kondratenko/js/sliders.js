$(".news-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1500,
  dots: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".header-slider").slick({
  dots: true,
  arrows: false,
  speed: 1500,
  vertical: true,
  verticalSwiping: false,
  pauseOnHover: false,
});
