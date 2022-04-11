// Form Password Input
let passwordInput = document.querySelector(".password-input");
let passwordIcon = document.querySelector(".form-password");

passwordIcon.addEventListener("click", () => {
  if (passwordInput.getAttribute("type") == "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
});
