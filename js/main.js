"use strict";

const form = document.querySelector(".js-form");
const inputArray = document.querySelectorAll(".form__input");
const usernameInput = document.querySelector(".js-username");
const passwordInput = document.querySelector(".js-password");
const confirmPasswordInput = document.querySelector(".js-confirmPassword");
const submitButton = document.querySelector(".js-button");

//Flag
let errors = {
  username: true,
  password: true,
  confirmPassword: true,
};

//Regex
const usernameValidation = /^[A-Za-z0-9\s]+$/g;
const passwordValidation = /^(?=(?:.*[A-Z]){1})(?=(?:.*[#]))\S{8,}$/;

//Validations
function handleValidations(ev) {
  if (ev.target.id === "username") {
    checkUsername(usernameInput);
  }

  if (ev.target.id === "password") {
    checkPassword(passwordInput);
  }

  if (ev.target.id === "confirmPassword") {
    checkPasswordsMatch(passwordInput, confirmPasswordInput);
  }

  submitController();
}

//Loop to listen every input
inputArray.forEach((input) => {
  input.addEventListener("keyup", handleValidations);
});

//Cancel the form event
function handleSubmit(ev) {
  ev.preventDefault();
}

form.addEventListener("submit", handleSubmit);

//Check username
function checkUsername(input) {
  if (input.value.match(usernameValidation)) {
    showSuccess(input);
  } else {
    showError(input, "El nombre del usuario no es válido");
  }
}
//Check password
function checkPassword(input) {
  if (input.value.match(passwordValidation)) {
    showSuccess(input);
  } else {
    showError(
      input,
      "La contraseña debe tener más de 7 caracteres, una mayúscula y una #"
    );
  }
  checkPasswordsMatch(passwordInput, confirmPasswordInput);
}

//Check both passwords
function checkPasswordsMatch(input1, input2) {
  if (input2.value.match(passwordValidation) && input1.value === input2.value) {
    showSuccess(input2);
  } else {
    showError(input2, "Las contraseñas no coinciden");
  }
}

function showError(input, message) {
  const small = input.nextElementSibling;
  small.classList.add("error");
  small.innerHTML = message;
  errors[input.id] = true;
}

function showSuccess(input) {
  const small = input.nextElementSibling;
  small.classList.remove("error");
  small.innerHTML = "";
  errors[input.id] = false;
}

//Control errors
function submitController() {
  if (errors.username || errors.password || errors.confirmPassword) {
    submitButton.toggleAttribute("disabled", true);
  } else {
    submitButton.toggleAttribute("disabled", false);
  }
}

//Store username data
function setLocalStorage() {
  const inputValue = usernameInput.value;

  localStorage.setItem("username", inputValue);
  location.href = "user.html";
}

submitButton.addEventListener("click", setLocalStorage);
