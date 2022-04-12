// Form Password Input

let passwordInput = document.querySelectorAll(".password-input");
let passwordIcon = document.querySelectorAll(".form-password");

passwordIcon.forEach((el) => {
  el.addEventListener("click", () => {
    passwordInput.forEach((item) => {
      if (item.getAttribute("type") == "password") {
        item.setAttribute("type", "text");
      } else {
        item.setAttribute("type", "password");
      }
    });
  });
});
