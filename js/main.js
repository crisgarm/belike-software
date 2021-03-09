"use strict";

const form = document.querySelector(".js-form");
const username = document.querySelector(".js-username");
const password = document.querySelector(".js-password");
const confirmPassword = document.querySelector(".js-confirmPassword");

function showError(input, message) {
  const small = input.nextElementSibling;
  small.classList.add("error");
  small.innerHTML = message;
}

function showSuccess(input) {
  const small = input.nextElementSibling;
  small.classList.remove("error");
  small.innerHTML = "";
}

function checkUsername(input) {
  const usernameValidation = /^[A-Za-z0-9\s]+$/g;
  if (usernameValidation.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "El nombre del usuario no es válido");
  }
}

function checkPassword(input) {
  const passwordValidation = /^(?=(?:.*[A-Z]){1})(?=(?:.*[#]))\S{7,}$/;
  if (passwordValidation.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(
      input,
      "La contraseña debe tener mínimo 7 caracteres, una mayúscula y una #"
    );
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value === input2.value) {
    showSuccess(input2);
  } else {
    showError(input2, "Las contraseñas no coinciden");
  }
}

function handleSubmit(ev) {
  ev.preventDefault();
  checkUsername(username);
  checkPassword(password);
  checkPasswordsMatch(password, confirmPassword);
}

form.addEventListener("submit", handleSubmit);
