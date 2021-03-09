"use strict";

const form = document.querySelector(".js-form");
const username = document.querySelector(".js-username");
const password = document.querySelector(".js-password");
const confirmPassword = document.querySelector(".js-confirmPassword");

//Functio to show input error
function showError(input, message) {
  const small = input.nextElementSibling;
  small.classList.add("error");
  small.innerHTML = message;
}

//Function to show success outline
function showSuccess(input) {
  const small = input.nextElementSibling;
  small.classList.remove("error");
  small.innerHTML = "";
}

//Function to email validation
function checkUsername(input) {
  const usernameValidation = /^[A-Za-z0-9\s]+$/g;
  if (usernameValidation.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "El nombre del usuario no es válido");
  }
}

function handleSubmit(ev) {
  ev.preventDefault();
  checkUsername(username);
  checkPassword(password);
}

form.addEventListener("submit", handleSubmit);
