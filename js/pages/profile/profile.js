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

$(".user-stars-rating").starRating({
  starIconEmpty: "far fa-star",
  starIconFull: "fas fa-star",
  starColorEmpty: "lightgray",
  starColorFull: "#FFC107",
  starsSize: 1, // em
  stars: 5,

  // Customize the feedback message if you want display messages
  showInfo: false,
  // titles: ["Very Bad", "Poorly", "Medium", "Good", "Excellent!"],

  //  Customize name of the hidden rating input
  inputName: "rating",
});

// Trigger a function when the rating value changes.
$(document).on("change", ".user-stars-rating", function (e, stars, index) {
  // alert(`Thxfor ${stars} stars!`);
  console.log(stars);
});
