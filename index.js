let login = document.getElementById("login");
let signup = document.getElementById("signup");
let slide = document.getElementById("slide");
let signinForm = document.querySelector(".signin-form");
let signupForm = document.querySelector(".signup-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginForm = document.getElementById("login-form");

login.addEventListener("click", () => {
  slide.classList.add("slide-right");
  slide.classList.remove("slide-left");
  signinForm.style.zIndex = "2";
  signinForm.style.opacity = "1";
});

signup.addEventListener("click", () => {
  slide.classList.add("slide-left");
  slide.classList.add("slide-right");
  signinForm.style.zIndex = "-1";
  signinForm.style.opacity = "0";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(loginEmail.value);
});
