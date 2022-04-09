$(() => {
  $(".responsive").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Scroll To Top Button
let goUpButton = document.querySelector(".go-to-up");
window.onscroll = () => {
  window.pageYOffset >= 1000
    ? (goUpButton.style.display = "block")
    : (goUpButton.style.display = "none");
};

goUpButton.onclick = () => {
  window.scrollTo(0, 0);
};
