// Read More About Service
let cardTextContainer = document.querySelectorAll(
  ".all-services-container .card-text .text-wrapper"
);

cardTextContainer.forEach((paragraph) => {
  let numText = paragraph.innerHTML;
  paragraph.innerHTML = "";
  if (numText.length >= 20) {
    paragraph.innerHTML = numText.substring(0, 80) + "...";
  }
});
