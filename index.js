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
  fetch("https://interactive-login-2.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupForm2 = document.getElementById("signup-form");

signupForm2.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://interactive-login-2.onrender.com/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      fullname: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
});
