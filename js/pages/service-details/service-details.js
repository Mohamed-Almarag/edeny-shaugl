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

// Read More About Service
let cardTextContainer = document.querySelectorAll(
  ".author-service .card-text .text-wrapper"
);

cardTextContainer.forEach((paragraph) => {
  let numText = paragraph.innerHTML;
  paragraph.innerHTML = "";
  if (numText.length >= 20) {
    paragraph.innerHTML = numText.substring(0, 80) + "...";
  }
});
